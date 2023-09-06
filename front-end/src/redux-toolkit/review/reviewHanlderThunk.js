import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestCreateReview,
  requestGetMySingleReview,
  requestUpdateCurrentReview,
} from "./reviewRequests";
import { toggleShowPopupReview } from "../globalSlice";
import {
  requestGetSingleCourse,
  requestUpdateTotalReviewsCourse,
} from "../course/courseRequests";
import { mediumRatingsCourse } from "../../utils/processing-number";

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
        if (!mySingleReview) {
          await requestCreateReview(
            currentCourseId,
            currentUserId,
            value,
            content
          );
          // Update: star & total_reviews of course
          const { data } = await requestGetSingleCourse(currentCourseId);
          const resSingleCourse = data;
          const newValue = mediumRatingsCourse(resSingleCourse?.reviews);
          const newStar =
            resSingleCourse?.reviews?.length > 1 ? newValue : value;
          await requestUpdateTotalReviewsCourse(
            currentCourseId,
            newStar,
            resSingleCourse.total_reviews + 1
          );
        } else {
          await requestUpdateCurrentReview(mySingleReview, value, content);
          // Update: star & total_reviews of course
          const { data } = await requestGetSingleCourse(currentCourseId);
          const resSingleCourse = data;
          const newStar = mediumRatingsCourse(resSingleCourse?.reviews);
          await requestUpdateTotalReviewsCourse(
            currentCourseId,
            newStar,
            resSingleCourse.total_reviews
          );
        }
        dispatch(toggleShowPopupReview(false));
      }
    } catch (error) {
      console.log("error", error);
    }
  }
);
