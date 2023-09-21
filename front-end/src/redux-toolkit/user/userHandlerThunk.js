import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestGetUserData,
  requestUpdateUserProfile,
  requestUpdateUserAvatar,
} from "./userRequests";
import { setUserData } from "./userSlice";
import { toast } from "react-toastify";

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
  async (data, { getState, dispatch }) => {
    const state = getState();
    const { jwt, currentUserId } = state.auth;
    try {
      const response = await requestUpdateUserProfile(currentUserId, jwt, data);
      const newUseData = await requestGetUserData(currentUserId);
      dispatch(setUserData(newUseData));
      console.log("response", response);
      toast.success("Update profile successfully!");
    } catch (error) {
      console.log(error);
    }
  }
);
export const handleUpdateUserAvatar = createAsyncThunk(
  "user/handleUpdateUserAvatarThunk",
  async (data, { getState, dispatch }) => {
    const state = getState();
    const { jwt, currentUserId } = state.auth;
    try {
      const response = await requestUpdateUserAvatar(currentUserId, jwt, data);
      const newUseData = await requestGetUserData(currentUserId);
      dispatch(setUserData(newUseData));
      console.log("response", response);
    } catch (error) {
      console.log(error);
    }
  }
);
