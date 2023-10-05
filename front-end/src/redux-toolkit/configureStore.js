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
import orderSlice from "./order/orderSlice";
import reviewSlice from "./review/reviewSlice";
import purchasedSlice from "./purchased/purchasedSlice";
import learnSlice from "./learn/learnSlice";
import categorySlice from "./category/categorySlice";
import discountSlice from "./discount/discountSlice";

const reducer = combineReducers({
  global: globalSlice,
  auth: authSlice,
  user: userSlice,
  course: courseSlice,
  cart: cartSlice,
  wishlist: wishlistSlice,
  author: authorSlice,
  order: orderSlice,
  purchased: purchasedSlice,
  review: reviewSlice,
  learn: learnSlice,
  category: categorySlice,
  discount: discountSlice,
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
