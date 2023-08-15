import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { requestLogin } from "./requests";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";

export const handleLoginThunk = createAsyncThunk(
  "login/handleLoginThunk",
  async (query, thunkAPI) => {
    const response = await requestLogin(query);
    console.log("response", response);
    return response;
  }
);

const initialState = {
  user: [],
};

const counterSlide = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(handleLoginThunk.fulfilled, (state, action) => {
      state.user = action.payload;
    });
  },
});

const authPersistConfig = {
  key: "auth",
  storage: storage,
};

export default persistReducer(authPersistConfig, counterSlide.reducer);
