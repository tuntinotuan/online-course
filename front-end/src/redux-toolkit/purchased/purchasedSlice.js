import { createSlice } from "@reduxjs/toolkit";
import {
  handleGetMyPurchasedCourses,
  handleGetStudentPurchasedCourses,
} from "./purchasedHandlerThunk";

const initialState = {
  myPurchasedCourses: [],
  purchasedPagination: [],
  myStudents: null,
  loadingPurchasedCourses: false,
  loadingMyStudents: false,
};

const purchasedCoursesSlice = createSlice({
  name: "purchased",
  initialState,
  reducers: {
    setMyPurchasedCourses: (state, action) => ({
      ...state,
      myPurchasedCourses: action.payload,
    }),
    setLoadingPurchasedCourses: (state, action) => ({
      ...state,
      loadingPurchasedCourses: action.payload,
    }),
    setPurchasedPagination: (state, action) => ({
      ...state,
      purchasedPagination: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(handleGetMyPurchasedCourses.fulfilled, (state, action) => {
      state.myPurchasedCourses = action.payload;
    });
    builder
      .addCase(handleGetStudentPurchasedCourses.fulfilled, (state, action) => {
        state.myStudents = action.payload;
        state.loadingMyStudents = false;
      })
      .addCase(handleGetStudentPurchasedCourses.pending, (state, action) => {
        state.loadingMyStudents = true;
      })
      .addCase(handleGetStudentPurchasedCourses.rejected, (state, action) => {
        state.loadingMyStudents = false;
      });
  },
});

export const { setMyCart, setLoadingPurchasedCourses, setPurchasedPagination } =
  purchasedCoursesSlice.actions;

export default purchasedCoursesSlice.reducer;
