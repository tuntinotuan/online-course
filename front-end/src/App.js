import React from "react";
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

function App() {
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
            path="/course/:id"
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
          <Route path="/log-in" element={<SignInPage></SignInPage>}></Route>
          <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
          <Route
            path="/forgot-password"
            element={<ForgotPasswordPage></ForgotPasswordPage>}
          ></Route>
          <Route path="*" element={<>Not Found</>}></Route>
        </Route>
        <Route
          path="/cart/checkout"
          element={<CheckoutPage></CheckoutPage>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
