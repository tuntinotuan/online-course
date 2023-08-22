import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import {
  handleGetUserData,
  handleUpdateUserAvatar,
  handleUpdateUserProfile,
} from "./userHandlerThunk";
import { handleLogout } from "../auth/authHandlerThunk";

const initialState = {
  userData: [],
  loadingUser: false,
  error: "",
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUserData: (state, action) => ({
      ...state,
      userData: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleLogout.fulfilled, (state, action) => {
        state.userData = [];
      })
      .addCase(handleGetUserData.fulfilled, (state, action) => {
        state.userData = action.payload;
      })
      .addCase(handleUpdateUserProfile.fulfilled, (state, action) => {
        state.loadingUser = false;
      })
      .addCase(handleUpdateUserProfile.pending, (state, action) => {
        state.loadingUser = true;
      })
      .addCase(handleUpdateUserProfile.rejected, (state, action) => {
        state.loadingUser = false;
      })
      .addCase(handleUpdateUserAvatar.fulfilled, (state, action) => {
        state.loadingUser = false;
      })
      .addCase(handleUpdateUserAvatar.pending, (state, action) => {
        state.loadingUser = true;
      })
      .addCase(handleUpdateUserAvatar.rejected, (state, action) => {
        state.loadingUser = false;
      });
  },
});

const authPersistConfig = {
  key: "user",
  storage: storage,
  whitelist: ["userData"],
};

export const { setUserData } = userSlice.actions;

export default persistReducer(authPersistConfig, userSlice.reducer);
