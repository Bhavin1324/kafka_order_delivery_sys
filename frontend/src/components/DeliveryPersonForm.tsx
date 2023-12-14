/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { DeliveryPerson } from "../types/interfaces";
import { useEffect } from "react";

import {
  adharValidation,
  latitudeValidation,
  longitudeValidation,
  nameValidation,
  statusValidation,
  outletValidation
} from "../utils/ValidationRules";

const DeliveryPersonForm = ({
  onEvent,
  update,
  action,
}: {
  onEvent: (deliveryPerson: DeliveryPerson) => void;
  update: DeliveryPerson;
  action: string;
}) => {
  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm();


  const outlets = [

    {
      id: "abc",
      name: "dindoli",
    },
    {
      id: "abcd",
      name: "udhna",
    },
    {
      id: "abcde",
      name: "adajan",
    },
  ];
  useEffect(() => {
    if (update != null) {

      setValue("current_status", update.current_status);
      setValue("username", update.username);
      setValue("latitude", update.latitude);
      setValue("longitude", update.longitude);
      setValue("outlet_id", update.outlet_id);
      setValue("adhar_number", update.adhar_number);
    }
  }, []);

  const onSubmit = (data: any) => {
    if (update != null) {
      data.id = update.id
    }
    onEvent(data);
    reset({
      username: "",
      current_status: "",
      adhar_number: null,
      latitude: null,
      longitude: null,
      outlet_id: null
    });
  };

  const usernameRegister = register("username", nameValidation);
  const statusRegister = register("current_status", statusValidation);
  const outletRegister = register("outlet_id", outletValidation);
  const adharRegister = register("adhar_number", adharValidation);
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
          {...usernameRegister}
          className="ph-input-text"
        />
        <p style={{ color: "red" }}>{errors?.username && errors?.username.message}</p>
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="status">Current_status</label>
        <select id="status" {...statusRegister} className="ph-select">

          <option value={"notallted"} >Not Alloted</option>
          <option value={"alloted"}>Alloted</option>

        </select>
        <p style={{ color: "red" }}>
          {errors?.tax_slab_id && errors?.tax_slab_id.message}
        </p>
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="adharno">Adhar Number</label>
        <input
          type="number"
          id="adharno"
          {...adharRegister}
          className="ph-input-text"
        />
        <p style={{ color: "red" }}>
          {errors?.adhar_number && errors?.adhar_number.message}
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
        <label htmlFor="outlet">Outlet</label>
        <select id="outlet" {...outletRegister} className="ph-select">
          {outlets.map((ot) => {
            return <option key={ot.id} value={ot.id}>{ot.name}</option>;
          })}
        </select>
        <p style={{ color: "red" }}>
          {errors?.outlet_id && errors?.outlet_id.message}
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

export default DeliveryPersonForm;
