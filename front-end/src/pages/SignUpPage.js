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
import { useDispatch, useSelector } from "react-redux";
import { handleRegister } from "../redux-toolkit/auth/authHandlerThunk";
import { useTranslation } from "react-i18next";
import PageNotFound from "../components/notfound/PageNotFound";
import { useNavigate } from "react-router-dom";

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

const SignUpPage = ({ className, unToSignIn = false, onClickSignIn }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { t } = useTranslation(["authen", "header"]);
  const { jwt, error } = useSelector((state) => state.auth);
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
  const registerHandler = (values) => {
    if (!isValid) return;
    console.log("values", values);
    dispatch(handleRegister({ values, navigate }));
  };
  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0 || error) {
      toast.error(arrErrors[0]?.message || error, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  }, [errors, error]);
  useEffect(() => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  if (jwt) return <PageNotFound></PageNotFound>;
  return (
    <AuthenticationPage
      title={t("sign up and start learning")}
      className={className}
    >
      <form
        onSubmit={handleSubmit(registerHandler)}
        className="w-full flex flex-col gap-2 border border-transparent border-b-gray-200 py-3"
      >
        <Input control={control} name="fullname" label={t("fullname")}></Input>
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
          {t("sign up")}
        </Button>
        <p className="text-xs mt-3">
          {t("by signing")}
          <SpecialTextUnderline text={t("terms")}></SpecialTextUnderline>
          {t("and")}
          <SpecialTextUnderline text={t("policy")}></SpecialTextUnderline>
        </p>
      </form>
      <AuthenAnotherOption
        className="text-center mt-3"
        textNormal={t("already have an account?")}
        textUnderline={t("log in")}
        to={unToSignIn ? false : "/log-in"}
        onClick={onClickSignIn}
      ></AuthenAnotherOption>
    </AuthenticationPage>
  );
};

export default SignUpPage;
