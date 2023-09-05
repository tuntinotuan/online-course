import { createSlice } from "@reduxjs/toolkit";
import { handleGetMyPurchasedCourses } from "./purchasedHandlerThunk";

const initialState = {
  myPurchasedCourses: [],
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
  },
  extraReducers: (builder) => {
    builder.addCase(handleGetMyPurchasedCourses.fulfilled, (state, action) => {
      state.myPurchasedCourses = action.payload;
    });
  },
});

export const { setMyCart, setLoadingPurchasedCourses } =
  purchasedCoursesSlice.actions;

export default purchasedCoursesSlice.reducer;
