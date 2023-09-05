import { createSlice } from "@reduxjs/toolkit";
import {
  handleCreateReview,
  handleGetMySingleReview,
} from "./reviewHanlderThunk";

const initialState = {
  currentCourseId: null,
  mySingleReview: {},
  reviewLoading: false,
};

const reviewSlice = createSlice({
  name: "review",
  initialState,
  reducers: {
    setCurrentCourseId: (state, action) => ({
      ...state,
      currentCourseId: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleGetMySingleReview.fulfilled, (state, action) => {
        state.mySingleReview = action.payload;
      })
      .addCase(handleCreateReview.fulfilled, (state, action) => {
        state.reviewLoading = false;
      })
      .addCase(handleCreateReview.pending, (state, action) => {
        state.reviewLoading = true;
      })
      .addCase(handleCreateReview.rejected, (state, action) => {
        state.reviewLoading = false;
      });
  },
});

export const { setCurrentCourseId } = reviewSlice.actions;

export default reviewSlice.reducer;
