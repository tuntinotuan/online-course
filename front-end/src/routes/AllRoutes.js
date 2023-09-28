import React from "react";
import SearchPage from "../pages/SearchPage";
import PageNotFound from "../components/notfound/PageNotFound";
import ResetPasswordPage from "../pages/ResetPasswordPage";
import ForgotPasswordPage from "../pages/ForgotPasswordPage";
import SignUpPage from "../pages/SignUpPage";
import SignInPage from "../pages/SignInPage";
import UserDetailsPage from "../pages/UserDetailsPage";
import UserEditPhoto from "../modules/user/UserEditPhoto";
import UserEditAccount from "../modules/user/UserEditAccount";
import UserEditProfile from "../modules/user/UserEditProfile";
import UserPage from "../pages/UserPage";
import MyWishlist from "../modules/my-course/MyWishlist";
import MyLists from "../modules/my-course/MyLists";
import MyAllCourses from "../modules/my-course/MyAllCourses";
import TopicPage from "../pages/TopicPage";
import CourseDetailsPage from "../pages/CourseDetailsPage";
import CartPage from "../pages/CartPage";
import MyCoursesPage from "../pages/MyCoursesPage";
import HomeSelectionItem from "../modules/home/HomeSelectionItem";
import Main from "../components/layout/Main";
import HomePage from "../pages/HomePage";
import HomeCourseSelection from "../modules/home/HomeCourseSelection";
import TokenUnauthentication from "../token-authentication/TokenUnauthentication";
import { Route, Routes } from "react-router-dom";
import LearnOnlinePage from "../pages/LearnOnlinePage";
import TokenAuthentication from "../token-authentication/TokenAuthentication";
import CheckoutPage from "../pages/CheckoutPage";
import PrivateRoute from "./PrivateRoute";
import AdminLayout from "../modules/admin/AdminLayout";
import AdminCoursePage from "../pages/admin/AdminCoursePage";
import CourseUpdate from "../modules/admin/course/CourseUpdate";
import CourseRecycleBin from "../modules/admin/course/CourseRecycleBin";
import InstructorLayout from "../modules/instructor/InstructorLayout";
import InstructorCoursePage from "../pages/instructor/InstructorCoursePage";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Main></Main>}>
        <Route path="/" element={<HomePage></HomePage>}>
          <Route path="/" element={<HomeCourseSelection></HomeCourseSelection>}>
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
          path="/courses/search"
          element={<SearchPage></SearchPage>}
        ></Route>
        <Route
          path="/topic/:topicName"
          element={<TopicPage></TopicPage>}
        ></Route>
        <Route path="/cart" element={<CartPage></CartPage>}></Route>
        <Route
          path="/user/:authorId"
          element={<UserDetailsPage></UserDetailsPage>}
        ></Route>
        {/* ---User Page Nested Routes--- */}
        <Route
          path="user"
          element={
            <PrivateRoute isRole="USER">
              <UserPage></UserPage>
            </PrivateRoute>
          }
        >
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
        {/* ---My Courses Nested Routes--- */}
        <Route
          path="my-course"
          element={
            <PrivateRoute isRole="USER">
              <MyCoursesPage></MyCoursesPage>
            </PrivateRoute>
          }
        >
          <Route
            path="learning"
            element={<MyAllCourses></MyAllCourses>}
          ></Route>
          <Route path="lists" element={<MyLists></MyLists>}></Route>
          <Route path="wishlist" element={<MyWishlist></MyWishlist>}></Route>
          <Route path="archived" element={<>Anything</>}></Route>
          <Route path="learning-tools" element={<>Anything</>}></Route>
        </Route>
        {/* Auth routes */}
        <Route
          path="/log-in"
          element={
            <TokenUnauthentication navigate="/">
              <SignInPage></SignInPage>
            </TokenUnauthentication>
          }
        ></Route>
        <Route
          path="/log-in/:authProvider"
          element={
            <TokenUnauthentication navigate="/">
              <SignInPage></SignInPage>
            </TokenUnauthentication>
          }
        ></Route>
        <Route
          path="/sign-up"
          element={
            <TokenUnauthentication navigate="/">
              <SignUpPage></SignUpPage>
            </TokenUnauthentication>
          }
        ></Route>
        <Route
          path="/forgot-password"
          element={
            <TokenUnauthentication navigate="/">
              <ForgotPasswordPage></ForgotPasswordPage>
            </TokenUnauthentication>
          }
        ></Route>
        <Route
          path="/reset-password"
          element={
            <TokenUnauthentication navigate="/">
              <ResetPasswordPage></ResetPasswordPage>
            </TokenUnauthentication>
          }
        ></Route>
        <Route path="*" element={<PageNotFound></PageNotFound>}></Route>
      </Route>
      {/* ---Checkout Routes--- */}
      <Route
        path="/cart/checkout"
        element={
          <TokenAuthentication>
            <PrivateRoute isRole="USER">
              <CheckoutPage></CheckoutPage>
            </PrivateRoute>
          </TokenAuthentication>
        }
      ></Route>
      {/* ---Learn Online Routes--- */}
      <Route
        path="/course-dashboard-redirect/:courseId"
        element={
          <TokenAuthentication>
            <LearnOnlinePage></LearnOnlinePage>
          </TokenAuthentication>
        }
      ></Route>
      {/* Admin Routes */}
      <Route path="/admin" element={<AdminLayout></AdminLayout>}>
        <Route
          path="dashboard"
          element={
            <PrivateRoute isRole="ADMIN">
              <p>Here admin dashboard</p>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="user"
          element={
            <PrivateRoute isRole="ADMIN">
              <p>Here user dashboard</p>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="course"
          element={
            <PrivateRoute isRole="MOD">
              <AdminCoursePage></AdminCoursePage>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="course-update/:courseId"
          element={
            <PrivateRoute isRole="MOD">
              <CourseUpdate></CourseUpdate>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="course/trash"
          element={
            <PrivateRoute isRole="MOD">
              <CourseRecycleBin></CourseRecycleBin>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="category"
          element={
            <PrivateRoute isRole="ADMIN">
              <p>Here category dashboard</p>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="cart"
          element={
            <PrivateRoute isRole="ADMIN">
              <p>Here cart dashboard</p>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="wishlist"
          element={
            <PrivateRoute isRole="ADMIN">
              <p>Here wishlist dashboard</p>
            </PrivateRoute>
          }
        ></Route>
        <Route
          path="review"
          element={
            <PrivateRoute isRole="ADMIN">
              <p>Here review dashboard</p>
            </PrivateRoute>
          }
        ></Route>
      </Route>
      {/* Instructor Routes */}
      <Route path="/instructor" element={<InstructorLayout></InstructorLayout>}>
        <Route
          path="courses"
          element={<InstructorCoursePage></InstructorCoursePage>}
        ></Route>
        <Route
          path="communication"
          element={<>This is instructor COMMUNICATION page</>}
        ></Route>
        <Route
          path="performance"
          element={<>This is instructor PERFORMANCE page</>}
        ></Route>
        <Route
          path="tools"
          element={<>This is instructor TOOLS page</>}
        ></Route>
        <Route
          path="help"
          element={<>This is instructor RESOURCES page</>}
        ></Route>
      </Route>
    </Routes>
  );
};

export default AllRoutes;
