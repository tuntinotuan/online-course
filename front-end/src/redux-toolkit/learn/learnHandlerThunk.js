import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestGetSingleLearnOnline } from "./learnRequests";

export const handleGetSingleLearnOnline = createAsyncThunk(
  "learn/handleGetSingleLearnOnline",
  async (courseId, ThunkAPI) => {
    try {
      const response = await requestGetSingleLearnOnline(courseId);
      console.log("res", response.data);
      return response.data;
    } catch (error) {
      console.log("error", error);
    }
  }
);
