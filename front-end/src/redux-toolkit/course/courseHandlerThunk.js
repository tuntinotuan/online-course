import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestCourseUpdateConnect,
  requestCreateCourse,
  requestCreateVideoIntro,
  requestDeleteAndRestoreCourse,
  requestGetAllCourses,
  requestGetMyCourses,
  requestGetSingleCourse,
  requestGetTopicOfCourse,
  requestUpdateCourse,
  requestUpdateVideoIntro,
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
  setMyCoursePagination,
  setSearchPagination,
} from "./courseSlice";
import { toast } from "react-toastify";
import Swal from "sweetalert2";

export const handleGetMyCourses = createAsyncThunk(
  "course/handleGetMyCourses",
  async (values, { dispatch, getState }) => {
    const state = getState();
    const { page, search } = values;
    const { currentUserId } = state.auth;
    try {
      const response = await requestGetMyCourses(currentUserId, page, search);
      const { meta } = response;
      dispatch(setMyCoursePagination(meta.pagination));
      console.log("ress", response.data);
      return response.data;
    } catch (error) {
      console.log("error", error);
      toast.error(error.error.message);
    }
  }
);
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
          topic: results?.topic?.name,
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
      const { meta } = response;
      dispatch(setAllCourses(response.data));
      dispatch(setCoursesAdminPagination(meta.pagination));
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
  async (query, { dispatch, getState }) => {
    const { courseId, newValues, urlChosenImage, urlChosenVideo } = query;
    dispatch(setLoadingUpdateCourse(true));
    const state = getState();
    const { course } = state.course;
    let videoIntroId = null;
    try {
      // Update Promotional Video
      if (urlChosenVideo) {
        if (!course?.video_intro) {
          const { data } = await requestCreateVideoIntro();
          await requestUpdateVideoIntro(data.id, urlChosenVideo);
          videoIntroId = data.id;
        } else {
          await requestUpdateVideoIntro(
            course?.video_intro?.id,
            urlChosenVideo
          );
        }
      }
      const newVideoIntroId = course?.video_intro?.id || videoIntroId;
      const dataUploadVideo = {
        newVideoIntroId,
        urlChosenVideo,
      };
      //
      const response = await requestUpdateCourse(
        courseId,
        newValues,
        urlChosenImage,
        dataUploadVideo
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
export const handleCreateCourse = createAsyncThunk(
  "course/handleCreateCourse",
  async (values, { dispatch, getState }) => {
    const { navigate } = values;
    const state = getState();
    const { currentUserId } = state.auth;
    const connectId = {
      userId: currentUserId,
    };
    try {
      const response = await requestCreateCourse(values);
      console.log("ress", response.data);
      await requestCourseUpdateConnect(response.data.id, connectId);
      values.topicId && (await requestUpdateCourse(response.data.id, values));
      navigate("/instructor/courses");
    } catch (error) {
      console.log("error", error);
      toast.error(error.error.message);
    }
  }
);
