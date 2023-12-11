/* eslint-disable no-useless-escape */
export const nameValidation = {
  required: "Name is required",
};
export const addressValidation = {
  required: "Address is required",
  minLength: {
    value: 5,
    message: "Write more than 5 charecter long Valid address",
  },
};
export const phoneValidation = {
  required: "Contact Number is required",
  pattern: {
    value: /^[7896][0-9]{9}/,
    message: "Invalid phone No",
  },
};
export const pincodeValidation = {
  required: "Pincode is required",
  pattern: {
    value: /^[1-9][0-9]{5}$/,
    message: "Invalid pincode",
  },
};
export const longitudeValidation = {
  required: "longitude is required",
};

export const latitudeValidation = {
  required: "latitude is required",
};

export const emailValidation = {
  required: "Email is required",
  pattern: {
    value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
    message: "Email is invalid",
  },
};
