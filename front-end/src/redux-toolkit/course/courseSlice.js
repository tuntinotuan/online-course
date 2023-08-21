import { createSlice } from "@reduxjs/toolkit";
import {
  handleGetCourseData,
  handleGetSingleCourse,
} from "./courseHandlerThunk";

const initialState = {
  courseList: [],
  course: "",
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourseList: (state, action) => ({
      ...state,
      courseList: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleGetCourseData.fulfilled, (state, action) => {
        state.courseList = action.payload;
      })
      .addCase(handleGetSingleCourse.fulfilled, (state, action) => {
        state.course = action.payload;
      });
  },
});

export const { setCourseList } = courseSlice.actions;

export default courseSlice.reducer;
