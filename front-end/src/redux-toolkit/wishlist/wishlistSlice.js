import { createSlice } from "@reduxjs/toolkit";
import {
  handleAddToWishlist,
  handleGetMyWishlist,
  handleRemoveItemFromWishlist,
} from "./wishlistHandlerThunk";

const initialState = {
  myWishlist: [],
  loadingHeart: false,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    setMyWishlist: (state, action) => ({
      ...state,
      myWishlist: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(handleGetMyWishlist.fulfilled, (state, action) => {
        state.myWishlist = action.payload;
      })
      .addCase(handleAddToWishlist.fulfilled, (state, action) => {
        state.loadingHeart = false;
      })
      .addCase(handleAddToWishlist.pending, (state, action) => {
        state.loadingHeart = true;
      })
      .addCase(handleAddToWishlist.rejected, (state, action) => {
        state.loadingHeart = false;
      })
      .addCase(handleRemoveItemFromWishlist.fulfilled, (state, action) => {
        state.loadingHeart = false;
      })
      .addCase(handleRemoveItemFromWishlist.pending, (state, action) => {
        state.loadingHeart = true;
      })
      .addCase(handleRemoveItemFromWishlist.rejected, (state, action) => {
        state.loadingHeart = false;
      });
  },
});

export const { setMyWishlist } = wishlistSlice.actions;

export default wishlistSlice.reducer;
