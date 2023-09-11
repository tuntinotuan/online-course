import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestAddToCart,
  requestCreateCart,
  requestGetMyCart,
  requestRemoveItemFromCart,
  requestUpdateMyCartLocalToMyCart,
} from "./cartRequests";
import { setLoadingAddCart, setMyCart, setMyCartLocal } from "./cartSlice";
import {
  requestGetTopicOfCourse,
  requestGetSingleCourse,
} from "../course/courseRequests";
import { setCourseList } from "../course/courseSlice";
import { requestGetUserData } from "../user/userRequests";
import { setUserData } from "../user/userSlice";

export const handleGetMyCart = createAsyncThunk(
  "cart/handleGetMyCart",
  async (cartId, { getState, dispatch }) => {
    let results = [];
    let getFullIdFromCartLocal = [];
    const state = getState();
    const { jwt } = state.auth;
    const { myCartLocal } = state.cart;
    const { userData } = state.user;
    try {
      if (myCartLocal.length > 0) {
        await myCartLocal.map((item) => {
          getFullIdFromCartLocal.push({ id: item.id });
          return getFullIdFromCartLocal;
        });
        await requestUpdateMyCartLocalToMyCart(
          userData?.cart?.id,
          getFullIdFromCartLocal
        );
        if (jwt) {
          dispatch(setMyCartLocal([]));
        }
      }
      const response = await requestGetMyCart(cartId);
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
    const { myCartLocal } = state.cart;
    const { jwt, currentUserId } = state.auth;
    dispatch(setLoadingAddCart(true));
    try {
      // Cart save on localStorage
      if (!jwt) {
        let results = [];
        const checkId = await myCartLocal.some((item) => item.id === courseId);
        if (!checkId) {
          const response = await requestGetSingleCourse(courseId);
          console.log("response", response.data);
          results.push(...myCartLocal, response.data);
          dispatch(setMyCartLocal(results));
        }
      }
      if (jwt) {
        const response = !userData?.cart?.id
          ? await requestCreateCart(userData.id, courseId)
          : await requestAddToCart(userData?.cart?.id, courseId);
        console.log("response", response);
        const newUseData = await requestGetUserData(currentUserId);
        dispatch(setUserData(newUseData));
        const courseData = await requestGetTopicOfCourse();
        dispatch(setCourseList(courseData.data));
        const cartList = await requestGetMyCart(userData?.cart?.id);
        dispatch(setMyCart(cartList.data));
      }
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
    const { jwt } = state.auth;
    const { myCartLocal } = state.cart;
    try {
      if (!jwt) {
        const results = await myCartLocal.filter(
          (item) => item.id !== courseId
        );
        dispatch(setMyCartLocal(results));
      }
      if (jwt) {
        const response = await requestRemoveItemFromCart(
          userData?.cart?.id,
          courseId
        );
        console.log("response", response);
        const cartList = await requestGetMyCart(userData?.cart?.id);
        dispatch(setMyCart(cartList.data));
      }
    } catch (error) {
      console.log(error);
    }
    return results;
  }
);
