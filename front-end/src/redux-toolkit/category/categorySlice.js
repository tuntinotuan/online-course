import { createSlice } from "@reduxjs/toolkit";
import {
  handleGetAllCategories,
  handleGetAllIndustries,
  handleGetAllTopics,
  handleGetCategories,
  handleGetSingleCategory,
  handleGetSingleIndustry,
  handleGetSingleTopic,
  handleGetTopics,
} from "./categoryHanlderThunk";

const initialState = {
  listCategories: [],
  listIndustries: [],
  listTopics: null,
  allCategories: null,
  category: null,
  allIndustries: null,
  industry: null,
  allTopics: null,
  topic: null,
  loadingCategories: false,
  loadingTopics: false,
};

const categorySlice = createSlice({
  name: "category",
  initialState,
  reducers: {
    setListIndustries: (state, action) => ({
      ...state,
      listIndustries: action.payload,
    }),
    setListTopics: (state, action) => ({
      ...state,
      listTopics: action.payload,
    }),
    setAllTopics: (state, action) => ({
      ...state,
      allTopics: action.payload,
    }),
    setAllCategories: (state, action) => ({
      ...state,
      allCategories: action.payload,
    }),
    setAllIndustries: (state, action) => ({
      ...state,
      allIndustries: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleGetCategories.fulfilled, (state, action) => {
        state.listCategories = action.payload;
        state.loadingCategories = false;
      })
      .addCase(handleGetCategories.pending, (state, action) => {
        state.loadingCategories = true;
      })
      .addCase(handleGetCategories.rejected, (state, action) => {
        state.loadingCategories = false;
      })
      .addCase(handleGetTopics.fulfilled, (state, action) => {
        state.listTopics = action.payload;
        state.loadingTopics = false;
      })
      .addCase(handleGetTopics.pending, (state, action) => {
        state.loadingTopics = true;
      })
      .addCase(handleGetTopics.rejected, (state, action) => {
        state.loadingTopics = false;
      })
      .addCase(handleGetAllTopics.fulfilled, (state, action) => {
        state.allTopics = action.payload;
      })
      .addCase(handleGetAllCategories.fulfilled, (state, action) => {
        state.allCategories = action.payload;
      })
      .addCase(handleGetAllIndustries.fulfilled, (state, action) => {
        state.allIndustries = action.payload;
      })
      .addCase(handleGetSingleCategory.fulfilled, (state, action) => {
        state.category = action.payload;
      })
      .addCase(handleGetSingleIndustry.fulfilled, (state, action) => {
        state.industry = action.payload;
      })
      .addCase(handleGetSingleTopic.fulfilled, (state, action) => {
        state.topic = action.payload;
      });
  },
});

export const {
  setListIndustries,
  setListTopics,
  setAllTopics,
  setAllCategories,
  setAllIndustries,
} = categorySlice.actions;

export default categorySlice.reducer;
