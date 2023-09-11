import { createSlice } from "@reduxjs/toolkit";
import {
  handleGetAuthorList,
  handleGetSingleAuthor,
} from "./authorHandlerThunk";

const initialState = {
  authorList: [],
  authorSingle: {},
};

const authorSlice = createSlice({
  name: "author",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(handleGetAuthorList.fulfilled, (state, action) => {
        state.authorList = action.payload;
      })
      .addCase(handleGetSingleAuthor.fulfilled, (state, action) => {
        state.authorSingle = action.payload;
      });
  },
});

export default authorSlice.reducer;
