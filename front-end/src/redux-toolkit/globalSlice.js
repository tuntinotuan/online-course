import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  urlChosenImage: "",
};

const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {
    setLoading: (state, action) => ({
      ...state,
      loading: action.payload,
    }),
    setUrlImage: (state, action) => ({
      ...state,
      urlChosenImage: action.payload,
    }),
  },
});

export const { setLoading, setUrlImage } = globalSlice.actions;

export default globalSlice.reducer;
