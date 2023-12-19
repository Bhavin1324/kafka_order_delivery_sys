import { IOrder } from "../../types/interfaces";
import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { ApiEndpoints } from "../../types/enums";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { setProgress } from "../../features/slices/loadingSlice";
function OrderCard({ order, loadData }: { order: any; loadData: () => void }) {
  const dispatch = useDispatch();
  const UpdateHook = useFetch(
    import.meta.env.VITE_PREPARATION_SERVICE_URI + ApiEndpoints.DISPATCH_ORDER,
    "POST"
  );
  const VerifyHook = useFetch(
    import.meta.env.VITE_DELIVERY_SERVICE_URI + ApiEndpoints.SEND_OTP_TO_CUST,
    "GET"
  );
  const DeliveryHook = useFetch(
    import.meta.env.VITE_DELIVERY_SERVICE_URI +
      ApiEndpoints.UPDATE_STATUS_TO_DELIVERED,
    "GET"
  );
  const Toast = Swal.mixin({
    toast: true,
    position: "top-right",
    iconColor: "white",
    customClass: {
      popup: "colored-toast",
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  });
  const [OTP, setOTP] = useState(null);
  useEffect(() => {}, []);

  const formatPrice = (price: number) => `$${price}`;
  const verifyOrder = (id, orderid) => {
    dispatch(setProgress(70));
    document.getElementById("verifybtn").setAttribute("disabled", "disabled");
    VerifyHook.MakeHttpRequest(id).then(async (result) => {
      document.getElementById("verifybtn").removeAttribute("disabled");
      if (result.result.status == 200) {
        dispatch(setProgress(100));
        Toast.fire({
          title: "OTP Sent to Customer !",
          icon: "success",
        });

        const tempotp = result.result.message;
        console.log(tempotp);
        const { value: OTPinput } = await Swal.fire({
          title: "Confirm Customer OTP ! ",
          input: "number",
          inputLabel: "",
          inputPlaceholder: "Enter 6 digit OTP !",
        });
        if (OTPinput.toString() == tempotp) {
          DeliveryHook.MakeHttpRequest(orderid).then((result) => {
            if (result.result.status == 200) {
              Swal.fire("OTP Verified!", "Order is delivered !", "success");
              loadData();
            } else {
              Toast.fire({
                title: "Server Error, Try agin !",
                icon: "error",
              });
            }
          });
        } else {
          Swal.fire({
            icon: "error",
            title: "Verification Failed..",
            text: "You have entered Wrong OTP !",
          });
        }
      } else {
        Toast.fire({
          title: "Server Error !",
          icon: "error",
        });
      }
    });
  };

  const updateToCompleted = (id) => {
    const payload = {
      outletid: localStorage.getItem("outlet"),
      orderid: id,
    };
    UpdateHook.setPayload(payload);
    UpdateHook.MakeHttpRequest().then((result) => {
      if (result.result.status != 0) {
        Toast.fire({
          title: "Delivery Person Assigned !",
          icon: "success",
        });
        loadData();
      } else {
        Toast.fire({
          title: "Error in Assigning Delivery Person !",
          icon: "error",
        });
      }
    });
  };
  return (
    <div className="bg-white m-3 align-middle pt-3 px-3 flex-col max-w-fit   rounded shadow-md">
      <h3 className="font-bold text-xl text-center text-ph-primary mb-2">
        {order.name}'s Order
      </h3>
      <div className="h-fit">
        {order.items.map((item) => (
          <div key={item.name} className="flex justify-center mb-2">
            <span className="flex-grow font-semibold">{item.name}</span>
            <span className="w-1/4 text-right font-semibold mr-2">
              {item.quantity}
            </span>
          </div>
        ))}
      </div>
      {order.phoneNo && (
        <p className="font-bold  text-left text-lg mb-1">
          Phone No : {order.phoneNo}
        </p>
      )}
      {order.address && (
        <p className="font-bold  text-left text-lg mb-1">
          Address : {order.address}
        </p>
      )}

      <div className="my-3 flex justify-between">
        <p className="font-bold   text-left text-lg mb-1">
          {" "}
          {formatPrice(order.payable_amount)}
        </p>
        {order.order_status != "IN_TRANSIT" && (
          <button
            type="button"
            className=" btn-theme"
            onClick={() => {
              updateToCompleted(order.id);
            }}
          >
            complete
          </button>
        )}
        {order.order_status == "IN_TRANSIT" && (
          <button
            type="button"
            id="verifybtn"
            className=" btn-theme"
            onClick={() => {
              verifyOrder(order.userid, order.id);
            }}
          >
            Verify
          </button>
        )}
      </div>
    </div>
  );
}

export default OrderCard;
