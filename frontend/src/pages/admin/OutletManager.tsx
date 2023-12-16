import { useEffect, useState } from "react";
import {IOutlet } from "../../types/interfaces";
import OutletForm from "../../components/custom/Forms/OutletForm";
import PHModal from "../../components/custom/Modals/PHModal";
import PHDataTable from "../../components/custom/DataTables/PHDataTable";
import { openModal, closeModal } from "../../features/slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { nanoid } from "nanoid";
import { useFetch } from "../../hooks/useFetch";
import { ApiEndpoints } from "../../types/enums";
import Swal from "sweetalert2";

const OutletManager = () => {
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
  const [outlets, setOutlets] = useState([]);
  const [outletupdate, setOutletupdate] = useState<IOutlet>({})

  const UpdateHook =  useFetch(import.meta.env.VITE_MANAGEMENT_SERVICE_URI+ ApiEndpoints.UPDATE_OUTLET,"POST")
  const DisplayHook = useFetch(import.meta.env.VITE_MANAGEMENT_SERVICE_URI+ ApiEndpoints.GET_ALL_OUTLETS,"GET")
  const DataAddHook =  useFetch(import.meta.env.VITE_MANAGEMENT_SERVICE_URI+ ApiEndpoints.ADD_OUTLET,"POST")
  useEffect(() => {
    console.log("Data fetchs")
 setLatestOutletData()  
  }, [])
  const setLatestOutletData =()=>{
   
    DisplayHook.MakeHttpRequest().then((result)=>{
    if(result.result){
    const data= result.result.map((ot)=>{
     ot.pincode = ot.pincode.pincode
     return ot;

    })
    setOutlets(data)
    }
   })
  } 

  const handleAddOutlet = (outlet: IOutlet) => {
   console.log(outlet) 
   outlet.pincode = parseInt(outlet.pincode.toString())
    DataAddHook.setPayload(outlet)
    DataAddHook.MakeHttpRequest().then((result)=>{
      console.log(result)
      if(result.error || result.result.status==0){
      Toast.fire({
          title: "Error in Adding Output !",
          icon: "error"
        });
      } else{
          Toast.fire({
          icon: 'success',
          title: 'Outlet Inserted !',
        })
        setisAdd(false)
        setLatestOutletData() 
        dispatch(closeModal())

      }
    })
    
  

  };

  const handleEditOutlet = (outlet: IOutlet) => {


    setOutletupdate(outlet)
    setisUpdate(true)
    dispatch(openModal())


  };


  const handleUpdate = (outlet: any) => {
    outlet.pincode = parseInt(outlet.pincode.toString())
    outlet.latitude =outlet.latitude.toString()
    outlet.longitude = outlet.longitude.toString()
    outlet.phoneNo = outlet.phoneNo.toString()
    UpdateHook.setPayload(outlet)
    UpdateHook.MakeHttpRequest(outlet.id).then((result)=>{
      if(result.error || result.result.status==0){
        Toast.fire({
            title: "Error in updating data !",
            icon: "error"
          });
        } else{
          const tmp:IOutlet = {
            address : outlet.address,
            id : outlet.id,
            latitude:outlet.latitude,
            longitude:outlet.longitude,
            name:outlet.name,
            phoneNo:outlet.phoneNo,
            pincode:outlet.pincode
            
                    }
          setOutlets(
            outlets.map((ot) => (ot.id === tmp.id ? tmp: ot))
          )
          dispatch(closeModal())
          setisUpdate(false)
            Toast.fire({
            icon: 'success',
            title: 'Outlet Inserted !',
          })
         
  
        }
    })


  }
  const handleDeleteOutlet = async (id: string) => {
    let headersList = {
      "Accept": "*/*",
      "Content-Type":"application/json"
      }
     let response = await fetch("http://localhost:8080/ManagementService/rest/management/deleteOutlet/"+id, { 
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
    setOutlets(outlets.filter((outlet) => outlet.id !== id));


  };

  return (
    <div className="container px-4 py-10">
      <div className="flex justify-between flex-wrap">
        {/* <h1 className="text-3xl font-bold mb-4">Pizza Store Outlets</h1> */}
        <button
          className="btn-theme"
          onClick={() => { setisAdd(true); dispatch(openModal()) }}
        >
          Add New Outlet
        </button>
      </div>

      {isAdd && <PHModal
        isOpen={isOpen}
        onClose={() => { setisAdd(false); dispatch(closeModal()) }}
        headingText="Add Outlet"
        component={<OutletForm
          update={null}
          onAdd={handleAddOutlet}
          action="Add Outlet" />}
      />}

      <PHDataTable
        title="Outlets"
        data={outlets}
        onDelete={handleDeleteOutlet}
        onUpadate={handleEditOutlet}
      />





      {isUpdate && <PHModal
        isOpen={isOpen}
        onClose={() => { setisUpdate(false); dispatch(closeModal()) }}
        headingText="Update Outlet"
        component={<OutletForm
          onAdd={handleUpdate}
          update={outletupdate}
          action="Update Outlet" />}
      />}

    </div>
  )
}

export default OutletManager