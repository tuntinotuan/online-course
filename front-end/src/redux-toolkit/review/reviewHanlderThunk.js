import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestCreateReview,
  requestGetMySingleReview,
  requestUpdateCurrentReview,
} from "./reviewRequests";
import { toggleShowPopupReview } from "../globalSlice";

export const handleGetMySingleReview = createAsyncThunk(
  "review/handleGetMySingleReview",
  async (courseId, { getState, dispatch }) => {
    const state = getState();
    const { currentUserId } = state.auth;
    try {
      const response = await requestGetMySingleReview(currentUserId, courseId);
      console.log("res", response.data);
      return response.data[0];
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const handleCreateReview = createAsyncThunk(
  "review/handleCreateReview",
  async (data, { getState, dispatch }) => {
    const state = getState();
    const { mySingleReview, currentCourseId } = state.review;
    const { jwt, currentUserId } = state.auth;
    const { value, content } = data;
    try {
      if (jwt) {
        const response = !mySingleReview
          ? await requestCreateReview(
              currentCourseId,
              currentUserId,
              value,
              content
            )
          : await requestUpdateCurrentReview(mySingleReview, value, content);
        console.log("response", response);
        dispatch(toggleShowPopupReview(false));
      }
    } catch (error) {
      console.log("error", error);
    }
  }
);
