/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import {
  emailValidation,
  nameValidation,
  passwordValidation,
  phoneValidation,
  usernameValidation,
} from "../../utils/ValidationRules";
import { useFetch } from "../../hooks/useFetch";
import { IUser } from "../../types/interfaces";
import { ApiEndpoints, ConstantValues, Roles } from "../../types/enums";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { closeModal } from "../../features/slices/modalSlice";
export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [userData, setUserData] = useState<IUser>({
    name: "",
    email: "",
    password: "",
    phone_no: "",
    username: "",
  });
  const registerUser = useFetch<IUser>(
    import.meta.env.VITE_CUSTOMER_SERVICE_URI + ApiEndpoints.USER_REGISTER,
    "POST",
    userData
  );
  const dispatch = useDispatch();

  useEffect(() => {
    let counter = 0;
    Object.keys(userData).map((item) => {
      if (userData[item].length === 0 || !userData[item].trim()) {
        return counter++;
      }
    });
    if (counter === 0) {
      registerUser();
      Swal.fire({
        position: "center",
        icon: "success",
        title: "User has been successfully registered",
        showConfirmButton: false,
        timer: 1500,
      });
    }
  }, [userData]);

  const onSubmit = (data: IUser) => {
    setUserData({
      ...data,
      credits: ConstantValues.INIT_CREDIT,
      role: Roles.CUSTOMER,
    });
    dispatch(closeModal());
  };

  const nameRegister = register("name", nameValidation);
  const usernameRegister = register("username", usernameValidation);
  const emailRegister = register("email", emailValidation);
  const passwordRegister = register("password", passwordValidation);
  const phoneNoRegister = register("phone_no", phoneValidation);
  return (
    <>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="container">
            <div className="input-field">
              <label htmlFor="name" className="ph-label">
                Enter your name
              </label>
              <input
                id="name"
                type="text"
                className={`peer ${
                  errors?.name ? "ph-input-invalid" : "ph-input-text"
                }`}
                {...nameRegister}
              />
              {errors?.name && (
                <div className="error-message">
                  <ErrorOutlineOutlinedIcon
                    fontSize="small"
                    style={{ margin: "3px 2px 0px 2px" }}
                  />
                  <p className="mb-0">{errors?.name.message}</p>
                </div>
              )}
            </div>
            <div className="input-field mt-4">
              <label htmlFor="name" className="ph-label">
                Create username
              </label>
              <input
                id="username"
                type="text"
                className={`peer ${
                  errors?.username ? "ph-input-invalid" : "ph-input-text"
                }`}
                {...usernameRegister}
              />
              {errors?.username && (
                <div className="error-message">
                  <ErrorOutlineOutlinedIcon
                    fontSize="small"
                    style={{ margin: "3px 2px 0px 2px" }}
                  />
                  <p className="mb-0">{errors?.username.message}</p>
                </div>
              )}
            </div>
            <div className="input-field mt-4">
              <label htmlFor="password" className="ph-label">
                Create password
              </label>
              <input
                id="password"
                type="password"
                className={`peer ${
                  errors?.password ? "ph-input-invalid" : "ph-input-text"
                }`}
                {...passwordRegister}
              />
              {errors?.password && (
                <div className="error-message">
                  <ErrorOutlineOutlinedIcon
                    fontSize="small"
                    style={{ margin: "3px 2px 0px 2px" }}
                  />

                  <p className="mb-0">{errors?.password.message}</p>
                </div>
              )}
            </div>
            <div className="input-field mt-4">
              <label htmlFor="email" className="ph-label">
                Enter email
              </label>
              <input
                id="email"
                type="email"
                className={`peer ${
                  errors?.email ? "ph-input-invalid" : "ph-input-text"
                }`}
                {...emailRegister}
              />
              {errors?.email && (
                <div className="error-message">
                  <ErrorOutlineOutlinedIcon
                    fontSize="small"
                    style={{ margin: "3px 2px 0px 2px" }}
                  />

                  <p className="mb-0">{errors?.email.message}</p>
                </div>
              )}
            </div>
            <div className="input-field mt-4">
              <label htmlFor="phone" className="ph-label">
                Enter phone number
              </label>
              <input
                id="phone"
                type="number"
                className={`peer ${
                  errors?.phone_no ? "ph-input-invalid" : "ph-input-text"
                }`}
                {...phoneNoRegister}
              />
              {errors?.phone_no && (
                <div className="error-message">
                  <ErrorOutlineOutlinedIcon
                    fontSize="small"
                    style={{ margin: "3px 2px 0px 2px" }}
                  />

                  <p className="mb-0">{errors?.phone_no.message}</p>
                </div>
              )}
            </div>
            <div className="form-button flex justify-end">
              <input type="submit" value="Sign up" className="btn-theme" />
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
