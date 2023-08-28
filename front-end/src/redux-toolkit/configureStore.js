import {
  configureStore,
  combineReducers,
  getDefaultMiddleware,
} from "@reduxjs/toolkit";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import globalSlice from "./globalSlice";
import authSlice from "./auth/authSlice";
import userSlice from "./user/userSlice";
import courseSlice from "./course/courseSlice";
import cartSlice from "./cart/cartSlice";
import wishlistSlice from "./wishlist/wishlistSlice";
import authorSlice from "./author/authorSlice";

const reducer = combineReducers({
  global: globalSlice,
  auth: authSlice,
  user: userSlice,
  course: courseSlice,
  cart: cartSlice,
  wishlist: wishlistSlice,
  author: authorSlice,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["login", "common"],
};

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  }),
});

export default store;
