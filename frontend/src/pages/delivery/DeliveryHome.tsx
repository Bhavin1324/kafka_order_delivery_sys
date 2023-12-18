import { useEffect, useState } from "react";
import { ApiEndpoints } from "../../types/enums";
import { useFetch } from "../../hooks/useFetch";
import OrdersCard from "../../components/custom/OrdersCard";
import { nanoid } from "@reduxjs/toolkit";
import Swal from "sweetalert2";



function DeliveryHome() {
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
  const dpid =localStorage.getItem("user")
  const [myOrders, setmyOrders] = useState([])
  const DisplayHook = useFetch(import.meta.env.VITE_ORDER_SERVICE_URI+ ApiEndpoints.GET_ORDERS_FOR_DELIVERY+dpid+"/"+"IN_TRANSIT" ,"GET")
  const getAllOrders = ()=>{
    DisplayHook.MakeHttpRequest().then((result)=>{
      if(result.result){
        console.log(result.result)
        setmyOrders(result.result.orders)
      }else{
        Toast.fire({
          title: "Server Error !",
          icon: "error",
        });
      }
    })
}
useEffect(() => {
  getAllOrders()
  
 
 
 }, [])
return (
  <>
<div className="flex flex-start flex-wrap container px-4 py-10 md:max-sm:justify-center gap-2">
  {myOrders.map((o)=> {
  return(
  
  <OrdersCard key={nanoid()} loadData={getAllOrders} order={o} />)
}
  
  )}
</div></>
)
}
export default DeliveryHome
