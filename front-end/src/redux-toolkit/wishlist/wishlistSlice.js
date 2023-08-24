import { createSlice } from "@reduxjs/toolkit";
import {
  handleAddToWishlist,
  handleGetMyWishlist,
  handleRemoveItemFromWishlist,
  handleSearchWishlist,
} from "./wishlistHandlerThunk";

const initialState = {
  myWishlist: [],
  wishlistSearch: null,
  loadingHeart: false,
  loadingMyWishlist: false,
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  reducers: {
    setWishlistLoading: (state, action) => ({
      ...state,
      loadingMyWishlist: action.payload,
    }),
    setMyWishlist: (state, action) => ({
      ...state,
      myWishlist: action.payload,
    }),
    setWishlistSearch: (state, action) => ({
      ...state,
      wishlistSearch: action.payload,
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
      })
      .addCase(handleSearchWishlist.fulfilled, (state, action) => {
        state.wishlistSearch = action.payload;
      });
  },
});

export const { setWishlistLoading, setMyWishlist, setWishlistSearch } =
  wishlistSlice.actions;

export default wishlistSlice.reducer;
