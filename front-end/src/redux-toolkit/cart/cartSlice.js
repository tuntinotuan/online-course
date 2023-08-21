import { createSlice } from "@reduxjs/toolkit";
import { handleGetMyCart } from "./cartHandlerThunk";

const initialState = {
  myCart: [],
  loadingAdd: false,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setMyCart: (state, action) => ({
      ...state,
      myCart: action.payload,
    }),
    setLoadingAddCart: (state, action) => ({
      ...state,
      loadingAdd: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(handleGetMyCart.fulfilled, (state, action) => {
      state.myCart = action.payload;
    });
  },
});

export const { setMyCart, setLoadingAddCart } = cartSlice.actions;

export default cartSlice.reducer;
