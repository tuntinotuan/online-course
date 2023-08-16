import React from "react";
import AuthenticationPage from "./AuthenticationPage";
import { useForm } from "react-hook-form";
import { Button } from "../components/button";
import AuthenAnotherOption from "../components/authen/AuthenAnotherOption";
import { useDispatch } from "react-redux";
import { InputTogglePassword } from "../components/input";

const ResetPasswordPage = () => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });
  const handleResetPassword = (values) => {
    if (!isValid) return;
    console.log("values", values);
  };
  return (
    <AuthenticationPage title="Update New Password">
      <form onSubmit={handleSubmit(handleResetPassword)}>
        <div className="my-3">
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
          className="bg-purpleTextA4 text-base text-white font-bold py-3 mt-3"
          borderNone
          full
        >
          Submit
        </Button>
      </form>
    </AuthenticationPage>
  );
};

export default ResetPasswordPage;
