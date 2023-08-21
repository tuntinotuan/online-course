import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestAddToCart,
  requestCreateCart,
  requestGetMyCart,
  requestRemoveItemFromCart,
} from "./cartRequests";
import { setLoadingAddCart, setMyCart } from "./cartSlice";
import { requestGetCourseData } from "../course/courseRequests";
import { setCourseList } from "../course/courseSlice";

export const handleGetMyCart = createAsyncThunk(
  "cart/handleGetMyCart",
  async (cartId, ThunkAPI) => {
    let results = [];
    try {
      const response = await requestGetMyCart(cartId);
      console.log("response", response.data);
      results = response.data;
    } catch (error) {
      console.log(error);
    }
    return results;
  }
);
export const handleAddToCart = createAsyncThunk(
  "cart/handleAddToCart",
  async (courseId, { getState, dispatch }) => {
    const state = getState();
    const { userData } = state.user;
    dispatch(setLoadingAddCart(true));
    try {
      const response = !userData?.cart?.id
        ? await requestCreateCart(userData.id, courseId)
        : await requestAddToCart(userData?.cart?.id, courseId);
      console.log("response", response);
      const courseData = await requestGetCourseData();
      const cartList = await requestGetMyCart(userData?.cart?.id);
      dispatch(setCourseList(courseData.data));
      dispatch(setMyCart(cartList.data));
      dispatch(setLoadingAddCart(false));
    } catch (error) {
      console.log(error);
      dispatch(setLoadingAddCart(false));
    }
  }
);
export const handleRemoveItemFromCart = createAsyncThunk(
  "cart/handleRemoveItemFromCart",
  async (courseId, { getState, dispatch }) => {
    let results = [];
    const state = getState();
    const { userData } = state.user;
    try {
      const response = await requestRemoveItemFromCart(
        userData?.cart?.id,
        courseId
      );
      console.log("response", response);
      const cartList = await requestGetMyCart(userData?.cart?.id);
      dispatch(setMyCart(cartList.data));
    } catch (error) {
      console.log(error);
    }
    return results;
  }
);
