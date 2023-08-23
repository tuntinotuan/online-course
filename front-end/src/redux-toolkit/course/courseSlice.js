import { createSlice } from "@reduxjs/toolkit";
import {
  handleGetCourseData,
  handleGetCourseRating,
  handleGetSingleCourse,
  handleSearchCourse,
} from "./courseHandlerThunk";

const initialState = {
  courseList: [],
  course: "",
  coursesSearch: [],
  courseLoading: false,
  courseAllRatings: {},
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
      })
      .addCase(handleSearchCourse.fulfilled, (state, action) => {
        state.coursesSearch = action.payload;
        state.courseLoading = false;
      })
      .addCase(handleSearchCourse.pending, (state, action) => {
        state.courseLoading = true;
      })
      .addCase(handleSearchCourse.rejected, (state, action) => {
        state.courseLoading = false;
      })
      .addCase(handleGetCourseRating.fulfilled, (state, action) => {
        state.courseAllRatings = action.payload;
      });
  },
});

export const { setCourseList } = courseSlice.actions;

export default courseSlice.reducer;
