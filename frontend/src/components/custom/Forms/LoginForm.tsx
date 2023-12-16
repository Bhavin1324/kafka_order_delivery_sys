/* eslint-disable @typescript-eslint/no-explicit-any */
import { useForm } from "react-hook-form";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";
import {
  emailValidation,
  passwordValidation,
} from "../../../utils/ValidationRules";
import { useDispatch, useSelector } from "react-redux";
import { closeModal } from "../../../features/slices/modalSlice";
import { RootState } from "../../../features/store";
import { useState } from "react";
import PHModal from "../Modals/PHModal";
import SignupForm from "../Forms/SignupForm";
import { useFetch } from "../../../hooks/useFetch";
import { ILoginPayload, ILoginResponse } from "../../../types/interfaces";
import { ApiEndpoints, NavigateToRoute } from "../../../types/enums";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";
import { setProgress } from "../../../features/slices/loadingSlice";

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const dispatch = useDispatch();
  const { setPayload, MakeHttpRequest } = useFetch<ILoginPayload>(
    import.meta.env.VITE_CUSTOMER_SERVICE_URI + ApiEndpoints.USER_LOGIN,
    "POST"
  );
  const emailRegister = register("email", emailValidation);
  const passwordRegister = register("password", passwordValidation);
  const [renderModal, setRenderModal] = useState<boolean>(false);
  const { isOpen } = useSelector((store: RootState) => store.modal);
  const navigate = useNavigate();
  const onSubmit = async (data: ILoginPayload) => {
    dispatch(setProgress(80));
    setPayload(data);
    MakeHttpRequest()
      .then((result: { error: string; result: ILoginResponse }) => {
        dispatch(setProgress(100));
        if (result.error === null) {
          localStorage.setItem("token", result.result.token);
          localStorage.setItem("user", result.result.userid);
          localStorage.setItem("outletId", "hjluiwyr845345");
          navigate(`${NavigateToRoute.FOOD}`);
        } else {
          dispatch(setProgress(0));
          Swal.fire({
            title: "Oops! unable to login you",
            text: "You doesn't have an account with these credentials",
            icon: "error",
          });
        }
      })
      .catch((ex) => {
        console.log(ex);
      });
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
          component={<SignupForm />}
          style={{ width: "500px" }}
        />
      )}
    </div>
  );
}

export default LoginForm;
