import React, { useEffect } from "react";
import Input from "../components/input/Input";
import { useForm } from "react-hook-form";
import AuthenticationPage from "./AuthenticationPage";
import Button from "../components/button/Button";
import { IconFacebook, IconGoogle } from "../components/icon";
import AuthenAnotherOption from "../components/authen/AuthenAnotherOption";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { InputTogglePassword } from "../components/input";
import PageNotFound from "../components/notfound/PageNotFound";
import { handleLogin } from "../redux-toolkit/auth/authHandlerThunk";

const schema = yup.object({
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email address"),
  password: yup
    .string()
    .min(8, "Your password must be at least 8 characters or greater")
    .required("Please enter your password"),
});

const SignInPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { jwt, error } = useSelector((state) => state.auth);
  const loginHandler = async (values) => {
    if (!isValid) return;
    try {
      dispatch(handleLogin(values));
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0].message, {
        pauseOnHover: false,
        delay: 0,
      });
    } else {
      error &&
        toast.error(error, {
          pauseOnHover: false,
          delay: 0,
        });
    }
  }, [errors, error]);

  if (jwt) return <PageNotFound></PageNotFound>;
  return (
    <AuthenticationPage title="Log in to your Udemy account">
      <form
        onSubmit={handleSubmit(loginHandler)}
        className="w-full flex flex-col gap-2 border border-transparent border-b-gray-200 py-3"
      >
        <Button className="flex items-center gap-3 text-base font-bold" full>
          <IconGoogle></IconGoogle>
          Continue with Google
        </Button>
        <Button className="flex items-center gap-3 text-base font-bold" full>
          <IconFacebook></IconFacebook>
          Continue with Facebook
        </Button>
        <Input
          control={control}
          name="email"
          type="email"
          label="Email"
        ></Input>
        <InputTogglePassword control={control}></InputTogglePassword>
        <Button
          type="submit"
          className="bg-purpleTextA4 text-base text-white font-bold py-3"
          borderNone
          full
        >
          Log in
        </Button>
        <AuthenAnotherOption
          className="text-center my-2"
          textNormal="or"
          textUnderline="Forgot Password"
          textUnderlineClassName="text-base"
          to="/forgot-password"
        ></AuthenAnotherOption>
      </form>
      <AuthenAnotherOption
        className="text-center mt-3"
        textNormal="Don't have an account?"
        textUnderline="Sign up"
        to="/sign-up"
      ></AuthenAnotherOption>
    </AuthenticationPage>
  );
};

export default SignInPage;
