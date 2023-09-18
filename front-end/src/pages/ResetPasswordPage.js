import React, { useEffect } from "react";
import AuthenticationPage from "./AuthenticationPage";
import { useForm } from "react-hook-form";
import { Button } from "../components/button";
import AuthenAnotherOption from "../components/authen/AuthenAnotherOption";
import { useDispatch, useSelector } from "react-redux";
import { InputTogglePassword } from "../components/input";
import { handleResetPassword } from "../redux-toolkit/auth/authHandlerThunk";
import { useNavigate, useSearchParams } from "react-router-dom";
import LoadingSpine from "../components/loading/LoadingSpine";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

const schema = yup.object({
  password: yup
    .string()
    .min(8, "Your password must be at least 8 charaters or more")
    .required("Please enter your password"),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match"),
});

const ResetPasswordPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [param] = useSearchParams();
  const code = param.get("code");
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onSubmit", resolver: yupResolver(schema) });
  const { loading } = useSelector((state) => state.global);
  const { error } = useSelector((state) => state.auth);
  const resetPasswordHandler = (values) => {
    if (!isValid) return;
    console.log("values", values);
    const newValues = {
      code,
      password: values.password,
      passwordConfirmation: values.passwordConfirmation,
      navigate,
    };
    dispatch(handleResetPassword(newValues));
  };
  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0 || error) {
      toast.error(arrErrors[0]?.message || error, { pauseOnHover: false });
    }
  }, [errors, error]);
  return (
    <AuthenticationPage title="Update New Password">
      <form
        className="flex flex-col gap-3 mt-3"
        onSubmit={handleSubmit(resetPasswordHandler)}
      >
        <div className="">
          <InputTogglePassword
            control={control}
            name="password"
            placeholder="Password"
          ></InputTogglePassword>
        </div>
        <InputTogglePassword
          control={control}
          name="passwordConfirmation"
          placeholder="Confirm password"
        ></InputTogglePassword>
        <Button
          type="submit"
          className="flex items-center justify-center bg-purpleTextA4 text-base text-white font-bold py-3"
          borderNone
          full
        >
          {loading ? (
            <LoadingSpine size="24px" borderSize="2px"></LoadingSpine>
          ) : (
            "Submit"
          )}
        </Button>
        <AuthenAnotherOption
          textNormal="Don't have an email reset password"
          textUnderline="Send email here"
          to="/forgot-password"
        ></AuthenAnotherOption>
      </form>
    </AuthenticationPage>
  );
};

export default ResetPasswordPage;
