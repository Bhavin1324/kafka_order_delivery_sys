import { useSelector,useDispatch } from "react-redux"
import { updateToPreparation } from "../../features/slices/orderSlice"
import { IOrder } from "../../types/interfaces"
import OrdersCard from "../../components/custom/OrdersCard"
interface OrderState{
    orders: IOrder[]
}
const PlacedOrders = () => {
    const orders =useSelector((state:OrderState)=>{
        console.log(state)
        return state.orders
    })
    console.log(orders)
  const dispatch = useDispatch()
    return (
        <>
    <div className="flex justify-around flex-wrap">
        {orders.map((o)=> {
        return(
        <OrdersCard order={o}/>)
    }
        
        )}
    </div></>
  )
}

export default PlacedOrders