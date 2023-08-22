import React from "react";
import SearchControl from "../modules/search/SearchControl";
import SearchBody from "../modules/search/SearchBody";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import SpecialTextWithDots from "../components/special/SpecialTextWithDots";

const SearchPage = () => {
  const [params] = useSearchParams();
  const keyword = params.get("keyword");
  const { coursesSearch } = useSelector((state) => state.course);
  return (
    <section className={`page-container my-12 overflow-hidden`}>
      {coursesSearch.length > 0 ? (
        <>
          <h1 className="text-3xl font-bold mb-4">
            {(coursesSearch && coursesSearch.length.toLocaleString("en-US")) ||
              0}{" "}
            results for {`“${keyword}”`}
          </h1>
          <SearchControl></SearchControl>
          <SearchBody></SearchBody>
        </>
      ) : (
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
