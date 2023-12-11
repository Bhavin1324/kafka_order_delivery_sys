import { setProgress } from "../../features/slices/loadingSlice";
import { useDispatch } from "react-redux";
function Cart() {
  const dispatch = useDispatch();
  setTimeout(() => {
    dispatch(setProgress(100));
  }, 3000);
  return (
    <>
      <div>Cart</div>
    </>
  );
}

export default Cart;
