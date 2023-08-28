import { createAsyncThunk } from "@reduxjs/toolkit";
import { requestGetSingleAuthor } from "./authorRequests";

export const handleGetSingleAuthor = createAsyncThunk(
  "author/handleGetSingleAuthor",
  async (authorId, ThunkAPI) => {
    let results = [];
    try {
      const response = await requestGetSingleAuthor(authorId);
      console.log("response", response);
      results = response;
    } catch (error) {
      console.log(error);
    }
    return results;
  }
);
