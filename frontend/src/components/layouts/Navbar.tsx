/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import {
  emailValidation,
  passwordValidation,
} from "../../utils/ValidationRules";
import { useDispatch, useSelector } from "react-redux";
import { closeModal, openModal } from "../../features/slices/modalSlice";
import { RootState } from "../../features/store";
import { useState } from "react";
import PHModal from "../custom/PHModal";
// import SignupForm from "./SignupForm";
function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const emailRegister = register("email", emailValidation);
  const passwordRegister = register("password", passwordValidation);
  const dispatch = useDispatch();
  const [renderModal, setRenderModal] = useState<boolean>(false);
  const { isOpen } = useSelector((store: RootState) => store.modal);
  const onSubmit = (data: any) => {
    console.log(data);
    dispatch(closeModal());
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="container">
          <div className="input-field">
            <label htmlFor="userEmail" className="ph-label">
              Enter email
            </label>
            <input
              id="userEmail"
              type="text"
              placeholder="example@provider.com"
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
            <label htmlFor="password" className="ph-label">
              Enter password
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
          <div className="form-button flex justify-end">
            <input
              type="button"
              value="Sign up"
              className="btn-theme-shadowed me-2"
              onClick={() => {
                setRenderModal(!renderModal);
              }}
            />
            <input type="submit" value="Login" className="btn-theme" />
          </div>
        </div>
      </form>
      {renderModal && (
        <PHModal
          headingText="Create an account"
          isOpen={isOpen}
          onClose={() => {
            setRenderModal(false);
            dispatch(closeModal());
          }}
          // component={<SignupForm />}
          style={{ width: "500px" }}
        />
      )}
    </div>
  );
}

export default LoginForm;