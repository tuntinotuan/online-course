import React, { useEffect, useState } from "react";
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
import {
  handleLogin,
  handleLoginWithGoogle,
} from "../redux-toolkit/auth/authHandlerThunk";
import { useTranslation } from "react-i18next";
import { useGoogleLogin } from "@react-oauth/google";

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

const SignInPage = ({
  className,
  unToForgotPassword = false,
  unToSignUp = false,
  onClickSignUp,
  onClickForgotPassword,
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation("authen");
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
      dispatch(handleLogin({ values, navigate }));
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
  // Login with Google account
  const [userGoogle, setUserGoogle] = useState();
  const loginGoogleHandler = useGoogleLogin({
    onSuccess: (codeResponse) => setUserGoogle(codeResponse),
    onError: (error) => {
      toast.error(error);
      console.log("Login Failed:", error);
    },
  });
  useEffect(() => {
    if (userGoogle) {
      dispatch(handleLoginWithGoogle({ userGoogle, navigate }));
    }
  }, [userGoogle, dispatch, navigate]);
  if (jwt) return <PageNotFound></PageNotFound>;
  return (
    <AuthenticationPage
      title={t("log in to your udemy account")}
      className={className}
    >
      <form
        onSubmit={handleSubmit(loginHandler)}
        className="w-full flex flex-col gap-2 border border-transparent border-b-gray-200 py-3"
      >
        <Button
          className="flex items-center gap-3 text-base font-bold"
          onClick={loginGoogleHandler}
          full
        >
          <IconGoogle></IconGoogle>
          {t("continue with google")}
        </Button>
        <Button className="flex items-center gap-3 text-base font-bold" full>
          <IconFacebook></IconFacebook>
          {t("continue with facebook")}
        </Button>
        <Input
          control={control}
          name="email"
          type="email"
          label="Email"
        ></Input>
        <InputTogglePassword
          control={control}
          label={t("password")}
        ></InputTogglePassword>
        <Button
          type="submit"
          className="bg-purpleTextA4 text-base text-white font-bold py-3"
          borderNone
          full
        >
          {t("log in")}
        </Button>
        <AuthenAnotherOption
          className="text-center my-2"
          textNormal={t("or")}
          textUnderline={t("forgot password")}
          textUnderlineClassName="text-base"
          to={unToForgotPassword ? false : "/forgot-password"}
          onClick={onClickForgotPassword}
        ></AuthenAnotherOption>
      </form>
      <AuthenAnotherOption
        className="text-center mt-3"
        textNormal={t("don't have an account?")}
        textUnderline={t("sign up")}
        to={unToSignUp ? false : "/sign-up"}
        onClick={onClickSignUp}
      ></AuthenAnotherOption>
    </AuthenticationPage>
  );
};

export default SignInPage;
