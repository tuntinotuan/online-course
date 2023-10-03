import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestCreateNewSection,
  requestUpdateTitleSection,
} from "./sectionRequests";
import {
  requestCourseUpdateConnect,
  requestGetSingleCourse,
} from "../course/courseRequests";
import { setSingCourse } from "../course/courseSlice";

export const handleCreateNewSection = createAsyncThunk(
  "section/handleCreateNewSection",
  async (values, { dispatch, getState }) => {
    const { newTitle } = values;
    console.log("valuessssss", newTitle);
    const state = getState();
    const { course } = state.course;
    try {
      const response = await requestCreateNewSection(newTitle);
      console.log("response", response);
      const connectId = {
        sectionId: response.data.id,
      };
      await requestCourseUpdateConnect(course.id, connectId);
      const { data } = await requestGetSingleCourse(course.id);
      dispatch(setSingCourse(data));
    } catch (error) {
      console.log("error", error);
    }
  }
);
export const handleUpdateTitleSection = createAsyncThunk(
  "section/handleUpdateTitleSection",
  async (values, { dispatch, getState }) => {
    const { sectionId, newTitle } = values;
    const state = getState();
    const { course } = state.course;
    try {
      const response = await requestUpdateTitleSection(sectionId, newTitle);
      console.log("response", response);
      const { data } = await requestGetSingleCourse(course.id);
      dispatch(setSingCourse(data));
    } catch (error) {
      console.log("error", error);
    }
  }
);
