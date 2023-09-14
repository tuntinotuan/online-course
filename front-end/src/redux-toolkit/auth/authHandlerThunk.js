import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestChangePassword,
  requestForgotPassword,
  requestGetProfileOfGoogle,
  requestLogin,
  requestLoginWithGoogleAccount,
  requestLogout,
  requestRegister,
} from "./authRequests";
import { setCurrentUserId, setError } from "./authSlice";
import {
  setLoading,
  toggleShowPopupForgotPassword,
  toggleShowPopupSignIn,
  toggleShowPopupSignUp,
} from "../globalSlice";
import { requestUpdateUrlGoogleAvatar } from "../user/userRequests";

export const handleLogin = createAsyncThunk(
  "login/handleLoginThunk",
  async (query, { dispatch }) => {
    let results = "";
    const { values, navigate } = query;
    try {
      const response = await requestLogin(values);
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
      const useData = resLoginGoogle.data;
      const { jwt, user } = useData;
      results = jwt;
      dispatch(setCurrentUserId(user?.id));
      if (!user?.url_google_avatar) {
        const resGoogle = await requestGetProfileOfGoogle(search);
        const profile = resGoogle.data;
        const newValuesGoogleAvatar = {
          jwt,
          userId: user?.id,
          url: profile.picture,
        };
        await requestUpdateUrlGoogleAvatar(newValuesGoogleAvatar);
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
  "forgotPassword/hanldForgotPasswordThunk",
  async (value, { dispatch }) => {
    dispatch(setLoading(true));
    try {
      const response = await requestForgotPassword(value);
      console.log("response", response);
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
    }
  }
);
export const handleChangePassword = createAsyncThunk(
  "forgotPassword/hanldChangePasswordThunk",
  async (value, { dispatch }) => {
    dispatch(setLoading(true));
    try {
      const response = await requestChangePassword(value);
      console.log("response", response);
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
      dispatch(setError(error.error.message));
    }
  }
);
