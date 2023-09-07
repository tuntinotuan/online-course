import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestGetSingleLearnOnline } from "./learnRequests";
import { setUrlPlayVideo } from "./learnSlice";
import { requestGetMyPurchasedCourses } from "../purchased/purchasedRequests";

export const handleGetSingleLearnOnline = createAsyncThunk(
  "learn/handleGetSingleLearnOnline",
  async (courseId, { getState, dispatch }) => {
    const state = getState();
    const { jwt } = state.auth;
    const { userData } = state.user;
    const { purchased_course } = userData;
    try {
      const { data } = await requestGetMyPurchasedCourses(purchased_course?.id);
      const checkPurchasedCourses = await data?.courses?.some(
        (course) => course.id === Number(courseId)
      );
      if (jwt && checkPurchasedCourses) {
        const { data } = await requestGetSingleLearnOnline(courseId);
        const response = data;
        console.log("res", response);
        dispatch(
          setUrlPlayVideo(
            response?.video_lists[0]?.video_courses[0]?.video?.url
          )
        );
        return response;
      }
    } catch (error) {
      console.log("error", error);
    }
  }
);
