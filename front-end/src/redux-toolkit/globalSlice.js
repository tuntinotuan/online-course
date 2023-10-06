import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  loading: false,
  urlChosenImage: "",
  showFilter: true,
  showPopupSignUp: false,
  showPopupSignIn: false,
  showPopupForgotPassword: false,
  showPopupReview: false,
  showPopupChooseLanguage: false,
  showPopupViewOfDetails: false,
  showPopupEditCategory: false,
  showPopupEditIndustry: false,
  showPopupEditTopic: false,
  darkMode: null,
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
    toggleShowPopupReview: (state, action) => ({
      ...state,
      showPopupReview: action.payload,
    }),
    toggleShowPopupChooseLanguage: (state, action) => ({
      ...state,
      showPopupChooseLanguage: action.payload,
    }),
    setToggleDarkMode: (state, action) => ({
      ...state,
      darkMode: action.payload,
    }),
    setShowPopupViewOfDetails: (state, action) => ({
      ...state,
      showPopupViewOfDetails: action.payload,
    }),
    setShowPopupEditCategory: (state, action) => ({
      ...state,
      showPopupEditCategory: action.payload,
    }),
    setShowPopupEditIndustry: (state, action) => ({
      ...state,
      showPopupEditIndustry: action.payload,
    }),
    setShowPopupEditTopic: (state, action) => ({
      ...state,
      showPopupEditTopic: action.payload,
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
  toggleShowPopupReview,
  toggleShowPopupChooseLanguage,
  setToggleDarkMode,
  setShowPopupViewOfDetails,
  setShowPopupEditCategory,
  setShowPopupEditIndustry,
  setShowPopupEditTopic,
} = globalSlice.actions;

export default globalSlice.reducer;
