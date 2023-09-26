import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestChangePassword,
  requestForgotPassword,
  requestGetProfileOfGithub,
  requestGetProfileOfGoogle,
  requestLogin,
  requestLoginWithGithubAccount,
  requestLoginWithGoogleAccount,
  requestLogout,
  requestRegister,
  requestResetPassword,
} from "./authRequests";
import { setCurrentUserId, setError } from "./authSlice";
import {
  setLoading,
  toggleShowPopupForgotPassword,
  toggleShowPopupSignIn,
  toggleShowPopupSignUp,
} from "../globalSlice";
import { requestUpdateUrlAvatarFromThirdPartyProvider } from "../user/userRequests";
import { toast } from "react-toastify";
import { SpecialToastEmail } from "../../components/special";

export const handleLogin = createAsyncThunk(
  "login/handleLoginThunk",
  async (query, { dispatch }) => {
    let results = "";
    const { values, navigate } = query;
    try {
      const response = await requestLogin(values);
      console.log("response", response);
      const { jwt, user } = response;
      results = jwt;
      dispatch(setCurrentUserId(user?.id));
      dispatch(toggleShowPopupSignUp(false));
      dispatch(toggleShowPopupSignIn(false));
      dispatch(toggleShowPopupForgotPassword(false));
      navigate("/");
    } catch (error) {
      console.log(error);
      dispatch(setError(error.error.message));
    }
    return results;
  }
);

export const handleLoginWithGoogle = createAsyncThunk(
  "login/handleLoginWithGoogle",
  async (query, { dispatch }) => {
    let results = null;
    const { search, navigate } = query;
    try {
      const resLoginGoogle = await requestLoginWithGoogleAccount(search);
      const userData = resLoginGoogle.data;
      const { jwt, user } = userData;
      results = jwt;
      localStorage.setItem("strapi_jwt", jwt);
      dispatch(setCurrentUserId(user?.id));
      if (!user?.url_google_avatar) {
        const resGoogle = await requestGetProfileOfGoogle(search);
        const profile = resGoogle.data;
        const newValuesGoogleAvatar = {
          jwt,
          userId: user?.id,
          url: profile.picture,
        };
        await requestUpdateUrlAvatarFromThirdPartyProvider(
          newValuesGoogleAvatar
        );
      }
      navigate("/");
    } catch (error) {
      console.log(error.response.data.error.message);
      error?.response?.data && toast.error(error.response.data.error.message);
    }
    return results;
  }
);
export const handleLoginWithGithub = createAsyncThunk(
  "login/handleLoginWithGithub",
  async (query, { dispatch }) => {
    let results = null;
    const { search, accessToken, navigate } = query;
    try {
      const resLoginGithub = await requestLoginWithGithubAccount(search);
      const userData = resLoginGithub.data;
      const { jwt, user } = userData;
      results = jwt;
      localStorage.setItem("strapi_jwt", jwt);
      dispatch(setCurrentUserId(user?.id));
      if (!user?.url_google_avatar) {
        const resGithub = await requestGetProfileOfGithub(accessToken);
        const profile = resGithub.data;
        const newValuesGithubAvatar = {
          jwt,
          userId: user?.id,
          url: profile.avatar_url,
        };
        await requestUpdateUrlAvatarFromThirdPartyProvider(
          newValuesGithubAvatar
        );
      }
      navigate("/");
    } catch (error) {
      console.log(error);
    }
    return results;
  }
);

export const handleLogout = createAsyncThunk(
  "logout/handleLogoutThunk",
  async () => {
    requestLogout();
  }
);

export const handleRegister = createAsyncThunk(
  "register/handleRegisterThunk",
  async (query, { dispatch }) => {
    let results = "";
    const { values, navigate } = query;
    try {
      const response = await requestRegister(values);
      console.log("response", response);
      const { jwt, user } = response;
      results = jwt;
      dispatch(setCurrentUserId(user?.id));
      navigate("/");
    } catch (error) {
      console.log(error);
      dispatch(setError(error.error.message));
    }
    return results;
  }
);

export const handleForgotPassword = createAsyncThunk(
  "forgotPassword/handleForgotPasswordThunk",
  async (value, { dispatch }) => {
    dispatch(setLoading(true));
    try {
      const response = await requestForgotPassword(value);
      console.log("response", response);
      if (response?.ok) {
        toast.success("Send email successfully!");
        toast(<SpecialToastEmail text="Check email" to="Here" />, {
          closeOnClick: false,
        });
      }
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
    }
  }
);
export const handleResetPassword = createAsyncThunk(
  "forgotPassword/handleResetPassword",
  async (value, { dispatch }) => {
    let results = null;
    dispatch(setLoading(true));
    const { code, password, passwordConfirmation, navigate } = value;
    try {
      const response = await requestResetPassword(
        code,
        password,
        passwordConfirmation
      );
      console.log("response", response);
      const { jwt, user } = response;
      results = jwt;
      dispatch(setCurrentUserId(user?.id));
      if (jwt) {
        toast.success("Update password successfully!");
        navigate("/");
      }
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
      dispatch(setError(error.error.message));
    }
    return results;
  }
);
export const handleChangePassword = createAsyncThunk(
  "forgotPassword/handleChangePasswordThunk",
  async (value, { dispatch }) => {
    dispatch(setLoading(true));
    try {
      const response = await requestChangePassword(value);
      console.log("response", response);
      dispatch(setLoading(false));
      toast.success("Updated password successfully!");
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
      dispatch(setError(error.error.message));
      toast.error(error.error.message);
    }
  }
);
