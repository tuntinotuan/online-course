import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestGetCategories, requestGetTopics } from "./categoryRequests";

export const handleGetCategories = createAsyncThunk(
  "category/handleGetCategories",
  async (query, { getState }) => {
    try {
      const response = await requestGetCategories(query);
      console.log("response", response.data);
      return response.data;
    } catch (error) {
      console.log("error", error);
    }
  }
);
export const handleGetTopics = createAsyncThunk(
  "category/handleGetTopics",
  async (industryId, { getState }) => {
    try {
      const response = await requestGetTopics(industryId);
      console.log("response", response.data);
      return response.data.topics;
    } catch (error) {
      console.log("error", error);
    }
  }
);
