import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestGetUserData, requestUpdateUserProfile } from "./userRequests";

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
    // let results = [];
    const state = getState();
    const { userData } = state.user;
    try {
      const response = await requestUpdateUserProfile(userData.id, data);
      console.log("response", response);
    } catch (error) {
      console.log(error);
    }
    // return results;
  }
);
