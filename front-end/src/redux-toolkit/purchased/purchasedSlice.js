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
    builder.addCase(
      handleGetStudentPurchasedCourses.fulfilled,
      (state, action) => {
        state.myStudents = action.payload;
      }
    );
  },
});

export const { setMyCart, setLoadingPurchasedCourses, setPurchasedPagination } =
  purchasedCoursesSlice.actions;

export default purchasedCoursesSlice.reducer;
