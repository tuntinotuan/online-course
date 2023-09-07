import { createSlice } from "@reduxjs/toolkit";
import { handleGetSingleLearnOnline } from "./learnHandlerThunk";

const initialState = {
  singleLearnOnline: {},
  urlPlayVideo: "",
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
    setUrlPlayVideo: (state, action) => ({
      ...state,
      urlPlayVideo: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(handleGetSingleLearnOnline.fulfilled, (state, action) => {
      state.singleLearnOnline = action.payload;
    });
  },
});

export const { setToggleLearnOnlineSidebar, setUrlPlayVideo } =
  learnSlice.actions;

export default learnSlice.reducer;
