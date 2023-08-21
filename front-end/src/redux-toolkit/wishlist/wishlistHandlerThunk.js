import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestAddToWishlist,
  requestCreateWishlist,
  requestGetMyWishlist,
  requestRemoveItemFromWishlist,
} from "./wishlistRequests";
import { setMyWishlist } from "./wishlistSlice";
import { requestGetCourseData } from "../course/courseRequests";
import { setCourseList } from "../course/courseSlice";

export const handleGetMyWishlist = createAsyncThunk(
  "wishlist/handleGetMyWishlist",
  async (wishlistId, ThunkAPI) => {
    let results = [];
    try {
      const response = await requestGetMyWishlist(wishlistId);
      console.log("response", response.data);
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
    try {
      const response = !userData?.favorite?.id
        ? await requestCreateWishlist(userData.id, courseId)
        : await requestAddToWishlist(userData?.favorite?.id, courseId);
      const courseData = await requestGetCourseData();
      const wishList = await requestGetMyWishlist(userData?.favorite?.id);
      dispatch(setCourseList(courseData.data));
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
