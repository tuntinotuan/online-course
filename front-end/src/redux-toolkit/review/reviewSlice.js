import { createSlice } from "@reduxjs/toolkit";
import {
  handleCreateAndUpdateReview,
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
      .addCase(handleCreateAndUpdateReview.fulfilled, (state, action) => {
        state.reviewLoading = false;
      })
      .addCase(handleCreateAndUpdateReview.pending, (state, action) => {
        state.reviewLoading = true;
      })
      .addCase(handleCreateAndUpdateReview.rejected, (state, action) => {
        state.reviewLoading = false;
      });
  },
});

export const { setCurrentCourseId } = reviewSlice.actions;

export default reviewSlice.reducer;
