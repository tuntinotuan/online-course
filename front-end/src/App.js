import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "./components/layout/Main";
import CartPage from "./pages/CartPage";
import SignUpPage from "./pages/SignUpPage";
import SignInPage from "./pages/SignInPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import HomePage from "./pages/HomePage";
import HomeCourseSelection from "./modules/home/HomeCourseSelection";
import HomeSelectionItem from "./modules/home/HomeSelectionItem";
import { dataViewingStudents } from "./data/dataConfig";
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
import { handleGetCourseData } from "./redux-toolkit/course/courseHandlerThunk";
import SearchPage from "./pages/SearchPage";
import PopupSignUp from "./components/popup/PopupSignUp";
import PopupSignIn from "./components/popup/PopupSignIn";
import PopupForgotPassword from "./components/popup/PopupForgotPassword";
import { handleGetMyWishlist } from "./redux-toolkit/wishlist/wishlistHandlerThunk";

function App() {
  const dispatch = useDispatch();
  const { jwt, currentUserId } = useSelector((state) => state.auth);
  const { userData } = useSelector((state) => state.user);
  const { favorite } = userData;
  useEffect(() => {
    if (currentUserId) {
      dispatch(handleGetUserData(currentUserId));
    }
    dispatch(handleGetCourseData());
  }, [dispatch, currentUserId]);
  useEffect(() => {
    dispatch(handleGetMyWishlist(favorite?.id));
  }, [favorite, dispatch]);
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
                path="excel"
                element={
                  <HomeSelectionItem
                    data={dataViewingStudents}
                  ></HomeSelectionItem>
                }
              ></Route>
              <Route
                path="/web-development"
                element={<HomeSelectionItem></HomeSelectionItem>}
              ></Route>
              <Route
                path="javascript"
                element={
                  <HomeSelectionItem
                    data={dataViewingStudents}
                  ></HomeSelectionItem>
                }
              ></Route>
            </Route>
          </Route>
          <Route
            path="/course/:courseId"
            element={<CourseDetailsPage></CourseDetailsPage>}
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
          <Route path="/log-in" element={<SignInPage></SignInPage>}></Route>
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
        <Route
          path="/cart/checkout"
          element={<CheckoutPage></CheckoutPage>}
        ></Route>
      </Routes>
      {!jwt && (
        <>
          <PopupSignUp></PopupSignUp>
          <PopupSignIn></PopupSignIn>
          <PopupForgotPassword></PopupForgotPassword>
        </>
      )}
    </div>
  );
}

export default App;
