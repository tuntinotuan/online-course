import { createSlice } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { handleGetMyCart } from "./cartHandlerThunk";

const initialState = {
  myCart: [],
  myCartLocal: [],
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
    setMyCartLocal: (state, action) => ({
      ...state,
      myCartLocal: action.payload,
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

const cartPersistConfig = {
  key: "cart",
  storage: storage,
  whitelist: ["myCartLocal"],
};

export const { setMyCart, setMyCartLocal, setLoadingAddCart } =
  cartSlice.actions;

export default persistReducer(cartPersistConfig, cartSlice.reducer);
