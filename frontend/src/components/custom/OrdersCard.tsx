import { IOrder } from "../../types/interfaces";
import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { ApiEndpoints } from "../../types/enums";
import Swal from "sweetalert2";
function OrderCard({ order , loadData }: { order: IOrder , loadData:()=>void}) {
  const UpdateHook =  useFetch(import.meta.env.VITE_PREPARATION_SERVICE_URI+ ApiEndpoints.DISPATCH_ORDER,"POST")
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-right',
    iconColor: 'white',
    customClass: {
      popup: 'colored-toast',
    },
    showConfirmButton: false,
    timer: 1500,
    timerProgressBar: true,
  })

  useEffect(() => {
  }, [])
  
    const formatPrice = (price: number) => `$${price.toFixed(2)}`;
 const updateToCompleted=(id)=>{
  const payload = {
    outletid :"90906b0000e94902a9c9" ,
    orderid:id
  }
        UpdateHook.setPayload(payload)
        UpdateHook.MakeHttpRequest().then((result)=>{
          if(result.result.status!=0){
            Toast.fire({
              title: "Delivery Person Assigned !",
              icon: "success"
            });
            loadData()
          }else{
            Toast.fire({
              title: "Error in Assigning Delivery Person !",
              icon: "error"
            });
          }
        })

 }
    return (
      <div className="bg-white m-3 align-middle p-4 flex-col  rounded shadow-md">
        <h3 className="font-bold text-xl text-center mb-2">{order.name}'s Order</h3>
        <div className="h-2/4" >
          {order.items.map((item) => (
            <div key={item.name} className="flex justify-center mb-2">
              <span className="flex-grow">{item.name}</span>
              <span className="w-1/4 text-right mr-2">{item.quantity}</span>

            </div>
          ))}
        </div>
        <p className="font-bold  text-ph-yellow-soft text-center text-lg mb-2">Total: {formatPrice(order.payable_amount)}</p>
       <div className="my-2 flex justify-center">
      
        <button type="button" className=" btn-theme" onClick={()=>{updateToCompleted(order.id)}}> complete </button>
      
        </div>
      </div>
    );
  }
  
  export default OrderCard;