import React, { useEffect } from "react";
import SearchControl from "../modules/search/SearchControl";
import SearchBody from "../modules/search/SearchBody";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleSearchCourse } from "../redux-toolkit/course/courseHandlerThunk";
import LoadingSpinQuarter from "../components/loading/LoadingSpinQuarter";
import SearchNotfound from "../modules/search/SearchNotfound";
import { useTranslation } from "react-i18next";

const SearchPage = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const keyword = params.get("keyword");
  const sortBy = params.get("sort-by");
  const rating = params.get("ratings");
  const searchPage = params.get("page");
  const { t } = useTranslation("search");
  const { coursesSearch, searchPagination, courseLoading } = useSelector(
    (state) => state.course
  );
  const { total } = searchPagination;
  useEffect(() => {
    dispatch(handleSearchCourse({ keyword, sortBy, rating, searchPage }));
  }, [keyword, sortBy, rating, searchPage, dispatch]);
  useEffect(() => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [searchPage]);
  return (
    <section className={`page-container my-12 overflow-hidden`}>
      {courseLoading && (
        <div
          className="absolute top-0 left-0 flex items-start justify-center w-full bg-white bg-opacity-60 mx-auto py-40 z-10"
          style={{ height: document.body.offsetHeight }}
        >
          <LoadingSpinQuarter></LoadingSpinQuarter>
        </div>
      )}
      {coursesSearch?.length > 0 && (
        <>
          <h1 className="text-3xl font-bold mb-4">
            {(coursesSearch && total?.toLocaleString("en-US")) || 0}{" "}
            {t("results for")} {`“${keyword}”`}
          </h1>
          <SearchControl></SearchControl>
          <SearchBody></SearchBody>
        </>
      )}
      {!coursesSearch?.length > 0 && (
        <SearchNotfound keyword={keyword}></SearchNotfound>
      )}
    </section>
  );
};

export default SearchPage;
