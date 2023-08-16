import React, { useEffect } from "react";
import Input from "../components/input/Input";
import { useForm } from "react-hook-form";
import AuthenticationPage from "./AuthenticationPage";
import Button from "../components/button/Button";
import { SpecialTextUnderline } from "../components/special";
import AuthenAnotherOption from "../components/authen/AuthenAnotherOption";
import { InputTogglePassword } from "../components/input";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { handleRegisterThunk } from "../redux-toolkit/authSlice";

const schema = yup.object({
  fullname: yup
    .string()
    .min(4, "Your fullname must be at least 4 characters")
    .required("Please enter your fullname"),
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email address"),
  password: yup
    .string()
    .min(8, "Your password must be at least 8 characters or greater")
    .required("Please enter your password"),
});

const SignUpPage = () => {
  const dispatch = useDispatch();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      fullname: "",
      email: "",
      password: "",
    },
  });
  const handleRegister = (values) => {
    if (!isValid) return;
    console.log("values", values);
    dispatch(handleRegisterThunk(values));
  };
  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0].message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  }, [errors]);

  return (
    <AuthenticationPage title="Sign up and start learning">
      <form
        onSubmit={handleSubmit(handleRegister)}
        className="w-full flex flex-col gap-2 border border-transparent border-b-gray-200 py-3"
      >
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
        <InputTogglePassword control={control}></InputTogglePassword>
        <Button
          type="submit"
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
      </form>
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
