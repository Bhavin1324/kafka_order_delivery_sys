import { useSelector,useDispatch } from "react-redux"
import { IOrder } from "../../types/interfaces"
import OrdersCard from "../../components/custom/OrdersCard"
import { nanoid } from "@reduxjs/toolkit"
import { useEffect, useState } from "react"
import { useFetch } from "../../hooks/useFetch"
import { ApiEndpoints } from "../../types/enums"


const PlacedOrders = () => {
   
    const outletId =  localStorage.getItem("user")
    const [placedOrders, setplacedOrders] = useState([])
    const DisplayHook = useFetch(import.meta.env.VITE_PREPARATION_SERVICE_URI+ ApiEndpoints.GET_ORDERS_BY_OUTLET +outletId+"/"+"Placed" ,"GET")
    const getAllOrders = ()=>{
      DisplayHook.MakeHttpRequest().then((result)=>{
        if(result.result){
          console.log(result.result)
          setplacedOrders(result.result.orders)
        }
      })
    }
    useEffect(() => {
     getAllOrders()
    
    
    }, [])
    
    return (
        <>
    <div className="flex flex-start flex-wrap md:max-sm:justify-center gap-2">
        {placedOrders.map((o)=> {
        return(
        
        <OrdersCard key={nanoid()} loadData={getAllOrders} order={o} />)
    }
        
        )}
    </div></>
  )
}

export default PlacedOrders