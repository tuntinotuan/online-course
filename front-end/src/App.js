import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Main from "./components/layout/Main";
import CartPage from "./pages/CartPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import HomePage from "./pages/HomePage";
import HomeCourseSelection from "./modules/home/HomeCourseSelection";
import HomeSelectionItem from "./modules/home/HomeSelectionItem";
import CourseDetailsPage from "./pages/CourseDetailsPage";
import MyCoursesPage from "./pages/MyCoursesPage";
import MyAllCourses from "./modules/my-course/MyAllCourses";
import MyLists from "./modules/my-course/MyLists";
import MyWishlist from "./modules/my-course/MyWishlist";
import CheckoutPage from "./pages/CheckoutPage";
import PageNotFound from "./components/notfound/PageNotFound";
import ResetPasswordPage from "./pages/ResetPasswordPage";
import UserPage from "./pages/UserPage";
import UserEditProfile from "./modules/user/UserEditProfile";
import UserEditAccount from "./modules/user/UserEditAccount";
import UserEditPhoto from "./modules/user/UserEditPhoto";
import { useDispatch, useSelector } from "react-redux";
import { handleGetUserData } from "./redux-toolkit/user/userHandlerThunk";
import SearchPage from "./pages/SearchPage";
import PopupSignUp from "./components/popup/PopupSignUp";
import PopupSignIn from "./components/popup/PopupSignIn";
import PopupForgotPassword from "./components/popup/PopupForgotPassword";
import { handleGetMyWishlist } from "./redux-toolkit/wishlist/wishlistHandlerThunk";
import { setWishlistSearch } from "./redux-toolkit/wishlist/wishlistSlice";
import UserDetailsPage from "./pages/UserDetailsPage";
import LearnOnlinePage from "./pages/LearnOnlinePage";
import { handleGetMyPurchasedCourses } from "./redux-toolkit/purchased/purchasedHandlerThunk";
import TopicPage from "./pages/TopicPage";
import PopupChooseLanguage from "./components/popup/PopupChooseLanguage";
import { setInfoForReLogin } from "./redux-toolkit/auth/authSlice";
import { strapiPathBE } from "./utils/constants";
import { handleGetMyCart } from "./redux-toolkit/cart/cartHandlerThunk";
import useDarkMode from "./hooks/useDarkMode";
import { setToggleDarkMode } from "./redux-toolkit/globalSlice";

function App() {
  const dispatch = useDispatch();
  const location = useLocation();
  const { jwt, currentUserId } = useSelector((state) => state.auth);
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
    dispatch(handleGetMyPurchasedCourses(purchased_course?.id));
  }, [purchased_course, dispatch]);
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
  console.log("darkModeHook", darkModeHook);
  useEffect(() => {
    dispatch(setToggleDarkMode(darkModeHook));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Main></Main>}>
          <Route path="/" element={<HomePage></HomePage>}>
            <Route
              path="/"
              element={<HomeCourseSelection></HomeCourseSelection>}
            >
              <Route
                path="/"
                element={<HomeSelectionItem></HomeSelectionItem>}
              ></Route>
              <Route
                path="topics/:topicName"
                element={<HomeSelectionItem></HomeSelectionItem>}
              ></Route>
            </Route>
          </Route>
          <Route
            path="/course/:courseId"
            element={<CourseDetailsPage></CourseDetailsPage>}
          ></Route>
          <Route
            path="/topic/:topicName"
            element={<TopicPage></TopicPage>}
          ></Route>
          <Route path="/cart" element={<CartPage></CartPage>}></Route>
          <Route path="my-course" element={<MyCoursesPage></MyCoursesPage>}>
            <Route
              path="learning"
              element={<MyAllCourses></MyAllCourses>}
            ></Route>
            <Route path="lists" element={<MyLists></MyLists>}></Route>
            <Route path="wishlist" element={<MyWishlist></MyWishlist>}></Route>
            <Route path=" " element={<>Anything</>}></Route>
            <Route path="learning-tools" element={<>Anything</>}></Route>
          </Route>
          <Route path="user" element={<UserPage></UserPage>}>
            <Route
              path="edit-profile"
              element={<UserEditProfile></UserEditProfile>}
            ></Route>
            <Route
              path="edit-account"
              element={<UserEditAccount></UserEditAccount>}
            ></Route>
            <Route
              path="edit-photo"
              element={<UserEditPhoto></UserEditPhoto>}
            ></Route>
          </Route>
          <Route
            path="/user/:authorId"
            element={<UserDetailsPage></UserDetailsPage>}
          ></Route>
          <Route path="/log-in" element={<SignInPage></SignInPage>}></Route>
          <Route
            path="/log-in/:authProvider"
            element={<SignInPage></SignInPage>}
          ></Route>
          <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
          <Route
            path="/forgot-password"
            element={<ForgotPasswordPage></ForgotPasswordPage>}
          ></Route>
          <Route
            path="/reset-password"
            element={<ResetPasswordPage></ResetPasswordPage>}
          ></Route>
          <Route
            path="/courses/search"
            element={<SearchPage></SearchPage>}
          ></Route>
          <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
        </Route>
        {/* Other routes */}
        <Route
          path="/cart/checkout"
          element={<CheckoutPage></CheckoutPage>}
        ></Route>
        <Route
          path="/course-dashboard-redirect/:courseId"
          element={<LearnOnlinePage></LearnOnlinePage>}
        ></Route>
      </Routes>
      {!jwt && (
        <>
          <PopupSignUp></PopupSignUp>
          <PopupSignIn></PopupSignIn>
          <PopupForgotPassword></PopupForgotPassword>
        </>
      )}
      <PopupChooseLanguage></PopupChooseLanguage>
    </div>
  );
}

export default App;
