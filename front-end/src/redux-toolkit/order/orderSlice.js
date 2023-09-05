import { createSlice } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const initialState = {
  sessionStripe: {},
};

const orderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    setSessionStripe: (state, action) => ({
      ...state,
      sessionStripe: action.payload,
    }),
  },
  extraReducers: (builder) => {},
});

const orderPersistConfig = {
  key: "order",
  storage: storage,
  whitelist: ["sessionStripe"],
};

export const { setSessionStripe } = orderSlice.actions;

export default persistReducer(orderPersistConfig, orderSlice.reducer);
