import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestAddToWishlist,
  requestCreateWishlist,
  requestGetMyWishlist,
  requestRemoveItemFromWishlist,
  requestSearchWishlist,
} from "./wishlistRequests";
import { setMyWishlist } from "./wishlistSlice";
import { requestGetTopicOfCourse } from "../course/courseRequests";
import { setCourseList } from "../course/courseSlice";
import { requestAddToCart, requestGetMyCart } from "../cart/cartRequests";
import { setMyCart } from "../cart/cartSlice";
import { requestGetUserData } from "../user/userRequests";
import { setUserData } from "../user/userSlice";

export const handleGetMyWishlist = createAsyncThunk(
  "wishlist/handleGetMyWishlist",
  async (wishlistId, ThunkAPI) => {
    let results = [];
    try {
      const response = await requestGetMyWishlist(wishlistId);
      results = response.data;
    } catch (error) {
      console.log(error);
    }
    return results;
  }
);
export const handleAddToWishlist = createAsyncThunk(
  "wishlist/handleAddToWishlist",
  async (courseId, { getState, dispatch }) => {
    let results = [];
    const state = getState();
    const { userData } = state.user;
    const { currentUserId } = state.auth;
    try {
      const response = !userData?.favorite?.id
        ? await requestCreateWishlist(userData.id, courseId)
        : await requestAddToWishlist(userData?.favorite?.id, courseId);
      const newUseData = await requestGetUserData(currentUserId);
      dispatch(setUserData(newUseData));
      const courseData = await requestGetTopicOfCourse();
      dispatch(setCourseList(courseData.data));
      const wishList = await requestGetMyWishlist(userData?.favorite?.id);
      dispatch(setMyWishlist(wishList.data));
      console.log("response", response);
    } catch (error) {
      console.log(error);
    }
    return results;
  }
);
export const handleRemoveItemFromWishlist = createAsyncThunk(
  "wishlist/handleRemoveItemFromWishlist",
  async (courseId, { getState, dispatch }) => {
    const state = getState();
    const { userData } = state.user;
    try {
      const response = await requestRemoveItemFromWishlist(
        userData?.favorite?.id,
        courseId
      );
      const wishListList = await requestGetMyWishlist(userData?.favorite?.id);
      dispatch(setMyWishlist(wishListList.data));
      console.log("response", response);
    } catch (error) {
      console.log(error);
    }
  }
);
export const handleMoveItemToCart = createAsyncThunk(
  "wishlist/handleMoveItemToCart",
  async (courseId, { getState, dispatch }) => {
    const state = getState();
    const { userData } = state.user;
    try {
      await requestRemoveItemFromWishlist(userData?.favorite?.id, courseId);
      await requestAddToCart(userData?.cart?.id, courseId);
      const wishListList = await requestGetMyWishlist(userData?.favorite?.id);
      const cartList = await requestGetMyCart(userData?.cart?.id);
      dispatch(setMyWishlist(wishListList.data));
      dispatch(setMyCart(cartList.data));
    } catch (error) {
      console.log(error);
    }
  }
);

export const handleSearchWishlist = createAsyncThunk(
  "wishlist/handleSearchWishlist",
  async (keyword, { getState }) => {
    const state = getState();
    const { userData } = state.user;
    const response = await requestSearchWishlist(
      userData?.favorite?.id,
      keyword
    );
    console.log("response", response);
    return response.data;
  }
);
