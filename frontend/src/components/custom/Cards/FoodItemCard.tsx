import { useEffect, useState } from "react";
import { IItem } from "../../../types/interfaces";
import { convertByteArrayToImage } from "../../../utils/utils";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Swal from "sweetalert2";

function FoodItemCard({ data }: { data: IItem }) {
  const [imageUri, setImageUri] = useState("");
  useEffect(() => {
    convertByteArrayToImage(data.itemImage)
      .then((result: string) => {
        setImageUri(result);
      })
      .catch((ex) => console.log(ex));
  }, [data]);
  return (
    <>
      <div className="card my-2" style={{ border: 0 }}>
        <img src={imageUri} className="card-img-top" alt="" />
        <div className="card-body">
          <h5 className="card-title flex justify-between">
            {data.name}
            <span className="font-semibold text-sm px-2 py-1 bg-ph-yellow-soft rounded-xl">
              {data.categoryId.name}
            </span>
          </h5>
          <div className="card-text">
            <div className="Description">{data.description}</div>
            <div className="mt-2">
              <div className="font-semibold text-green-700">
                <div className="inline-block bg-green-100 py-1 px-2 rounded-lg">
                  <span className="text-xl">{data.price}</span>
                  <CurrencyRupeeIcon
                    className="mb-1"
                    style={{ fontSize: "14px" }}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end mt-2">
            <button
              className="btn-theme-filled-shadowed"
              onClick={() => {
                const cart = localStorage.getItem("cart");
                console.log(cart);
                if (cart && cart.length > 0) {
                  const cartData = JSON.parse(localStorage.getItem("cart"));
                  localStorage.setItem(
                    "cart",
                    JSON.stringify([
                      ...cartData,
                      {
                        id: data.id,
                        name: data.name,
                        category: data.categoryId.name,
                        price: data.price,
                      },
                    ])
                  );
                } else {
                  localStorage.setItem(
                    "cart",
                    JSON.stringify([
                      {
                        id: data.id,
                        name: data.name,
                        category: data.categoryId.name,
                        price: data.price,
                      },
                    ])
                  );
                }
                Swal.fire({
                  position: "center",
                  icon: "success",
                  title: `Added ${data.name} to cart.`,
                  showConfirmButton: false,
                  timer: 1500,
                });
              }}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default FoodItemCard;
