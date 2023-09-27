import { createSlice } from "@reduxjs/toolkit";
import {
  handleGetAllTopics,
  handleGetCategories,
  handleGetTopics,
} from "./categoryHanlderThunk";

const initialState = {
  listCategories: [],
  listIndustries: [],
  listTopics: null,
  allTopics: null,
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
      });
  },
});

export const { setListIndustries, setListTopics, setAllTopics } =
  categorySlice.actions;

export default categorySlice.reducer;
