import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestDeleteAndRestoreCourse,
  requestGetAllCourses,
  requestGetSingleCourse,
  requestGetTopicOfCourse,
  requestUpdateCourse,
} from "./courseRequests";
import { requestSearchCourse } from "./requestSearchCourse";
import { setLoading } from "../globalSlice";
import {
  setAllCourses,
  setAllCoursesEnd,
  setAllCoursesRecycleBin,
  setCourseListEnd,
  setCoursesAdminPagination,
  setLoadingUpdateCourse,
  setLoadingUpdateCourseSkeleton,
  setSearchPagination,
} from "./courseSlice";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

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
      console.log("res", response);
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
export const handleGetCoursesInAdmin = createAsyncThunk(
  "course/handleGetCoursesInAdmin",
  async (query, { dispatch, getState }) => {
    let results = [];
    const { page } = query;
    const state = getState();
    const { allCourses } = state.course;
    const newPage = page + 1;
    try {
      const response = await requestGetAllCourses(newPage);
      console.log("res", response);
      results = response.data;
      const { meta } = response;
      const newPageCount = meta.pagination.pageCount;
      dispatch(setCoursesAdminPagination(meta.pagination));
      if (!allCourses) results = response.data;
      if (allCourses && page <= newPageCount) {
        results =
          allCourses.length < meta.pagination.total
            ? allCourses.concat(response.data)
            : allCourses;
      }
    } catch (error) {
      console.log(error);
    }
    return results;
  }
);
export const handleGetAllCoursesInRecycleBin = createAsyncThunk(
  "course/handleGetAllCoursesInRecycleBin",
  async (query, { dispatch, getState }) => {
    let results = [];
    const { page } = query;
    // const state = getState();
    // const { allCoursesRecycleBin } = state.course;
    try {
      const response = await requestGetAllCourses(page, true);
      // const newPageCount = response.meta.pagination.pageCount;
      results = response.data;
      // if (allCoursesRecycleBin && page <= newPageCount) {
      //   results = allCoursesRecycleBin.concat(response.data);
      // }
    } catch (error) {
      console.log(error);
    }
    return results;
  }
);
export const handleGetSingleCourse = createAsyncThunk(
  "course/handleGetSingleCourse",
  async ({ courseId, reset, setValue }, { dispatch }) => {
    let results = [];
    dispatch(setLoadingUpdateCourseSkeleton(true));
    try {
      const response = await requestGetSingleCourse(courseId);
      console.log("response", response);
      results = response.data;
      reset &&
        reset({
          title: results.title,
          subTitle: results.subtitle,
          currentPrice: results.current_price,
          originalPrice: results.original_price,
          star: results.star,
          topic: results.topic.name,
        });
      setValue && setValue("description", results.description);
      dispatch(setLoadingUpdateCourseSkeleton(false));
    } catch (error) {
      console.log(error);
      dispatch(setLoadingUpdateCourseSkeleton(false));
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
export const handleDeleteCourse = createAsyncThunk(
  "course/handleDeleteCourse",
  async (courseId, { dispatch, getState }) => {
    const state = getState();
    const { allCourses } = state.course;
    try {
      await requestDeleteAndRestoreCourse(courseId);
      Swal.fire("Deleted!", "Your file has been deleted.", "success");
      const response = await requestGetAllCourses();
      const { meta } = response;
      const newAllCourses = allCourses.filter(
        (course) => course.id !== courseId
      );
      dispatch(setAllCourses(newAllCourses));
      dispatch(setCoursesAdminPagination(meta.pagination));
    } catch (error) {
      console.log(error);
      toast.error(error.error.message);
    }
  }
);
export const handleRestoreCourse = createAsyncThunk(
  "course/handleRestoreCourse",
  async (courseId, { dispatch }) => {
    try {
      await requestDeleteAndRestoreCourse(courseId, false);
      Swal.fire("Restored!", "Your file has been restored.", "success");
      const response = await requestGetAllCourses();
      dispatch(setAllCourses(response.data));
      const { data } = await requestGetAllCourses(1, true);
      dispatch(setAllCoursesRecycleBin(data));
    } catch (error) {
      console.log(error);
      toast.error(error.error.message);
    }
  }
);

export const handleUpdateCourse = createAsyncThunk(
  "course/handleUpdateCourse",
  async (query, { dispatch }) => {
    const { courseId, newValues, urlChosenImage } = query;
    dispatch(setLoadingUpdateCourse(true));
    try {
      const response = await requestUpdateCourse(
        courseId,
        newValues,
        urlChosenImage
      );
      console.log("res", response);
      dispatch(setLoadingUpdateCourse(false));
      Swal.fire("Update!", "Your file has been update.", "success");
    } catch (error) {
      console.log("error", error);
      dispatch(setLoadingUpdateCourse(false));
    }
  }
);
