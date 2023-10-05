import React, { useEffect } from "react";
import { Button } from "../../components/button";
import InstructorCourseList from "../../modules/instructor/course/InstructorCourseList";
import CourseHeading from "../../modules/course/CourseHeading";
import { useDispatch, useSelector } from "react-redux";
import { handleGetMyCourses } from "../../redux-toolkit/course/courseHandlerThunk";
import { Pagination } from "@mui/material";
import { useNavigate, useSearchParams } from "react-router-dom";
import SearchMyAnything from "../../components/search/SearchMyAnything";
import { useTranslation } from "react-i18next";
import DataNotFound from "../../components/notfound/DataNotFound";
import LoadingSpinQuarter from "../../components/loading/LoadingSpinQuarter";

const InstructorCoursePage = () => {
  const navigate = useNavigate();
  const [param] = useSearchParams();
  const page = param.get("page");
  const search = param.get("search");
  const [searchParams, setSearchParams] = useSearchParams();
  const { t } = useTranslation("search");
  const { myCourseLoading, myCoursePagination } = useSelector(
    (state) => state.course
  );
  const { pageCount } = myCoursePagination;
  const handleChangePage = (event, value) => {
    searchParams.set("page", value);
    setSearchParams(searchParams);
  };
  const dispatch = useDispatch();
  const { myCourses } = useSelector((state) => state.course);
  useEffect(() => {
    dispatch(handleGetMyCourses({ page: page || 1, search }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, search]);
  const handleClearFilters = () => {
    // searchParams.delete("search");
    // setSearchParams(searchParams);
    navigate("/instructor/courses");
  };
  return (
    <>
      {myCourseLoading && (
        <LoadingSpinQuarter
          size={50}
          borderSize="border-[8px]"
        ></LoadingSpinQuarter>
      )}
      {!myCourseLoading && myCourses !== null ? (
        <div className="flex flex-col items-center py-6 px-12">
          <CourseHeading className="text-3xl mr-auto">Courses</CourseHeading>
          <div className="flex items-center justify-between w-full mb-6">
            <div className="flex items-center gap-5">
              <SearchMyAnything size={45}></SearchMyAnything>
              {search && (
                <span
                  className="text-base font-bold cursor-pointer"
                  onClick={handleClearFilters}
                >
                  {t("clear filters")}
                </span>
              )}
            </div>
            <Button
              className="text-base font-bold bg-purpleTextA4 text-white py-3"
              borderNone
              to="/course/create/1"
            >
              New course
            </Button>
          </div>
          {myCourses.length > 0 ? (
            <InstructorCourseList />
          ) : (
            <DataNotFound></DataNotFound>
          )}
          {pageCount > 1 && (
            <Pagination
              page={Number(page) || 1}
              count={pageCount}
              color="secondary"
              className="mt-5"
              onChange={handleChangePage}
            />
          )}
        </div>
      ) : (
        !myCourseLoading && (
          <div className="flex items-center justify-between w-full border border-gray-300 shadow-md p-10 mt-12">
            <h2 className="text-base">Jump Into Course Creation</h2>
            <Button
              className="w-[300px] bg-purpleTextA4 text-base text-white font-bold py-3"
              borderNone
              to="/course/create/1"
            >
              Create Your Course
            </Button>
          </div>
        )
      )}
    </>
  );
};

export default InstructorCoursePage;
