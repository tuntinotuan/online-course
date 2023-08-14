import React from "react";
import Input from "../components/input/Input";
import { useForm } from "react-hook-form";
import AuthenticationPage from "./AuthenticationPage";
import Button from "../components/button/Button";
import { SpecialTextUnderline } from "../components/special";
import AuthenAnotherOption from "../components/authen/AuthenAnotherOption";

const SignUpPage = () => {
  const { control } = useForm();
  return (
    <AuthenticationPage title="Sign up and start learning">
      <div className="w-full flex flex-col gap-2 border border-transparent border-b-gray-200 py-3">
        <Input
          control={control}
          name="fullname"
          placeholder="Full name"
        ></Input>
        <Input
          control={control}
          name="email"
          type="email"
          placeholder="Email"
        ></Input>
        <Input
          control={control}
          name="password"
          type="password"
          placeholder="Password"
        ></Input>
        <Button
          className="bg-purpleTextA4 text-base text-white font-bold py-3"
          borderNone
          full
        >
          Sign up
        </Button>
        <p className="text-xs mt-3">
          By signing up, you agree to our
          <SpecialTextUnderline text="Terms of Use"></SpecialTextUnderline>
          and
          <SpecialTextUnderline text="Privacy Policy."></SpecialTextUnderline>
        </p>
      </div>
      <AuthenAnotherOption
        className="text-center mt-3"
        textNormal="Already have an account?"
        textUnderline="Log in"
        to="/log-in"
      ></AuthenAnotherOption>
    </AuthenticationPage>
  );
};

export default SignUpPage;
