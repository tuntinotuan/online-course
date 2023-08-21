import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestGetUserData,
  requestUpdateUserProfile,
  requestUpdateUserAvatar,
} from "./userRequests";

export const handleGetUserData = createAsyncThunk(
  "user/handleUserDataThunk",
  async (query) => {
    let results = [];
    try {
      const response = await requestGetUserData(query);
      results = response;
    } catch (error) {
      console.log(error);
    }
    return results;
  }
);
export const handleUpdateUserProfile = createAsyncThunk(
  "user/handleUpdateUserProfileThunk",
  async (data, { getState }) => {
    const state = getState();
    const { userData } = state.user;
    const { jwt } = state.auth;
    try {
      const response = await requestUpdateUserProfile(userData.id, jwt, data);
      console.log("response", response);
    } catch (error) {
      console.log(error);
    }
  }
);
export const handleUpdateUserAvatar = createAsyncThunk(
  "user/handleUpdateUserAvatarThunk",
  async (data, { getState }) => {
    const state = getState();
    const { userData } = state.user;
    const { jwt } = state.auth;
    try {
      const response = await requestUpdateUserAvatar(userData.id, jwt, data);
      console.log("response", response);
    } catch (error) {
      console.log(error);
    }
  }
);
