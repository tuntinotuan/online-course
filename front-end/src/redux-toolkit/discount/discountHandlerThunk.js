import { createAsyncThunk } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import {
  requestCheckCouponOfDiscount,
  requestCreateDiscount,
  requestDeleteDiscount,
  requestDiscountConnectWithCourse,
  requestGetDiscountOfCourse,
  requestUpdateDiscount,
} from "./discountRequests";
import {
  setDiscountACourse,
  setErrorCoupon,
  setListDiscount,
} from "./discountSlice";

export const handleCheckCouponOfDiscount = createAsyncThunk(
  "discount/handleCheckCouponOfDiscount",
  async (values, { dispatch, getState }) => {
    const { coupon } = values;
    console.log("values", values);
    const state = getState();
    const { myCart } = state.cart;
    const { courses } = myCart;
    const { listDiscount } = state.discount;
    let arrCourseId = [];
    try {
      await courses.forEach((course) => {
        arrCourseId.push(course.id);
      });
      console.log("arrCourseId", arrCourseId);
      const { data } = await requestCheckCouponOfDiscount(coupon, arrCourseId);
      console.log("check-coupon", data);
      const couponIsApplied = listDiscount?.some(
        (discount) => discount?.id === data[0]?.id
      );
      if (data.length > 0 && !couponIsApplied) {
        listDiscount
          ? dispatch(setListDiscount(listDiscount.concat(data)))
          : dispatch(setListDiscount(data));
      }
      if (!data.length > 0) {
        dispatch(
          setErrorCoupon(
            "The coupon code entered is not valid for this course."
          )
        );
      }
      if (couponIsApplied) {
        dispatch(
          setErrorCoupon(
            "The coupon code was applied, please enter a different coupon code!"
          )
        );
      }
    } catch (error) {
      console.log("error", error);
      toast.error(error.error.message);
    }
  }
);

export const handleGetDiscountOfCourse = createAsyncThunk(
  "discount/handleGetDiscountOfCourse",
  async (values, { dispatch, getState }) => {
    const { courseId } = values;
    console.log("courseId", courseId);
    try {
      const { data } = await requestGetDiscountOfCourse(courseId);
      console.log("data", data);
      return data;
    } catch (error) {
      console.log("error", error);
      toast.error(error.error.message);
    }
  }
);
export const handleCreateDiscount = createAsyncThunk(
  "discount/handleCreateDiscount",
  async (query, { dispatch, getState }) => {
    const { values, courseId } = query;
    try {
      const response = await requestCreateDiscount(values);
      console.log("response", response);
      await requestDiscountConnectWithCourse(response.data.id, courseId);
      const { data } = await requestGetDiscountOfCourse(courseId);
      console.log("data", data);
      dispatch(setDiscountACourse(data));
    } catch (error) {
      console.log("error", error);
      toast.error(error.error.message);
    }
  }
);
export const handleUpdateDiscount = createAsyncThunk(
  "discount/handleUpdateDiscount",
  async (query, { dispatch, getState }) => {
    const { discountId, courseId, values } = query;
    try {
      await requestUpdateDiscount(discountId, values);
      const { data } = await requestGetDiscountOfCourse(courseId);
      console.log("data", data);
      dispatch(setDiscountACourse(data));
    } catch (error) {
      console.log("error", error);
      toast.error(error.error.message);
    }
  }
);
export const handleDeleteDiscount = createAsyncThunk(
  "discount/handleDeleteDiscount",
  async ({ discountId, courseId }, { dispatch, getState }) => {
    try {
      await requestDeleteDiscount(discountId);
      const { data } = await requestGetDiscountOfCourse(courseId);
      console.log("data", data);
      dispatch(setDiscountACourse(data));
    } catch (error) {
      console.log("error", error);
      toast.error(error.error.message);
    }
  }
);
