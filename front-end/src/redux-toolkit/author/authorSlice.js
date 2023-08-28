import { createSlice } from "@reduxjs/toolkit";
import { handleGetSingleAuthor } from "./authorHandlerThunk";

const initialState = {
  authorList: [],
  authorSingle: {},
};

const authorSlice = createSlice({
  name: "author",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleGetSingleAuthor.fulfilled, (state, action) => {
      state.authorSingle = action.payload;
    });
  },
});

export default authorSlice.reducer;
