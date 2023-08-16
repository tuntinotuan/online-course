import React, { useEffect } from "react";
import AuthenticationPage from "./AuthenticationPage";
import Input from "../components/input/Input";
import { useForm } from "react-hook-form";
import { Button } from "../components/button";
import AuthenAnotherOption from "../components/authen/AuthenAnotherOption";
import { handleForgotPasswordThunk } from "../redux-toolkit/authSlice";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../components/loading/LoadingSpine";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";

const schema = yup.object({
  email: yup
    .string()
    .email("Please enter invalid your email")
    .required("Please enter your email"),
});

const ForgotPasswordPage = () => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
    },
  });
  const { loading } = useSelector((state) => state.global);
  const handleForgotPassword = (values) => {
    if (!isValid) return;
    console.log("values", values);
    dispatch(handleForgotPasswordThunk(values));
  };
  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0].message, { pauseOnHover: false });
    }
  }, [errors]);

  return (
    <AuthenticationPage title="Forgot Password">
      <form onSubmit={handleSubmit(handleForgotPassword)}>
        <div className="my-3">
          <Input
            control={control}
            name="email"
            type="email"
            placeholder="Email"
          ></Input>
        </div>
        <Button
          type="submit"
          className="flex items-center justify-center bg-purpleTextA4 text-base text-white font-bold py-3"
          borderNone
          full
        >
          {loading ? (
            <LoadingSpinner size="24px" borderSize="2px"></LoadingSpinner>
          ) : (
            "Reset Password"
          )}
        </Button>
      </form>
      <AuthenAnotherOption
        className="text-center my-3"
        textNormal="or"
        textUnderline="Log in"
        textUnderlineClassName="text-base"
        to="/log-in"
      ></AuthenAnotherOption>
    </AuthenticationPage>
  );
};

export default ForgotPasswordPage;
