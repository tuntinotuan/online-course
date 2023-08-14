import React from "react";
import AuthenticationPage from "./AuthenticationPage";
import Input from "../components/input/Input";
import { useForm } from "react-hook-form";
import { Button } from "../components/button";
import AuthenAnotherOption from "../components/authen/AuthenAnotherOption";

const ForgotPasswordPage = () => {
  const { control } = useForm();
  return (
    <AuthenticationPage title="Forgot Password">
      <div className="my-3">
        <Input
          control={control}
          name="email"
          type="email"
          placeholder="Email"
        ></Input>
      </div>
      <Button
        className="bg-purpleTextA4 text-base text-white font-bold py-3"
        borderNone
        full
      >
        Reset Password
      </Button>
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
