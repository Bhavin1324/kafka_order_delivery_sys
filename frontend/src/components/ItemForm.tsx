/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import { Item } from "../types/interfaces";
import { useEffect } from "react";

import {
  nameValidation,
  CategoryValidation,
  DescriptionValidation,
  taxslabValidation,
  priceValidation,
  imgValidation,
  is_vegValidation,
} from "../utils/ValidationRules";

const ItemForm = ({
  onEvent,
  update,
  action,
}: {
  onEvent: (item: Item) => void;
  update: Item;
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
      setValue("price", update.price);
      setValue("name", update.name);
      setValue("category_id", update.category_id);
      setValue("description", update.description);
      setValue("img", update.img);
      setValue("is_veg", update.is_veg);
      setValue("tax_slab_id", update.tax_slab_id);
    }
  }, []);

  const categories = [
    {
      id: "sadas",
      name: "Pizza",
    },
    {
      id: "sadasdf",
      name: "Cold Drink",
    },
    {
      id: "sadas",
      name: "other",
    },
  ];

  const taxslabs = [
    ,
    {
      id: "abc",
      percentage: 10,
    },
    {
      id: "abcd",
      percentage: 10,
    },
    {
      id: "abcde",
      percentage: 25,
    },
  ];
  const onSubmit = (data: any) => {
    if (update != null) {
      data.id = update.id;
    }
    onEvent(data);
    reset({
      price: "",
      name: "",
      category_id: null,
      description: "",
      img: null,
      is_veg: null,
      tax_slab_id: null,
    });
  };

  const nameRegister = register("name", nameValidation);
  const priceRegister = register("price", priceValidation);
  const categoryRegister = register("category_id", CategoryValidation);
  const descriptionRegister = register("description", DescriptionValidation);
  const imgRegister = register("img", imgValidation);
  const isVegRegister = register("is_veg", is_vegValidation);
  const taxslabRegister = register("tax_slab_id", taxslabValidation);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
        <label htmlFor="category">Category</label>
        <select id="category" {...categoryRegister} className="ph-select">
          {categories.map((cat) => {
            return <option value={cat.id}>{cat.name}</option>;
          })}
        </select>
        <p style={{ color: "red" }}>
          {errors?.category_id && errors?.category_id.message}
        </p>
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          {...descriptionRegister}
          className="ph-input-text"
        />
        <p style={{ color: "red" }}>
          {errors?.description && errors?.description.message}
        </p>
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="taxslab">Tax Slab</label>
        <select id="taxslab" {...taxslabRegister} className="ph-select">
          {taxslabs.map((tax) => {
            return <option value={tax.id}>{tax.percentage}</option>;
          })}
        </select>
        <p style={{ color: "red" }}>
          {errors?.tax_slab_id && errors?.tax_slab_id.message}
        </p>
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="price">Price</label>
        <input
          type="number"
          id="price"
          {...priceRegister}
          className="ph-input-text"
        />
        <p style={{ color: "red" }}>{errors?.price && errors?.price.message}</p>
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="img">Item Image</label>
        <input
          type="file"
          id="img"
          accept="image/jpeg ,image/jpg"
          {...imgRegister}
        />
        <p style={{ color: "red" }}>{errors?.img && errors?.img.message}</p>
      </div>
      <div className="flex flex-col mb-2">
        <label htmlFor="img">Is veg</label>
        <div className="flex justify-start flex-wrap">
        <div className="flex items-center mx-2">
          <input
            id="radio-1"
            {...isVegRegister}
            type="radio"
            value="true"
            name="isVeg"
            className=" h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="radio-1"
            className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
          >
            Yes
          </label>
        </div>
        <div className="flex items-center mx-2">
          <input
            id="radio-2"
            {...isVegRegister}
            type="radio"
            value="false"
            name="isVeg"
            className="h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          />
          <label
            htmlFor="radio-2"
            className="ms-2 text-sm font-medium text-gray-400 dark:text-gray-500"
          >
            No
          </label>
        </div></div>
        <p style={{ color: "red" }}>
          {errors?.is_veg && errors?.is_veg.message}
        </p>
      </div>
      <button type="submit" className="btn-theme">
        {action}
      </button>
    </form>
  );
};

export default ItemForm;