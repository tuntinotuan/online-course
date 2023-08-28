import { createSlice } from "@reduxjs/toolkit";
import {
  handleGetCourseData,
  handleGetSingleCourse,
  handleSearchCourse,
  handleSearchCourseOnly,
} from "./courseHandlerThunk";

const initialState = {
  courseList: [],
  course: "",
  coursesSearch: [],
  coursesSearchOnly: [],
  courseLoading: false,
  showPopupVideo: false,
  urlPreviewVideo: "",
};

const courseSlice = createSlice({
  name: "course",
  initialState,
  reducers: {
    setCourseList: (state, action) => ({
      ...state,
      courseList: action.payload,
    }),
    toggleShowPopupVideo: (state, action) => ({
      ...state,
      showPopupVideo: action.payload,
    }),
    setUrlPreviewVideo: (state, action) => ({
      ...state,
      urlPreviewVideo: action.payload,
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
      .addCase(handleSearchCourseOnly.fulfilled, (state, action) => {
        state.coursesSearchOnly = action.payload;
      });
  },
});

export const { setCourseList, toggleShowPopupVideo, setUrlPreviewVideo } =
  courseSlice.actions;

export default courseSlice.reducer;
