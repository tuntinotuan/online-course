import React, { useEffect } from "react";
import SearchControl from "../modules/search/SearchControl";
import SearchBody from "../modules/search/SearchBody";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import SpecialTextWithDots from "../components/special/SpecialTextWithDots";
import { handleSearchCourse } from "../redux-toolkit/course/courseHandlerThunk";
import LoadingSpineQuarter from "../components/loading/LoadingSpineQuarter";

const SearchPage = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const keyword = params.get("keyword");
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
            results for {`“${keyword}”`}
          </h1>
          <SearchControl></SearchControl>
          <SearchBody></SearchBody>
        </>
      )}
      {!coursesSearch?.length > 0 && (
        <>
          <h1 className="text-2xl font-bold mb-4">
            Sorry, we couldn't find any results for {`“${keyword}”`}
          </h1>
          <SpecialTextWithDots
            title="Try adjusting your search. Here are some ideas:"
            styleTitle="text-xl"
            content={[
              "Make sure all words are spelled correctly",
              "Try different search terms",
              "Try more general search terms",
            ]}
            styleContent="!text-primaryBlack"
            dotSize={5}
          ></SpecialTextWithDots>
        </>
      )}
    </section>
  );
};

export default SearchPage;
