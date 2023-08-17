import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { handleLogin, handleLogout, handleRegister } from "./authHandlerThunk";

const initialState = {
  jwt: "",
  currentUserId: "",
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
  whitelist: ["jwt", "currentUserId"],
};

export const { setCurrentUserId, setError } = authSlice.actions;

export default persistReducer(authPersistConfig, authSlice.reducer);
