import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestGetAllCourses,
  requestGetSingleCourse,
  requestGetTopicOfCourse,
  requestSearchCourse,
} from "./courseRequests";
import { setLoading } from "../globalSlice";
import {
  setAllCoursesEnd,
  setCourseListEnd,
  setSearchPagination,
} from "./courseSlice";

export const handleGetTopicOfCourse = createAsyncThunk(
  "course/handleGetTopicOfCourse",
  async ({ topicName, filter, page }, { dispatch, getState }) => {
    let results = [];
    const state = getState();
    const { courseList } = state.course;
    !courseList.length > 0 && dispatch(setLoading(true));
    try {
      const response = await requestGetTopicOfCourse(topicName, filter, page);
      const newPageCount = response.meta.pagination.pageCount;
      if (!courseList.length > 0) results = response.data;
      if (courseList && page <= newPageCount) {
        results = courseList.concat(response.data);
      }
      if (page === newPageCount) dispatch(setCourseListEnd(true));
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
  async (query, { dispatch, getState }) => {
    let results = [];
    const { page } = query;
    const state = getState();
    const { allCourses } = state.course;
    try {
      const response = await requestGetAllCourses(page);
      const newPageCount = response.meta.pagination.pageCount;
      if (!allCourses) results = response.data;
      if (allCourses && page <= newPageCount) {
        results = allCourses.concat(response.data);
      }
      if (page === newPageCount) dispatch(setAllCoursesEnd(true));
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
  async (filter, { dispatch }) => {
    const response = await requestSearchCourse(filter);
    console.log("response SEARCH", response);
    const { meta } = response;
    dispatch(setSearchPagination(meta.pagination));
    return response.data;
  }
);
