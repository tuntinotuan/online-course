import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  section: null,
};

const sectionSlice = createSlice({
  name: "section",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase();
  },
});

export default sectionSlice.reducer;
