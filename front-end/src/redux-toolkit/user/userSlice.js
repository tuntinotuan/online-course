import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { handleGetUserData } from "./userHandlerThunk";
import { handleLogout } from "../auth/authHandlerThunk";

const initialState = {
  userData: [],
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(handleLogout.fulfilled, (state, action) => {
        state.userData = [];
        state.avatarData = [];
      })
      .addCase(handleGetUserData.fulfilled, (state, action) => {
        state.userData = action.payload;
      });
  },
});

const authPersistConfig = {
  key: "user",
  storage: storage,
  whitelist: ["userData"],
};

export const { setError } = userSlice.actions;

export default persistReducer(authPersistConfig, userSlice.reducer);
