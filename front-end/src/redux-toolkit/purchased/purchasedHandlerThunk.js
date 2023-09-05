import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestGetMyPurchasedCourses } from "./purchasedRequests";

export const handleGetMyPurchasedCourses = createAsyncThunk(
  "purchased/handleGetMyPurchasedCourses",
  async (purchasedId, { getState }) => {
    let results = [];
    const state = getState();
    const { jwt } = state.auth;
    try {
      if (jwt) {
        const response = await requestGetMyPurchasedCourses(purchasedId);
        results = response.data;
      }
    } catch (error) {
      console.log(error);
    }
    return results;
  }
);
