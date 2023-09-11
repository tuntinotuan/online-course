import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestGetAllCourses,
  requestGetSingleCourse,
  requestGetTopicOfCourse,
  requestSearchCourse,
} from "./courseRequests";
import { setLoading } from "../globalSlice";

export const handleGetTopicOfCourse = createAsyncThunk(
  "course/handleGetTopicOfCourse",
  async ({ topicName, filter }, { dispatch }) => {
    let results = [];
    dispatch(setLoading(true));
    try {
      const response = await requestGetTopicOfCourse(topicName, filter);
      results = response.data;
      dispatch(setLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(setLoading(false));
    }
    return results;
  }
);
export const handleGetAllCourses = createAsyncThunk(
  "course/handleGetAllCourses",
  async (query, { dispatch }) => {
    let results = [];
    try {
      const response = await requestGetAllCourses(query);
      results = response.data;
    } catch (error) {
      console.log(error);
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
export const handleSearchCourseOnly = createAsyncThunk(
  "course/handleSearchCourseOnly",
  async (filter, ThunkAPI) => {
    const response = await requestSearchCourse(filter);
    return response.data;
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
