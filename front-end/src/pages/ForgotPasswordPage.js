import React, { useEffect } from "react";
import AuthenticationPage from "./AuthenticationPage";
import Input from "../components/input/Input";
import { useForm } from "react-hook-form";
import { Button } from "../components/button";
import AuthenAnotherOption from "../components/authen/AuthenAnotherOption";
import { useDispatch, useSelector } from "react-redux";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { handleForgotPassword } from "../redux-toolkit/auth/authHandlerThunk";
import LoadingSpine from "../components/loading/LoadingSpine";
import { useTranslation } from "react-i18next";

const schema = yup.object({
  email: yup
    .string()
    .email("Please enter invalid your email")
    .required("Please enter your email"),
});

const ForgotPasswordPage = ({
  className,
  unToSignIn = false,
  onClickSignIn,
}) => {
  const dispatch = useDispatch();
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
    },
  });
  const { loading } = useSelector((state) => state.global);
  const submitForgotPassword = (values) => {
    if (!isValid) return;
    console.log("values", values);
    dispatch(handleForgotPassword(values));
  };
  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0].message, { pauseOnHover: false });
    }
  }, [errors]);

  return (
    <AuthenticationPage title={t("forgot password")} className={className}>
      <form onSubmit={handleSubmit(submitForgotPassword)}>
        <div className="my-3">
          <Input
            control={control}
            name="email"
            type="email"
            label="Email"
          ></Input>
        </div>
        <Button
          type="submit"
          className="flex items-center justify-center bg-purpleTextA4 text-base text-white font-bold py-3"
          borderNone
          full
        >
          {loading ? (
            <LoadingSpine size="24px" borderSize="2px"></LoadingSpine>
          ) : (
            t("reset password")
          )}
        </Button>
      </form>
      <AuthenAnotherOption
        className="text-center my-3"
        textNormal={t("or")}
        textUnderline={t("log in")}
        textUnderlineClassName="text-base"
        to={unToSignIn ? false : "/log-in"}
        onClick={onClickSignIn}
      ></AuthenAnotherOption>
    </AuthenticationPage>
  );
};

export default ForgotPasswordPage;
