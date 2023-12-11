/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { Outlet } from "../types/interfaces";
import { useEffect } from "react";
import {
  addressValidation,
  latitudeValidation,
  longitudeValidation,
  nameValidation,
  phoneValidation,
  pincodeValidation,
} from "../utils/ValidationRules";

const OutletForm = ({
  onAdd,
  update,
  action,
}: {
  onAdd: (outlet: Outlet) => void;
  update: Outlet;
  action: string;
}) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();
  // const [name, setName] = useState('');
  // const [address, setAddress] = useState('');
  // const [phoneNo, setPhoneNo] = useState('');
  // const [latitude, setLatitude] = useState('');
  // const [longitude, setLongitude] = useState('');
  // const [pincode, setPincode] = useState('');
  // if(update){
  //   console.log(update)
  //   setValue("id",update.id)
  //   setValue("address",update.address)
  //   setValue("name",update.name)
  //   setValue("latitude",update.latitude)
  //   setValue("longitude",update.longitude)
  //   setValue("phoneno",update.phoneno)
  //   setValue("pincode",update.pincode)
  // }
  useEffect(() => {
    if (update != null) {
      setValue("address", update.address);
      setValue("name", update.name);
      setValue("latitude", update.latitude);
      setValue("longitude", update.longitude);
      setValue("phoneno", update.phoneno);
      setValue("pincode", update.pincode);
    }
  }, []);

  const onSubmit = (data: any) => {
    onAdd(data);
    reset({
      address: "",
      name: "",
      latitude: null,
      longitude: null,
      pincode: null,
      phoneno: null,
    });
  };

  const nameRegister = register("name", nameValidation);
  const addressRegister = register("address", addressValidation);
  const phoneRegister = register("phoneno", phoneValidation);
  const pincodeRegister = register("pincode", pincodeValidation);
  const longitudeRegister = register("longitude", longitudeValidation);
  const latitudeRegister = register("latitude", latitudeValidation);
  return (
    <form
      className="bg-gray-50 shadow-md rounded-lg p-4 mb-4"
      onSubmit={handleSubmit(onSubmit)}
    >
      <h3 className="text-xl font-bold mb-4">{action}</h3>
      <div className="flex flex-col mb-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          {...nameRegister}
          className="rounded-md border-gray-300 focus:border-blue-500 px-2 py-1"
        />
        <p style={{ color: "red" }}>{errors?.name && errors?.name.message}</p>
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="address">Address</label>
        <textarea
          id="address"
          {...addressRegister}
          className="rounded-md border-gray-300 focus:border-blue-500 px-2 py-1"
        />
        <p style={{ color: "red" }}>
          {errors?.address && errors?.address.message}
        </p>
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="phoneno">Phone Number</label>
        <input
          type="number"
          id="phoneno"
          {...phoneRegister}
          className="rounded-md border-gray-300 focus:border-blue-500 px-2 py-1"
        />
        <p style={{ color: "red" }}>
          {errors?.phoneno && errors?.phoneno.message}
        </p>
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="latitude">Latitude</label>
        <input
          type="number"
          id="latitude"
          {...latitudeRegister}
          className="rounded-md border-gray-300 focus:border-blue-500 px-2 py-1"
        />
        <p style={{ color: "red" }}>
          {errors?.latitude && errors?.latitude.message}
        </p>
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="longitude">Longitude</label>
        <input
          type="number"
          id="longitude"
          {...longitudeRegister}
          className="rounded-md border-gray-300 focus:border-blue-500 px-2 py-1"
        />
        <p style={{ color: "red" }}>
          {errors?.longitude && errors?.longitude.message}
        </p>
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="pincode">Pincode</label>
        <input
          type="number"
          id="pincode"
          {...pincodeRegister}
          className="rounded-md border-gray-300 focus:border-blue-500 px-2 py-1"
        />
        <p style={{ color: "red" }}>
          {errors?.pincode && errors?.pincode.message}
        </p>
      </div>
      <button
        type="submit"
        className="px-3 py-2 bg-green-500 text-white rounded-md shadow-md hover:bg-green-600"
      >
        {action}
      </button>
    </form>
  );
};

export default OutletForm;
