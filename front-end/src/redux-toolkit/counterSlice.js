import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import requestTest from "./requests";

export const handleTestReduxThunk = createAsyncThunk(
  "test/handleTestReduxThunk",
  async (query, thunkAPI) => {
    const response = await requestTest(query);
    return response.data;
  }
);

const initialState = {
  count: 0,
  course: [],
};

const counterSlide = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => ({
      ...state,
      count: state.count + 1,
    }),
    decrement: (state) => ({
      ...state,
      count: state.count - 1,
    }),
    incrementByValue: (state, { payload }) => ({
      ...state,
      count: state.count + payload.value,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(handleTestReduxThunk.fulfilled, (state, action) => {
      state.course = action.payload;
    });
  },
});

export const { increment, decrement, incrementByValue } = counterSlide.actions;
export default counterSlide.reducer;
