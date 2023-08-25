import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  urlChosenImage: "",
  showFilter: true,
  showPopupSignUp: false,
  showPopupSignIn: false,
  showPopupForgotPassword: false,
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
    toggleShowPopupSignUp: (state, action) => ({
      ...state,
      showPopupSignUp: action.payload,
    }),
    toggleShowPopupSignIn: (state, action) => ({
      ...state,
      showPopupSignIn: action.payload,
    }),
    toggleShowPopupForgotPassword: (state, action) => ({
      ...state,
      showPopupForgotPassword: action.payload,
    }),
  },
});

export const {
  setLoading,
  setUrlImage,
  toggleShowFilter,
  toggleShowPopupSignUp,
  toggleShowPopupSignIn,
  toggleShowPopupForgotPassword,
} = globalSlice.actions;

export default globalSlice.reducer;
