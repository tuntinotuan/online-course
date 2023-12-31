import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import {
  handleLogin,
  handleLoginWithGithub,
  handleLoginWithGoogle,
  handleLogout,
  handleRegister,
  handleResetPassword,
} from "./authHandlerThunk";

const initialState = {
  jwt: "",
  currentUserId: "",
  infoForReLogin: null,
  authLoading: false,
  error: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCurrentUserId: (state, action) => ({
      ...state,
      currentUserId: action.payload,
    }),
    setInfoForReLogin: (state, action) => ({
      ...state,
      infoForReLogin: action.payload,
    }),
    setError: (state, action) => ({
      ...state,
      error: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleLogin.fulfilled, (state, action) => {
        state.jwt = action.payload;
        state.error = "";
      })
      .addCase(handleLoginWithGoogle.fulfilled, (state, action) => {
        state.jwt = action.payload;
        state.authLoading = false;
        state.error = "";
      })
      .addCase(handleLoginWithGoogle.pending, (state, action) => {
        state.authLoading = true;
      })
      .addCase(handleLoginWithGoogle.rejected, (state, action) => {
        state.authLoading = false;
        state.error = "";
      })
      .addCase(handleLoginWithGithub.fulfilled, (state, action) => {
        state.jwt = action.payload;
        state.authLoading = false;
        state.error = "";
      })
      .addCase(handleLoginWithGithub.pending, (state, action) => {
        state.authLoading = true;
      })
      .addCase(handleLoginWithGithub.rejected, (state, action) => {
        state.authLoading = false;
        state.error = "";
      })
      .addCase(handleResetPassword.fulfilled, (state, action) => {
        state.jwt = action.payload;
        state.error = "";
      })
      .addCase(handleLogout.fulfilled, (state, action) => {
        state.jwt = "";
        state.currentUserId = "";
        state.error = "";
      })
      .addCase(handleRegister.fulfilled, (state, action) => {
        state.jwt = action.payload;
        state.error = "";
      });
  },
});

const authPersistConfig = {
  key: "auth",
  storage: storage,
  whitelist: ["jwt", "currentUserId", "infoForReLogin"],
};

export const { setCurrentUserId, setInfoForReLogin, setError } =
  authSlice.actions;

export default persistReducer(authPersistConfig, authSlice.reducer);
