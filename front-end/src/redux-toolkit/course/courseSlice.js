import { createSlice } from "@reduxjs/toolkit";
import {
  handleGetTopicOfCourse,
  handleGetSingleCourse,
  handleSearchCourse,
  handleSearchCourseOnly,
  handleGetAllCourses,
} from "./courseHandlerThunk";

const initialState = {
  courseList: [],
  courseListEnd: false,
  allCourses: null,
  allCoursesEnd: false,
  course: "",
  coursesSearch: [],
  coursesSearchOnly: [],
  searchPagination: [],
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
    setCourseListEnd: (state, action) => ({
      ...state,
      courseListEnd: action.payload,
    }),
    setAllCoursesEnd: (state, action) => ({
      ...state,
      allCoursesEnd: action.payload,
    }),
    setSearchPagination: (state, action) => ({
      ...state,
      searchPagination: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleGetTopicOfCourse.fulfilled, (state, action) => {
        state.courseList = action.payload;
      })
      .addCase(handleGetAllCourses.fulfilled, (state, action) => {
        state.allCourses = action.payload;
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

export const {
  setCourseList,
  setCourseListEnd,
  toggleShowPopupVideo,
  setUrlPreviewVideo,
  setAllCoursesEnd,
  setSearchPagination,
} = courseSlice.actions;

export default courseSlice.reducer;
