import React, { useEffect } from "react";
import Input from "../components/input/Input";
import { useForm } from "react-hook-form";
import AuthenticationPage from "./AuthenticationPage";
import Button from "../components/button/Button";
import { IconFacebook, IconGithub, IconGoogle } from "../components/icon";
import AuthenAnotherOption from "../components/authen/AuthenAnotherOption";
import { useDispatch, useSelector } from "react-redux";
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { InputTogglePassword } from "../components/input";
import {
  handleLogin,
  handleLoginWithGithub,
  handleLoginWithGoogle,
} from "../redux-toolkit/auth/authHandlerThunk";
import { useTranslation } from "react-i18next";
import { ButtonUserAvatar } from "../components/button";
import { setInfoForReLogin } from "../redux-toolkit/auth/authSlice";
import { strapiPathBE } from "../utils/constants";
import LoadingSpin from "../components/loading/LoadingSpin";

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
  const { authProvider } = useParams();
  const [param] = useSearchParams();
  const accessToken = param.get("access_token");
  const { t } = useTranslation("authen");
  const { infoForReLogin, authLoading, error } = useSelector(
    (state) => state.auth
  );
  const {
    control,
    handleSubmit,
    setValue,
    formState: { errors, isValid },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
    defaultValues: {
      email: infoForReLogin ? infoForReLogin?.email : "",
      password: "",
    },
  });
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
  const loginGoogleHandler = () => {
    window.location = `${strapiPathBE}/api/connect/google`;
  };
  const loginGithubHandler = () => {
    window.location = `${strapiPathBE}/api/connect/github`;
  };
  const location = useLocation();
  const handleClickDifferentAccount = () => {
    dispatch(setInfoForReLogin(null));
    setValue("email", "");
  };
  const { search } = location;
  useEffect(() => {
    if (authProvider !== "google") return;
    dispatch(handleLoginWithGoogle({ search, navigate }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authProvider]);
  useEffect(() => {
    if (authProvider !== "github") return;
    dispatch(handleLoginWithGithub({ search, accessToken, navigate }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [authProvider]);
  return (
    <AuthenticationPage
      title={t("log in to your udemy account")}
      className={className}
    >
      {authLoading && (
        <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-60 z-50">
          <LoadingSpin
            borderColor="#000"
            borderSize="2px"
            size="62px"
          ></LoadingSpin>
        </div>
      )}
      <form
        onSubmit={handleSubmit(loginHandler)}
        className="w-full flex flex-col gap-2 border border-transparent border-b-gray-200 dark:border-b-primaryBlack py-3"
      >
        {infoForReLogin && (
          <div className="flex flex-col items-center justify-center gap-2">
            <ButtonUserAvatar
              avatar={infoForReLogin?.avatar && infoForReLogin?.avatar}
              shortName={infoForReLogin?.username}
              size={62}
            ></ButtonUserAvatar>
            <span>
              {t("welcome back")}, {infoForReLogin?.username}
            </span>
          </div>
        )}
        {(!infoForReLogin || infoForReLogin?.provider === "google") && (
          <Button
            className="flex items-center gap-3 text-base font-bold"
            onClick={loginGoogleHandler}
            full
          >
            <IconGoogle></IconGoogle>
            {t("continue with google")}
          </Button>
        )}
        {(!infoForReLogin || infoForReLogin?.provider === "github") && (
          <Button
            className="flex items-center gap-3 text-base font-bold"
            onClick={loginGithubHandler}
            full
          >
            <IconGithub></IconGithub>
            {t("continue with github")}
          </Button>
        )}
        {!infoForReLogin && (
          <>
            <Button
              className="flex items-center gap-3 text-base font-bold"
              full
            >
              <IconFacebook></IconFacebook>
              {t("continue with facebook")}
            </Button>
            <Input
              control={control}
              name="email"
              type="email"
              label="Email"
            ></Input>
          </>
        )}
        {(!infoForReLogin || infoForReLogin?.provider === "local") && (
          <>
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
          </>
        )}
        <AuthenAnotherOption
          className="text-center my-2"
          textNormal={t("or")}
          textUnderline={t("forgot password")}
          textUnderlineClassName="text-base"
          to={unToForgotPassword ? false : "/forgot-password"}
          onClick={onClickForgotPassword}
        ></AuthenAnotherOption>
      </form>
      {infoForReLogin && (
        <AuthenAnotherOption
          className="text-center mt-3"
          textUnderline={t("log in to a different account")}
          to={false}
          onClick={handleClickDifferentAccount}
        ></AuthenAnotherOption>
      )}
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
