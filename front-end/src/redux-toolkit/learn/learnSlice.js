import { createSlice } from "@reduxjs/toolkit";
import { handleGetSingleLearnOnline } from "./learnHandlerThunk";

const initialState = {
  singleLearnOnline: {},
  toggleLearnOnlineSidebar: true,
};

const learnSlice = createSlice({
  name: "learn",
  initialState,
  reducers: {
    setToggleLearnOnlineSidebar: (state, action) => ({
      ...state,
      toggleLearnOnlineSidebar: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(handleGetSingleLearnOnline.fulfilled, (state, action) => {
      state.singleLearnOnline = action.payload;
    });
  },
});

export const { setToggleLearnOnlineSidebar } = learnSlice.actions;

export default learnSlice.reducer;
