import React, { useEffect } from "react";
import { useLocation, useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleGetUserData } from "./redux-toolkit/user/userHandlerThunk";
import PopupSignUp from "./components/popup/PopupSignUp";
import PopupSignIn from "./components/popup/PopupSignIn";
import PopupForgotPassword from "./components/popup/PopupForgotPassword";
import { handleGetMyWishlist } from "./redux-toolkit/wishlist/wishlistHandlerThunk";
import { setWishlistSearch } from "./redux-toolkit/wishlist/wishlistSlice";
import { handleGetMyPurchasedCourses } from "./redux-toolkit/purchased/purchasedHandlerThunk";
import PopupChooseLanguage from "./components/popup/PopupChooseLanguage";
import { setInfoForReLogin } from "./redux-toolkit/auth/authSlice";
import { strapiPathBE } from "./utils/constants";
import { handleGetMyCart } from "./redux-toolkit/cart/cartHandlerThunk";
import useDarkMode from "./hooks/useDarkMode";
import { setToggleDarkMode } from "./redux-toolkit/globalSlice";
import AllRoutes from "./routes/AllRoutes";
import TokenUnauthentication from "./token-authentication/TokenUnauthentication";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const [param] = useSearchParams();
  const page = param.get("page");
  const { currentUserId } = useSelector((state) => state.auth);
  const { userData } = useSelector((state) => state.user);
  const { purchased_course, favorite, cart } = userData;
  const { myWishlist } = useSelector((state) => state.wishlist);
  const { courses } = myWishlist;
  useEffect(() => {
    if (currentUserId) {
      dispatch(handleGetUserData(currentUserId));
    }
  }, [dispatch, currentUserId]);
  useEffect(() => {
    const purchasedId = purchased_course?.id;
    dispatch(handleGetMyPurchasedCourses({ purchasedId, page }));
  }, [purchased_course, page, dispatch]);
  useEffect(() => {
    dispatch(handleGetMyWishlist(favorite?.id));
  }, [favorite, dispatch]);
  useEffect(() => {
    dispatch(handleGetMyCart(cart?.id));
  }, [cart, dispatch]);
  useEffect(() => {
    const { username, email, url_google_avatar, avatar, provider } = userData;
    const newValues = {
      username,
      email,
      avatar: (avatar && `${strapiPathBE}${avatar?.url}`) || url_google_avatar,
      provider,
    };
    userData?.id && dispatch(setInfoForReLogin(newValues));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userData, dispatch]);
  useEffect(() => {
    if (location.pathname !== "/my-course/wishlist") {
      dispatch(setWishlistSearch(null));
    }
  }, [courses, location, dispatch]);
  const [darkModeHook] = useDarkMode();
  useEffect(() => {
    dispatch(setToggleDarkMode(darkModeHook));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App text-primaryBlack dark:bg-darkMain dark:text-white">
      <AllRoutes></AllRoutes>
      <TokenUnauthentication>
        <PopupSignUp></PopupSignUp>
        <PopupSignIn></PopupSignIn>
        <PopupForgotPassword></PopupForgotPassword>
      </TokenUnauthentication>
      <PopupChooseLanguage></PopupChooseLanguage>
    </div>
  );
}

export default App;
