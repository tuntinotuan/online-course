import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import globalSlice from "./globalSlice";
import authSlice from "./auth/authSlice";
import userSlice from "./user/userSlice";

const reducer = combineReducers({
  global: globalSlice,
  auth: authSlice,
  user: userSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login", "common"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
