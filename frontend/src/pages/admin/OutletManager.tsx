import { useState, useEffect } from "react";
import { Outlet } from "../../types/interfaces";
import OutletForm from "../../components/OutletForm";
import PHModal from "../../components/custom/Modals/PHModal";
import { openModal, closeModal } from "../../features/slices/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../features/store";
import { v4 as uuidv4 } from "uuid";
import PHDataTable from "../../components/custom/DataTables/PHDataTable";

const OutletManager = () => {
  const dispatch = useDispatch()
  const [isAdd, setisAdd] = useState(false)
  const [isUpdate, setisUpdate] = useState(false)
  const { isOpen } = useSelector((store: RootState) => {
    return store.modal
  })
  const initialOutets = [
    {
      id: "asdada",
      name: "ram",
      address: "Dindoli",
      phoneno: 8596478596,
      latitude: 5874.2455,
      longitude: 8594.2454,
      pincode: 587485
    },
    {
      id: "retert",
      name: "Sita",
      address: "Adajan,surat",
      phoneno: 8596478596,
      latitude: 5874.2455,
      longitude: 8594.2454,
      pincode: 587485
    },
    {
      id: "fsdfsdfds",
      name: "Lakshman",
      address: "Vesu,surat",
      phoneno: 8596478596,
      latitude: 5874.2455,
      longitude: 8594.2454,
      pincode: 587485
    }
  ]
  const [outlets, setOutlets] = useState<Outlet[]>(initialOutets);
  const [outletupdate, setOutletupdate] = useState<Outlet>({})
  // useEffect(() => {
  //   // Fetch outlets from an API or local storage
  //   fetch('https://your-api-endpoint/outlets')
  //     .then((response) => response.json())
  //     .then((data) => setOutlets(data));
  // }, []);

  const handleAddOutlet = (outlet: Outlet) => {
    outlet.id = uuidv4();
    let tmp: Outlet = {
      id: outlet.id,
      name: outlet.name,
      address: outlet.address,
      phoneno: outlet.phoneno,
      latitude: outlet.latitude,
      longitude: outlet.longitude,
      pincode: outlet.pincode
    }
    setOutlets([...outlets, tmp]);
    dispatch(closeModal())
    setisAdd(false)
  };

  const handleEditOutlet = (outlet: Outlet) => {


    setOutletupdate(outlet)
    setisUpdate(true)
    dispatch(openModal())


  };


  const handleUpdate = (outlet: Outlet) => {
    let tmp: Outlet = {
      id: outlet.id,
      name: outlet.name,
      address: outlet.address,
      phoneno: outlet.phoneno,
      latitude: outlet.latitude,
      longitude: outlet.longitude,
      pincode: outlet.pincode
    }
    setOutlets(
      outlets.map((outlet) => (outlet.id === tmp.id ? tmp : outlet))
    )
    dispatch(closeModal())
    setisUpdate(false)
  }
  const handleDeleteOutlet = (id: string) => {
    console.log(id)
    setOutlets(outlets.filter((outlet) => outlet.id !== id));
  };

  return (
    <div className="container px-4 py-10">
      <div className="flex justify-between flex-wrap">
        <h1 className="text-3xl font-bold mb-4">Pizza Store Outlets</h1>
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