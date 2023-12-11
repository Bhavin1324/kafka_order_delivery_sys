
import { Outlet } from "../types/interfaces";

const PizzaStoreOutlet = ({ outlet, onEdit, onDelete }: { outlet: Outlet; onEdit: (outlet: Outlet) => void; onDelete: (id: string) => void }) => {
  return (
    <li className="rounded-lg shadow-md p-4">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold">{outlet.name}</h2>
        <div className="flex gap-2">
          <button
            className="px-3 py-2 bg-blue-500 text-white rounded-md shadow-md hover:bg-blue-600"
            onClick={() => onEdit(outlet)}
          >
            Edit
          </button>
          <button
            className="px-3 py-2 bg-red-500 text-white rounded-md shadow-md hover:bg-red-600"
            onClick={() => onDelete(outlet.id)}
          >
            Delete
          </button>
        </div>
      </div>
      <p className="mb-2">{outlet.address}</p>
      <p>Phone: {outlet.phoneno}</p>
      <p>Latitude: {outlet.latitude}, Longitude: {outlet.longitude}</p>
      <p>Pincode: {outlet.pincode}</p>
    </li>
  );
};

export default PizzaStoreOutlet;
