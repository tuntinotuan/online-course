import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import {
  handlePaymentWithCheckout,
  handlePaymentWithElement,
} from "./orderHandlerThunk";

const initialState = {
  sessionStripe: {},
  orderLoading: false,
  cardNumber: null,
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setSessionStripe: (state, action) => ({
      ...state,
      sessionStripe: action.payload,
    }),
    setCardNumber: (state, action) => ({
      ...state,
      cardNumber: action.payload,
    }),
  },
  extraReducers: (builder) => {
    builder
      .addCase(handlePaymentWithCheckout.fulfilled, (state, action) => {
        state.orderLoading = false;
      })
      .addCase(handlePaymentWithCheckout.pending, (state, action) => {
        state.orderLoading = true;
      })
      .addCase(handlePaymentWithCheckout.rejected, (state, action) => {
        state.orderLoading = false;
      });
    builder
      .addCase(handlePaymentWithElement.fulfilled, (state, action) => {
        state.orderLoading = false;
      })
      .addCase(handlePaymentWithElement.pending, (state, action) => {
        state.orderLoading = true;
      })
      .addCase(handlePaymentWithElement.rejected, (state, action) => {
        state.orderLoading = false;
      });
  },
});

const orderPersistConfig = {
  key: "order",
  storage: storage,
  whitelist: ["sessionStripe", "cardNumber"],
};

export const { setSessionStripe, setCardNumber } = orderSlice.actions;

export default persistReducer(orderPersistConfig, orderSlice.reducer);
