import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestGetAllTopics,
  requestGetCategories,
  requestGetTopics,
} from "./categoryRequests";
import { setAllTopics } from "./categorySlice";

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

export const handleGetAllTopics = createAsyncThunk(
  "category/handleGetAllTopics",
  async (query, { getState }) => {
    try {
      const response = await requestGetAllTopics();
      console.log("response", response.data);
      return response.data;
    } catch (error) {
      console.log("error", error);
    }
  }
);
export const handleSearchTopic = createAsyncThunk(
  "category/handleSearchTopic",
  async (query, { dispatch }) => {
    try {
      const response = await requestGetAllTopics(query);
      console.log("response", response.data);
      dispatch(setAllTopics(response.data));
    } catch (error) {
      console.log("error", error);
    }
  }
);
