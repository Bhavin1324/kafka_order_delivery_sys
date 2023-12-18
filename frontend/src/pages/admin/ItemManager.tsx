import { useEffect, useState } from "react";
import { IItem, IItemScattered } from "../../types/interfaces";
import ItemForm from "../../components/custom/Forms/ItemForm";
import { openModal, closeModal } from "../../features/slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../features/store";
import PHModal from "../../components/custom/Modals/PHModal";
import PHDataTable from "../../components/custom/DataTables/PHDataTable";
import { nanoid } from "nanoid";
import { useFetch } from "../../hooks/useFetch";
import { ApiEndpoints } from "../../types/enums";
import Swal from "sweetalert2";
import { ObjectFlatter } from "../../utils/utils";

const ItemManager = () => {
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
  const UpdateHook =  useFetch(import.meta.env.VITE_MANAGEMENT_SERVICE_URI+ ApiEndpoints.UPDATE_ITEM,"POST")
  const DisplayHook = useFetch(import.meta.env.VITE_MANAGEMENT_SERVICE_URI+ ApiEndpoints.GET_ALL_ITEMS_ADMIN,"GET")
  const DataAddHook =  useFetch(import.meta.env.VITE_MANAGEMENT_SERVICE_URI+ ApiEndpoints.ADD_ITEM,"POST")
  const { isOpen } = useSelector((store: RootState) => {
    return store.modal
  }) 
  
  const [items, setItems] = useState<Item[]>([]);
  const [itemupdate, setitemupdate] = useState<Item>({})
  useEffect(() => {
    console.log("Data fetchs")
 setLatestItemData()  
  }, [])
  const setLatestItemData =()=>{
   
    DisplayHook.MakeHttpRequest().then((result)=>{
    if(result.result){
      console.log(result.result)
    const data = result.result.map((ot)=>{
      ot.itemImage = JSON.stringify (ot.itemImage)
      const so = ObjectFlatter(ot)
      so.itemImage =JSON.parse(so.itemImage)
      return so
    })
    setItems(data)
    }
   })
  } 
 const handleAddItem = (item:any) => {
    console.log(item)
    DataAddHook.setPayload(item)
    DataAddHook.MakeHttpRequest().then((result)=>{
      console.log(result)
      if(result.error || result.result.status==0){
      Toast.fire({
          title: "Error in inserting data !",
          icon: "error"
        });
      } else{
          Toast.fire({
          icon: 'success',
          title: 'Data Inserted !',
        })
        setLatestItemData() 
        dispatch(closeModal())
        setisAdd(false)

      }
    })
    
   
   
  };

  const handleEdititem = (item) => {


    setitemupdate(item)
    setisUpdate(true)
    dispatch(openModal())


  };


  const handleUpdate = (item) => {
    UpdateHook.setPayload(item)
    UpdateHook.MakeHttpRequest(item.id).then((result)=>{
      if(result.error || result.result.status==0){
        Toast.fire({
            title: "Error in updating data !",
            icon: "error"
          });
        } else{
          setLatestItemData()
          dispatch(closeModal())
          setisUpdate(false)
            Toast.fire({
            icon: 'success',
            title: 'Outlet Inserted !',
          })
         
  
        }
    })

    
    dispatch(closeModal())
    setisUpdate(false)
  }
  const handleDeleteitem = async (id: string) => {
    let headersList = {
      "Accept": "*/*",
      "Content-Type":"application/json"
      }
     let response = await fetch(import.meta.env.VITE_MANAGEMENT_SERVICE_URI+ ApiEndpoints.DELETE_ITEM +id, { 
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
        title: 'Data Deleted!!',
      })
    
    }
    setItems(items.filter((item) => item.id !== id));
  };

  return (
    <div className="container px-4 py-10">
      <div className="flex justify-between flex-wrap">
        <button
          className="btn-theme"
          onClick={() => { setisAdd(true); dispatch(openModal()) }}
        >
          Add New item
        </button>
      </div>

      {isAdd && <PHModal
        isOpen={isOpen}
        onClose={() => { setisAdd(false); dispatch(closeModal()) }}
        headingText="Add item"
        component={<ItemForm
          update={null}
          onEvent={handleAddItem}
          action="Add item" />}
      />}

      <PHDataTable
        title="Pizza Store Items"
        data={items}
        onDelete={handleDeleteitem}
        onUpadate={handleEdititem}
      />





      {isUpdate && <PHModal
        isOpen={isOpen}
        onClose={() => { setisUpdate(false); dispatch(closeModal()) }}
        headingText="Update item"
        component={<ItemForm
          onEvent={handleUpdate}
          update={itemupdate}
          action="Update item" />}
      />}

    </div>
  )
}

export default ItemManager