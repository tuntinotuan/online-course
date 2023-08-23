import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestGetCourseData,
  requestGetSingleCourse,
  requestSearchCourse,
} from "./courseRequests";
import { setLoading } from "../globalSlice";

export const handleGetCourseData = createAsyncThunk(
  "course/handleGetCourseData",
  async (query, { dispatch }) => {
    let results = [];
    dispatch(setLoading(true));
    try {
      const response = await requestGetCourseData(query);
      results = response.data;
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
    }
    return results;
  }
);
export const handleGetSingleCourse = createAsyncThunk(
  "course/handleGetSingleCourse",
  async (courseId, ThunkAPI) => {
    let results = [];
    try {
      const response = await requestGetSingleCourse(courseId);
      console.log("response", response);
      results = response.data;
    } catch (error) {
      console.log(error);
    }
    return results;
  }
);

export const handleSearchCourse = createAsyncThunk(
  "course/handleSearchCourse",
  async (filter, ThunkAPI) => {
    const response = await requestSearchCourse(filter);
    console.log("response", response.data);
    return response.data;
  }
);

export const handleGetCourseRating = createAsyncThunk(
  "course/handleGetCourseRating",
  async (filter, ThunkAPI) => {
    const upFourDotFive = await requestSearchCourse({ rating: 4.5 });
    const upFour = await requestSearchCourse({ rating: 4 });
    const upThreeDotFive = await requestSearchCourse({ rating: 3.5 });
    const upThree = await requestSearchCourse({ rating: 3 });
    // console.log("response ratings 4.5", upFourDotFive.data.length);
    // console.log("response ratings 4", upFour.data.length);
    // console.log("response ratings 3.5", upThreeDotFive.data.length);
    // console.log("response ratings 3", upThree.data.length);
    const newObj = {
      fourDotFive: upFourDotFive.data.length,
      four: upFour.data.length,
      threeDotFive: upThreeDotFive.data.length,
      three: upThree.data.length,
    };
    return newObj;
  }
);
