import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  requestForgotPassword,
  requestLogin,
  requestLogout,
  requestRegister,
} from "./requests";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { setLoading } from "./globalSlice";
import { toast } from "react-toastify";

export const handleLoginThunk = createAsyncThunk(
  "login/handleLoginThunk",
  async (query, { dispatch }) => {
    let results = [];
    try {
      const response = await requestLogin(query);
      results = response;
    } catch (error) {
      console.log(error);
      dispatch(setError(error.error.message));
    }
    return results;
  }
);
export const handleLogoutThunk = createAsyncThunk(
  "logout/handleLogoutThunk",
  async () => {
    requestLogout();
  }
);

export const handleRegisterThunk = createAsyncThunk(
  "register/handleRegisterThunk",
  async (values) => {
    let results = [];
    try {
      const response = await requestRegister(values);
      console.log("response", response);
      results = response;
      toast.success("Register successfully!");
    } catch (error) {
      console.log(error);
    }
    return results;
  }
);

export const handleForgotPasswordThunk = createAsyncThunk(
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

const initialState = {
  user: [],
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setError: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleLoginThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = "";
      })
      .addCase(handleLogoutThunk.fulfilled, (state, action) => {
        state.user = [];
      })
      .addCase(handleRegisterThunk.fulfilled, (state, action) => {
        state.user = action.payload;
        state.error = "";
      });
  },
});

const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["user"],
};

export const { setError } = authSlice.actions;

export default persistReducer(authPersistConfig, authSlice.reducer);
