import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestGetSingleCourse } from "../course/courseRequests";
import { setSingCourse } from "../course/courseSlice";
import {
  requestCreateNewLecture,
  requestDeleteLecture,
  requestUpdateTitleLecture,
  requestUpdateVideoLecture,
} from "./lectureRequests";
import { requestSectionUpdateConnect } from "../section/sectionRequests";
import { toast } from "react-toastify";

export const handleCreateNewLecture = createAsyncThunk(
  "lecture/handleCreateNewLecture",
  async (value, { dispatch, getState }) => {
    const { sectionId, newTitle } = value;
    console.log("valuessssss", newTitle);
    const state = getState();
    const { course } = state.course;
    try {
      const response = await requestCreateNewLecture(newTitle);
      const connectId = {
        videoId: response.data.id,
      };
      await requestSectionUpdateConnect(sectionId, connectId);
      console.log("response", response);
      const { data } = await requestGetSingleCourse(course.id);
      dispatch(setSingCourse(data));
    } catch (error) {
      console.log("error", error);
    }
  }
);
export const handleUpdateTitleLecture = createAsyncThunk(
  "lecture/handleUpdateTitleLecture",
  async (value, { dispatch, getState }) => {
    const { lectureId, newTitle } = value;
    console.log("valuessssss", lectureId, newTitle);
    const state = getState();
    const { course } = state.course;
    try {
      const response = await requestUpdateTitleLecture(lectureId, newTitle);
      console.log("response", response);
      const { data } = await requestGetSingleCourse(course.id);
      dispatch(setSingCourse(data));
    } catch (error) {
      console.log("error", error);
    }
  }
);
export const handleUpdateVideoLecture = createAsyncThunk(
  "lecture/handleUpdateVideoLecture",
  async (value, { dispatch, getState }) => {
    const { videoId, urlChosenVideo, isPreview } = value;
    console.log("valuessssss", videoId, urlChosenVideo);
    const state = getState();
    const { course } = state.course;
    try {
      const response = await requestUpdateVideoLecture(
        videoId,
        urlChosenVideo,
        isPreview
      );
      console.log("response", response);
      const { data } = await requestGetSingleCourse(course.id);
      dispatch(setSingCourse(data));
      toast.success("Updated video");
    } catch (error) {
      console.log("error", error);
    }
  }
);
export const handleDeleteLecture = createAsyncThunk(
  "lecture/handleDeleteLecture",
  async (values, { dispatch, getState }) => {
    const { lectureId } = values;
    const state = getState();
    const { course } = state.course;
    try {
      const response = await requestDeleteLecture(lectureId);
      console.log("response", response);
      const { data } = await requestGetSingleCourse(course.id);
      dispatch(setSingCourse(data));
    } catch (error) {
      console.log("error", error);
    }
  }
);
