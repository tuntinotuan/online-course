import { createSlice } from "@reduxjs/toolkit";
import {
  handleCheckCouponOfDiscount,
  handleGetDiscountOfCourse,
} from "./discountHandlerThunk";

const initialState = {
  discountACourse: null,
  listDiscount: null,
  loadingIsApply: false,
  errorCoupon: "",
};

const discountSlice = createSlice({
  name: "discount",
  initialState,
  reducers: {
    setDiscountACourse: (state, action) => ({
      ...state,
      discountACourse: action.payload,
    }),
    setErrorCoupon: (state, action) => ({
      ...state,
      errorCoupon: action.payload,
    }),
    setListDiscount: (state, action) => ({
      ...state,
      listDiscount: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleCheckCouponOfDiscount.fulfilled, (state, action) => {
        state.loadingIsApply = false;
      })
      .addCase(handleCheckCouponOfDiscount.pending, (state, action) => {
        state.loadingIsApply = true;
      })
      .addCase(handleCheckCouponOfDiscount.rejected, (state, action) => {
        state.loadingIsApply = false;
      });
    builder.addCase(handleGetDiscountOfCourse.fulfilled, (state, action) => {
      state.discountACourse = action.payload;
    });
  },
});

export const { setErrorCoupon, setListDiscount, setDiscountACourse } =
  discountSlice.actions;

export default discountSlice.reducer;
