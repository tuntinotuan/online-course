import React, { useEffect } from "react";
import SearchControl from "../modules/search/SearchControl";
import SearchBody from "../modules/search/SearchBody";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleSearchCourse } from "../redux-toolkit/course/courseHandlerThunk";
import LoadingSpineQuarter from "../components/loading/LoadingSpineQuarter";
import SearchNotfound from "../modules/search/SearchNotfound";
import { useTranslation } from "react-i18next";

const SearchPage = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const keyword = params.get("keyword");
  const { t } = useTranslation("search");
  const { coursesSearch, courseLoading } = useSelector((state) => state.course);
  useEffect(() => {
    dispatch(handleSearchCourse(keyword));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section className={`page-container my-12 overflow-hidden`}>
      {courseLoading && (
        <div
          className="absolute left-0 flex items-start justify-center w-full bg-white bg-opacity-60 mx-auto z-10"
          style={{ height: document.body.offsetHeight }}
        >
          <LoadingSpineQuarter></LoadingSpineQuarter>
        </div>
      )}
      {coursesSearch?.length > 0 && (
        <>
          <h1 className="text-3xl font-bold mb-4">
            {(coursesSearch && coursesSearch?.length.toLocaleString("en-US")) ||
              0}{" "}
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
