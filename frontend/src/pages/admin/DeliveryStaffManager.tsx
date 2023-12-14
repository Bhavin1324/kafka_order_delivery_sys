import { useState ,useEffect} from "react";
import { DeliveryPerson } from "../../types/interfaces";
import PHModal from "../../components/custom/PHModal";
import { openModal,closeModal } from "../../features/slices/modalSlice";
import {useDispatch ,useSelector} from "react-redux";
import { RootState } from "../../features/store";
import PHDataTable from "../../components/custom/PHDataTable";
import { nanoid } from "nanoid";
import DeliveryPersonForm from "../../components/DeliveryPersonForm";
const DeliveryStaffManager = () => {
  const dispatch = useDispatch()
  const [isAdd, setisAdd] = useState(false)
  const [isUpdate, setisUpdate] = useState(false)
  const {isOpen} =  useSelector((store:RootState)=>{
   return store.modal
  })
    const initialOutets:DeliveryPerson[] = [
        {
            id: "asdada",
            username:"deep",
            current_status :"Alloted",
            adhar_number:475896589654,
          
            latitude:5874.2455,
            longitude:8594.2454,
            outlet_id:"asdsada"
        },
        {
          id: "aaerda",
          username:"Aniket",
          current_status :"NotAlloted",
          adhar_number:475896589654,
      
          latitude:5874.2455,
          longitude:8594.2454,
          outlet_id:"asdsada"
      },
      {
        id: "ewrasdada",
        username:"Sunil",
        current_status :"Alloted",
        adhar_number:475896589654,
     
        latitude:5874.2455,
        longitude:8594.2454,
        outlet_id:"asdsada"
    },
        ]
    const [deliveryPersons, setdeliveryPersons] = useState(initialOutets);
  
    const [deliveryPersonUpdate,setdeliveryPersonUpdate] =useState<DeliveryPerson>({})
    // useEffect(() => {
    //   // Fetch deliveryPersons from an API or local storage
    //   fetch('https://your-api-endpoint/deliveryPersons')
    //     .then((response) => response.json())
    //     .then((data) => setdeliveryPersons(data));
    // }, []);
  
    
    const handleAddDeliveryPerson = (deliveryPerson: DeliveryPerson) => {
        deliveryPerson.id = nanoid();
        let tmp:DeliveryPerson={
          id:nanoid(),
          username: deliveryPerson.username,
          current_status:deliveryPerson.current_status,
          adhar_number:deliveryPerson.adhar_number,
          latitude:deliveryPerson.latitude,
          longitude:deliveryPerson.longitude,
          outlet_id:deliveryPerson.outlet_id
        }
        setdeliveryPersons([...deliveryPersons, tmp]);
        console.log([...deliveryPersons] ,"spreading deliveryPersons")
        dispatch(closeModal())
        setisAdd(false)
    };
  
    const handleEditdeliveryPerson = (deliveryPerson :DeliveryPerson) => {

     
     setdeliveryPersonUpdate(deliveryPerson)
     setisUpdate(true)
     dispatch(openModal())
     
     
    };

  
    const handleUpdate = (deliveryPerson : DeliveryPerson)=>{
      let tmp:DeliveryPerson={
        id:deliveryPerson.id,
        username:deliveryPerson.username,
        current_status:deliveryPerson.current_status,
        adhar_number:deliveryPerson.adhar_number,
        latitude:deliveryPerson.latitude,
        longitude:deliveryPerson.longitude,
        outlet_id:deliveryPerson.outlet_id
      }
        setdeliveryPersons(
            deliveryPersons.map((deliveryPerson)=> (deliveryPerson.id === tmp.id ? tmp:deliveryPerson))
          )
          dispatch(closeModal())
          setisUpdate(false)
    }
    const handleDeletedeliveryPerson = (id: string) => {
      setdeliveryPersons(deliveryPersons.filter((deliveryPerson) => deliveryPerson.id !== id));
    };
  
    return (
      <div className="container px-4 py-10">
        <div className="flex justify-between flex-wrap">
        {/* <h1 className="text-3xl font-bold mb-4">Pizza Store deliveryPersons</h1> */}
        <button
            className="btn-theme"
            onClick={()=>{setisAdd(true); dispatch(openModal())}}
            >
              Add New deliveryPerson
            </button>
        </div>
       
           { isAdd && <PHModal 
             isOpen ={isOpen}
             onClose={()=>{setisAdd(false); dispatch(closeModal())}}
             headingText = "Add deliveryPerson"
             component ={<DeliveryPersonForm 
              update={null}
              onEvent = {handleAddDeliveryPerson}
              action="Update deliveryPerson"/>}
            />}
         
          <PHDataTable
          title="deliveryPersons" 
           data={deliveryPersons}
           onDelete={handleDeletedeliveryPerson}
           onUpadate={handleEditdeliveryPerson}
          />
         
          
        
      

    { isUpdate && <PHModal 
          isOpen ={isOpen}
          onClose={()=>{setisUpdate(false); dispatch(closeModal()) }}
          headingText = "Update deliveryPerson"
          component ={<DeliveryPersonForm 
          onEvent={handleUpdate}
          update={deliveryPersonUpdate}
          action="Update deliveryPerson"/>}
        />}
 
      </div>
    )
}

export default DeliveryStaffManager