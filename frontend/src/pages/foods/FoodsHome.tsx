import PHDataTable from "../../components/custom/PHDataTable";
import { DeliveryPerson } from "../../types/interfaces";

function FoodsHome() {
  const updatePerson: DeliveryPerson = {
    id: "789hjggfdgf",
    username: "Devraj",
    adhar_number: 5475686678,
    current_status: "NAVARO",
    letitude: 25.17,
    logitude: 56.14,
    outlet_id: "456dhhdfh",
  };

  const data: DeliveryPerson[] = [
    {
      id: "gerweta2354wd",
      username: "Bhavin",
      adhar_number: 676889768,
      current_status: "OCCUPIED",
      letitude: 25.77,
      logitude: 56.44,
      outlet_id: "7744fgrty",
    },
    {
      id: "54g54gy54y",
      username: "Kunal",
      adhar_number: 546456456,
      current_status: "FREE",
      letitude: 25.87,
      logitude: 55.44,
      outlet_id: "675hgjghj",
    },
    {
      id: "dfhds346546dfg",
      username: "Kiyan",
      adhar_number: 34645465456,
      current_status: "OCCUPIED",
      letitude: 25.87,
      logitude: 59.44,
      outlet_id: "5644b654",
    },
  ];
  const onDelete = (id: string) => {
    console.log("delete");
  };
  const onUpdate = (updatePerson: DeliveryPerson) => {
    console.log("update");
  };
  return (
    <div>
      <PHDataTable
        title="Foods table"
        data={data}
        onDelete={onDelete}
        onUpadate={onUpdate}
      />
    </div>
  );
}

export default FoodsHome;
