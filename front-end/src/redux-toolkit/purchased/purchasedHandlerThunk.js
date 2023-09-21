import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestGetMyPurchasedCourses } from "./purchasedRequests";
import {
  setLoadingPurchasedCourses,
  setPurchasedPagination,
} from "./purchasedSlice";

export const handleGetMyPurchasedCourses = createAsyncThunk(
  "purchased/handleGetMyPurchasedCourses",
  async ({ purchasedId, page }, { getState, dispatch }) => {
    let results = [];
    const state = getState();
    const { jwt } = state.auth;
    dispatch(setLoadingPurchasedCourses(true));
    try {
      if (jwt) {
        const response = await requestGetMyPurchasedCourses(purchasedId, page);
        results = response.data;
        dispatch(setPurchasedPagination(response.meta.pagination));
        dispatch(setLoadingPurchasedCourses(false));
      }
    } catch (error) {
      console.log(error);
      dispatch(setLoadingPurchasedCourses(false));
    }
    return results;
  }
);
