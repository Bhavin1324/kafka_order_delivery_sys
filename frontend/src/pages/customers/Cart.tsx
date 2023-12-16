import { useState } from "react";
import CartItems from "../../components/custom/Cart/CartItems";
import { useFetch } from "../../hooks/useFetch";
import { ApiEndpoints } from "../../types/enums";
import { ICustomerOrder } from "../../types/interfaces";
import Swal from "sweetalert2";

function Cart() {
  const cart =
    (localStorage.getItem("cart") &&
      JSON.parse(localStorage.getItem("cart"))) ||
    [];
  const [cartState, setCartState] = useState(cart);
  const { setPayload, MakeHttpRequest } = useFetch(
    import.meta.env.VITE_ORDER_SERVICE_URI + ApiEndpoints.ADD_ORDER,
    "POST"
  );

  const removeCartItem = (id: string) => {
    const crt = cartState.filter((item) => item.id !== id);
    setCartState(crt);
    localStorage.setItem("cart", JSON.stringify(crt));
  };

  const PlaceOrder = async () => {
    const cartItems = cartState.map((item) => {
      return { itemId: item.id, quantity: 1 };
    });
    let amt = 0;
    cartState.forEach((i) => {
      console.log(i);
      return (amt += i.price);
    });
    const checkoutItem: ICustomerOrder = {
      items: cartItems,
      amount: amt,
      paymentMethod: "CREDIT",
      userId: localStorage.getItem("user"),
      outletId: localStorage.getItem("outletId"),
    };
    console.log(checkoutItem);
    setPayload(checkoutItem);
    const result = await MakeHttpRequest();
    console.log(result);
    if (result.result) {
      Swal.fire({
        position: "center",
        icon: "success",
        title: "Your order has been placed",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  };

  return (
    <>
      <div className="container mt-4">
        <div className="row">
          {cartState.length > 0 &&
            cartState.map(
              (i: {
                id: string;
                name: string;
                category: string;
                price: number;
              }) => {
                return (
                  <div key={i.id} className="col-md-12">
                    <CartItems item={i} onRemove={removeCartItem} />
                  </div>
                );
              }
            )}
        </div>
        {cartState.length > 0 && (
          <button className="btn-theme-filled-shadowed" onClick={PlaceOrder}>
            Checkout
          </button>
        )}
      </div>
    </>
  );
}

export default Cart;
