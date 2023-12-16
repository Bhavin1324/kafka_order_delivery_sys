import { useEffect, useState } from "react";
import { IDeliveryPerson } from "../../types/interfaces";
import PHModal from "../../components/custom/Modals/PHModal";
import { openModal, closeModal } from "../../features/slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../features/store";
import PHDataTable from "../../components/custom/DataTables/PHDataTable";
import { nanoid } from "nanoid";
import DeliveryPersonForm from "../../components/custom/Forms/DeliveryPersonForm";
import Swal from "sweetalert2";
import { useFetch } from "../../hooks/useFetch";
import { ApiEndpoints } from "../../types/enums";
const DeliveryStaffManager = () => {
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
  const dispatch = useDispatch()
  const [isAdd, setisAdd] = useState(false)
  const [isUpdate, setisUpdate] = useState(false)
  const { isOpen } = useSelector((store: RootState) => {
    return store.modal
  })
  
  const [deliveryPersons, setdeliveryPersons] = useState([]);
  const [deliveryPersonUpdate, setdeliveryPersonUpdate] = useState<IDeliveryPerson>({})

  const UpdateHook =  useFetch(import.meta.env.VITE_MANAGEMENT_SERVICE_URI+ ApiEndpoints.UPDATE_STAFF,"POST")
  const DisplayHook = useFetch(import.meta.env.VITE_MANAGEMENT_SERVICE_URI+ ApiEndpoints.GET_ALL_STAFF,"GET")
  const DataAddHook =  useFetch(import.meta.env.VITE_MANAGEMENT_SERVICE_URI+ ApiEndpoints.ADD_STAFF,"POST")

  useEffect(() => {
    console.log("Data fetchs")
 setLatestStaffData()  
  }, [])
  const setLatestStaffData =()=>{
   
    DisplayHook.MakeHttpRequest().then((result)=>{
    if(result.result){
    const data= result.result.map((x)=>{
     const y:IDeliveryPerson ={
       id: x.id,
       aadharNumber: x.adhaarNumber,
       outletId: x.outletId.id,
       username: x.username.username,
       name: x.username.username,
       phone_no: x.username.phoneNo,
       email: x.username.email,
     }
      return y
    })
    setdeliveryPersons(data)
   
    }
   })
  } 
  const handleAddDeliveryPerson = (deliveryPerson: IDeliveryPerson) => {
    let tmp = deliveryPerson
    tmp.phone_no = deliveryPerson.phone_no.toString()
    tmp.aadharNumber = deliveryPerson.aadharNumber.toString()
    tmp.role="deliveryPerson"
    tmp.credits="1000"
    console.log(tmp)

    DataAddHook.setPayload(tmp)
    DataAddHook.MakeHttpRequest().then((result)=>{
      console.log(result)
      if(result.error || result.result.status==0){
      Toast.fire({
          title: "Error in Adding Data !",
          icon: "error"
        });
      } else{
          Toast.fire({
          icon: 'success',
          title: 'Data Inserted !',
        })
        dispatch(closeModal())
        setisAdd(false)
        setLatestStaffData()

      }
    })

  };

  const handleEditdeliveryPerson = (deliveryPerson: IDeliveryPerson) => {


    setdeliveryPersonUpdate(deliveryPerson)
    setisUpdate(true)
    dispatch(openModal())


  };


  const handleUpdate = (deliveryPerson: IDeliveryPerson) => {
    console.log(deliveryPerson)
    let tmp = deliveryPerson
    tmp.phone_no = deliveryPerson.phone_no.toString()
    tmp.aadharNumber = deliveryPerson.aadharNumber.toString()
    tmp.role="deliveryPerson"
    tmp.credits="1000"
    console.log(tmp)
    UpdateHook.setPayload(deliveryPerson)
    UpdateHook.MakeHttpRequest(deliveryPerson.id).then((result)=>{
      if(result.error || result.result.status==0){
        Toast.fire({
            title: "Error in updating data !",
            icon: "error"
          });
        } else{
          Toast.fire({
            title: "Data updated !",
            icon: "success"
          });
          setdeliveryPersons(
            deliveryPersons.map((dp) => (dp.id === deliveryPerson ? deliveryPerson : dp))
          )
          dispatch(closeModal())
          setisUpdate(false)
  
        }
    })

   
  }
  const handleDeletedeliveryPerson = async (id: string) => {
    let headersList = {
      "Accept": "*/*",
      "Content-Type":"application/json"
      }
     let response = await fetch( import.meta.env.VITE_MANAGEMENT_SERVICE_URI+ ApiEndpoints.DELETE_STAFF +id, { 
       method: "DELETE",
       headers: headersList
     });
     let data = await response.json();
    if(data.error!=null){
      Toast.fire({
        icon: 'error',
        title: 'Internal Error!!',
      })
    }else{
       Toast.fire({
        icon: 'success',
        title: 'Outlet Deleted!!',
      })
    
    }
    setdeliveryPersons(deliveryPersons.filter((deliveryPerson) => deliveryPerson.id !== id));
  };

  return (
    <div className="container px-4 py-10">
      <div className="flex justify-between flex-wrap">
        {/* <h1 className="text-3xl font-bold mb-4">Pizza Store deliveryPersons</h1> */}
        <button
          className="btn-theme"
          onClick={() => { setisAdd(true); dispatch(openModal()) }}
        >
          Add New deliveryPerson
        </button>
      </div>

      {isAdd && <PHModal
        isOpen={isOpen}
        onClose={() => { setisAdd(false); dispatch(closeModal()) }}
        headingText="Add deliveryPerson"
        component={<DeliveryPersonForm
          update={null}
          onEvent={handleAddDeliveryPerson}
          action="Update deliveryPerson" />}
      />}

      <PHDataTable
        title="deliveryPersons"
        data={deliveryPersons}
        onDelete={handleDeletedeliveryPerson}
        onUpadate={handleEditdeliveryPerson}
      />





      {isUpdate && <PHModal
        isOpen={isOpen}
        onClose={() => { setisUpdate(false); dispatch(closeModal()) }}
        headingText="Update deliveryPerson"
        component={<DeliveryPersonForm
          onEvent={handleUpdate}
          update={deliveryPersonUpdate}
          action="Update deliveryPerson" />}
      />}

    </div>
  )
}

export default DeliveryStaffManager