import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  requestFindPurchasedCourses,
  requestGetMyPurchasedCourses,
} from "./purchasedRequests";
import {
  setLoadingPurchasedCourses,
  setPurchasedPagination,
} from "./purchasedSlice";
import { requestGetMyCourses } from "../course/courseRequests";
import { getIdPurchasedFromMyCourses } from "../../utils/processing-array";

export const handleGetMyPurchasedCourses = createAsyncThunk(
  "purchased/handleGetMyPurchasedCourses",
  async ({ purchasedId, page }, { getState, dispatch }) => {
    let results = [];
    const state = getState();
    const { jwt } = state.auth;
    dispatch(setLoadingPurchasedCourses(true));
    try {
      if (jwt) {
        const response = await requestGetMyPurchasedCourses(purchasedId, page);
        results = response.data;
        dispatch(setPurchasedPagination(response.meta.pagination));
        dispatch(setLoadingPurchasedCourses(false));
      }
    } catch (error) {
      console.log(error);
      dispatch(setLoadingPurchasedCourses(false));
    }
    return results;
  }
);
export const handleGetStudentPurchasedCourses = createAsyncThunk(
  "purchased/handleGetStudentPurchasedCourses",
  async (query, { getState, dispatch }) => {
    const { filterByCourse } = query;
    const state = getState();
    const { currentUserId } = state.auth;
    // let arrId = [];
    try {
      const resMyCourses = await requestGetMyCourses(currentUserId);
      // await resMyCourses.data?.forEach((course) => {
      //   course.purchased_courses.forEach((purchased) => {
      //     arrId.push(purchased.id);
      //   });
      // });
      const newData =
        filterByCourse &&
        resMyCourses.data.filter((item) => item.id === Number(filterByCourse));
      console.log("newData", newData);
      const arrId = await getIdPurchasedFromMyCourses(
        newData || resMyCourses.data
      );
      console.log("arrId", arrId);
      const response = await requestFindPurchasedCourses(arrId);
      console.log("requestFindPurchasedCourses", response);
      return response.data;
    } catch (error) {
      console.log("error,", error);
    }
  }
);
