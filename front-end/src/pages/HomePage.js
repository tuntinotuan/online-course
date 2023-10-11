import React, { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleGetAllCourses } from "../redux-toolkit/course/courseHandlerThunk";
import CourseLayoutHeading from "../components/layout/CourseLayoutHeading";
import CourseList from "../components/course/CourseList";
import { useTranslation } from "react-i18next";
import CourseListSkeleton from "../components/course/CourseListSkeleton";

const HomePage = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation("home");
  const [page, setPage] = useState(1);
  const { allCourses, allCoursesEnd } = useSelector((state) => state.course);
  const { loading } = useSelector((state) => state.global);
  useEffect(() => {
    if (!allCourses) {
      dispatch(handleGetAllCourses({ page }));
      setPage(page + 1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const handleCallMoreAllCourses = () => {
    dispatch(handleGetAllCourses({ page }));
    setPage(page + 1);
  };
  return (
    <div className="page-container my-20 overflow-hidden">
      <Outlet></Outlet>
      <CourseLayoutHeading title={t("all courses")}>
        {loading && <CourseListSkeleton></CourseListSkeleton>}
        {!loading && allCourses?.length > 0 && (
          <CourseList
            data={allCourses}
            callApi={handleCallMoreAllCourses}
            apiEnd={allCoursesEnd}
          ></CourseList>
        )}
      </CourseLayoutHeading>
    </div>
  );
};

export default HomePage;
