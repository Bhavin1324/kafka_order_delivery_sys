import { useState ,useEffect} from "react";
import { Outlet } from "../../types/interfaces";
import PizzaStoreOutlet from "../../components/PizzaStoreOutlet";
import OutletForm from "../../components/OutletForm";
import { nanoid } from "@reduxjs/toolkit";
const OutletManager = () => {
    const [popUp, setPopUp] = useState(false)
    const initialOutets = [
        {
            id: "asdada",
            name:"ram",
            address:"Dindoli",
            phoneno:8596478596,
            latitude:5874.2455,
            longitude:8594.2454,
            pincode:587485
        },
        {
            id: "retert",
            name:"Sita",
            address:"Adajan,surat",
            phoneno:8596478596,
            latitude:5874.2455,
            longitude:8594.2454,
            pincode:587485
        },
        {
            id: "fsdfsdfds",
            name:"Lakshman",
            address:"Vesu,surat",
            phoneno:8596478596,
            latitude:5874.2455,
            longitude:8594.2454,
            pincode:587485
        }
        ]
    const [outlets, setOutlets] = useState<Outlet[]>(initialOutets);
    const [outletupdate,setOutletupdate] =useState<Outlet>({})
    // useEffect(() => {
    //   // Fetch outlets from an API or local storage
    //   fetch('https://your-api-endpoint/outlets')
    //     .then((response) => response.json())
    //     .then((data) => setOutlets(data));
    // }, []);
  
    const handleAddOutlet = (outlet: Outlet) => {
        outlet.id = nanoid();

        setOutlets([...outlets, outlet]);
    };
  
    const handleEditOutlet = (outlet :Outlet) => {
     setOutletupdate(outlet)
      setPopUp(true)
     
    };

  
    const handleUpdate = (updatedoutlet : Outlet)=>{
        console.log(updatedoutlet)
        setOutlets(
            outlets.map((outlet)=> (outlet.id === outletupdate.id ? updatedoutlet:outlet))
          )
       setPopUp(false)
    }
    const handleDeleteOutlet = (id: string) => {
      setOutlets(outlets.filter((outlet) => outlet.id !== id));
    };
  
    return (
      <div className="container px-4 py-10">
        <h1 className="text-3xl font-bold mb-4">Pizza Store Outlets</h1>
        <OutletForm 
        update={null}
        onAdd={handleAddOutlet}
        action="Add Outlet"/>
        <ul className="flex flex-wrap justify-evenly gap-4 mt-8">
          {outlets.map((outlet:Outlet) => (
            <PizzaStoreOutlet
              key={outlet.id}
              outlet={outlet}
              onEdit={handleEditOutlet}
              onDelete={handleDeleteOutlet}
            />
          ))}
        </ul>
     {popUp && <div className='w-screen h-screen bg-black bg-opacity-90 fixed top-0 right-0 flex justify-center items-center'>
      <div className='bg-white m-5 px-5  rounded-md shadow-md'>
        <OutletForm 
        onAdd={handleUpdate}
        update={outletupdate}
        action="Update Outlet"/>
        <div className='flex justify-between mt-1'>
          <button className='outline outline-1 outline-[#101f20] bg-[#101f20] text-white py-2 px-4 hover:bg-transparent hover:text-black'
          onClick={() => setPopUp(false)}
          >Cancel</button>
         
        </div>
      </div>
    </div>}   
      </div>
    )
}

export default OutletManager