/* eslint-disable no-useless-escape */
export const nameValidation = {
  required: "Name is required",
  pattern: {
    value: /^[A-Za-z]+$/,
    message: "Invalid name",
  },
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
    value: /^(0|91)?[6-9][0-9]{9}$/,
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

export const passwordValidation = {
  required: "Password is required",
  minLength: {
    value: 4,
    message: "Password should contain aleast 4 characters",
  },
  maxLength: {
    value: 20,
    message: "Password cannot exceed 20 character limit",
  },
  pattern: {
    value: /^(?=.*[a-zA-Z])(?=.*[0-9]).+$/,
    message: "Password should be alpha-numeric",
  },
};
export const usernameValidation = {
  required: "Username is required",
  pattern: {
    value: /^(?=.*[a-zA-Z])(?=.*[0-9]).+$/,
    message: "Username must contain atleast one number",
  },
  minLength: {
    value: 4,
    message: "Username should contain atleast 4 characters",
  },
  maxLength: {
    value: 20,
    message: "Username should not exceed 20 character",
  },
};
