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
    if(update!=null){
      data.id = update.id
    }
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
  
      onSubmit={handleSubmit(onSubmit)}
    >
      {/* <h3 className="text-xl font-bold mb-4">{action}</h3> */}
      <div className="flex flex-col mb-2">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          id="name"
          {...nameRegister}
          className="ph-input-text"
        />
        <p style={{ color: "red" }}>{errors?.name && errors?.name.message}</p>
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="address">Address</label>
        <textarea
          id="address"
          {...addressRegister}
          className="ph-input-text"
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
          className="ph-input-text"
        />
        <p style={{ color: "red" }}>
          {errors?.phoneno && errors?.phoneno.message}
        </p>
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="latitude">Latitude</label>
        <input
          type="text"
          id="latitude"
          {...latitudeRegister}
          className="ph-input-text"
        />
        <p style={{ color: "red" }}>
          {errors?.latitude && errors?.latitude.message}
        </p>
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="longitude">Longitude</label>
        <input
          type="text"
          id="longitude"
          {...longitudeRegister}
          className="ph-input-text"
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
          className="ph-input-text"
        />
        <p style={{ color: "red" }}>
          {errors?.pincode && errors?.pincode.message}
        </p>
      </div>
      <button
        type="submit"
        className="btn-theme"
      >
        {action}
      </button>
    </form>
  );
};

export default OutletForm;
