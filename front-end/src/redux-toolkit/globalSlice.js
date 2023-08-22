import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  urlChosenImage: "",
  showFilter: true,
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
    toggleShowFilter: (state, action) => ({
      ...state,
      showFilter: action.payload,
    }),
  },
});

export const { setLoading, setUrlImage, toggleShowFilter } =
  globalSlice.actions;

export default globalSlice.reducer;
