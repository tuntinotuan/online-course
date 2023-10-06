import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestDeleteCategory,
  requestDeleteIndustry,
  requestDeleteTopic,
  requestGetAllCategories,
  requestGetAllIndustries,
  requestGetAllTopics,
  requestGetCategories,
  requestGetSingleCategory,
  requestGetSingleIndustry,
  requestGetSingleTopic,
  requestGetTopics,
  requestUpdateCategory,
  requestUpdateIndustry,
  requestUpdateTopic,
} from "./categoryRequests";
import {
  setAllCategories,
  setAllIndustries,
  setAllTopics,
} from "./categorySlice";
import Swal from "sweetalert2";

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
export const handleGetAllCategories = createAsyncThunk(
  "category/handleGetAllCategories",
  async (query, { getState }) => {
    try {
      const response = await requestGetAllCategories(query);
      console.log("response", response);
      return response;
    } catch (error) {
      console.log("error", error);
    }
  }
);
export const handleGetSingleCategory = createAsyncThunk(
  "category/handleGetSingleCategory",
  async (query, { getState }) => {
    const { categoryId } = query;
    try {
      const response = await requestGetSingleCategory(categoryId);
      console.log("Single Category", response);
      return response.data;
    } catch (error) {
      console.log("error", error);
    }
  }
);
export const handleUpdateCategory = createAsyncThunk(
  "category/handleUpdateCategory",
  async (values, { getState, dispatch }) => {
    const state = getState();
    const { category } = state.category;
    try {
      await requestUpdateCategory(category.id, values);
      const response = await requestGetAllCategories();
      dispatch(setAllCategories(response));
    } catch (error) {
      console.log("error", error);
    }
  }
);
export const handleDeleteCategory = createAsyncThunk(
  "category/handleDeleteCategory",
  async (query, { getState, dispatch }) => {
    const { categoryId, categoryName } = query;
    try {
      await requestDeleteCategory(categoryId);
      const response = await requestGetAllCategories();
      dispatch(setAllCategories(response));
      Swal.fire(
        "Deleted!",
        `Your ${categoryName} Category has been deleted.`,
        "success"
      );
    } catch (error) {
      console.log("error", error);
    }
  }
);
export const handleGetAllIndustries = createAsyncThunk(
  "category/handleGetAllIndustries",
  async (query, { getState }) => {
    try {
      const response = await requestGetAllIndustries(query);
      console.log("response", response);
      return response;
    } catch (error) {
      console.log("error", error);
    }
  }
);
export const handleGetSingleIndustry = createAsyncThunk(
  "category/handleGetSingleIndustry",
  async (query, { getState }) => {
    const { industryId } = query;
    try {
      const response = await requestGetSingleIndustry(industryId);
      console.log("Single Industry", response);
      return response.data;
    } catch (error) {
      console.log("error", error);
    }
  }
);
export const handleUpdateIndustry = createAsyncThunk(
  "category/handleUpdateIndustry",
  async (values, { getState, dispatch }) => {
    const state = getState();
    const { industry } = state.category;
    try {
      await requestUpdateIndustry(industry.id, values);
      const response = await requestGetAllIndustries();
      dispatch(setAllIndustries(response));
    } catch (error) {
      console.log("error", error);
    }
  }
);
export const handleDeleteIndustry = createAsyncThunk(
  "category/handleDeleteIndustry",
  async (query, { getState, dispatch }) => {
    const { industryId, industryName } = query;
    try {
      await requestDeleteIndustry(industryId);
      const response = await requestGetAllIndustries();
      dispatch(setAllIndustries(response));
      Swal.fire(
        "Deleted!",
        `Your ${industryName} Industry has been deleted.`,
        "success"
      );
    } catch (error) {
      console.log("error", error);
    }
  }
);
export const handleGetAllTopics = createAsyncThunk(
  "category/handleGetAllTopics",
  async (query, { getState }) => {
    try {
      const response = await requestGetAllTopics(query);
      console.log("response", response);
      return response;
    } catch (error) {
      console.log("error", error);
    }
  }
);
export const handleGetSingleTopic = createAsyncThunk(
  "category/handleGetSingleTopic",
  async (query, { getState }) => {
    const { topicId } = query;
    try {
      const response = await requestGetSingleTopic(topicId);
      console.log("Single Topic", response);
      return response.data;
    } catch (error) {
      console.log("error", error);
    }
  }
);
export const handleUpdateTopic = createAsyncThunk(
  "category/handleUpdateTopic",
  async (values, { getState, dispatch }) => {
    const state = getState();
    const { topic } = state.category;
    try {
      await requestUpdateTopic(topic.id, values);
      const response = await requestGetAllTopics();
      dispatch(setAllTopics(response));
    } catch (error) {
      console.log("error", error);
    }
  }
);
export const handleDeleteTopic = createAsyncThunk(
  "category/handleDeleteTopic",
  async (query, { getState, dispatch }) => {
    const { topicId, topicName } = query;
    try {
      await requestDeleteTopic(topicId);
      const response = await requestGetAllTopics();
      dispatch(setAllTopics(response));
      Swal.fire(
        "Deleted!",
        `Your ${topicName} Topic has been deleted.`,
        "success"
      );
    } catch (error) {
      console.log("error", error);
    }
  }
);
