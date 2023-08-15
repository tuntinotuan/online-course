import React from "react";
import Input from "../components/input/Input";
import { useForm } from "react-hook-form";
import AuthenticationPage from "./AuthenticationPage";
import Button from "../components/button/Button";
import { IconFacebook, IconGoogle } from "../components/icon";
import AuthenAnotherOption from "../components/authen/AuthenAnotherOption";
import { useDispatch, useSelector } from "react-redux";
import { handleLoginThunk } from "../redux-toolkit/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignInPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { control, handleSubmit } = useForm({
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });
  const { user } = useSelector((state) => state.auth);
  const handleLogin = async (values) => {
    try {
      dispatch(handleLoginThunk(values));
      navigate("/");
      toast.success("Login successfully!");
    } catch (error) {
      console.log(error);
    }
  };
  if (user.jwt) return <p>Not found UI</p>;
  return (
    <AuthenticationPage title="Log in to your Udemy account">
      <form
        onSubmit={handleSubmit(handleLogin)}
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
          placeholder="Email"
        ></Input>
        <Input
          control={control}
          name="password"
          type="password"
          placeholder="Password"
        ></Input>
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
