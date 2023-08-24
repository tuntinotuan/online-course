import React, { useEffect } from "react";
import { CourseCard } from "../../components/course";
import SearchWishlist from "../../components/search/SearchWishlist";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "../../components/button";
import LoadingSpineQuarter from "../../components/loading/LoadingSpineQuarter";
import { useSearchParams } from "react-router-dom";
import { SpecialTextUnderline } from "../../components/special";
import { setWishlistSearch } from "../../redux-toolkit/wishlist/wishlistSlice";
import { processingSearchArray } from "../../utils/processing-array";
import DataNotFound from "../../components/notfound/DataNotFound";

const MyWishlist = () => {
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const query = params.get("q-wishlist");
  const { myWishlist, wishlistSearch, loadingMyWishlist } = useSelector(
    (state) => state.wishlist
  );
  const { courses } = myWishlist;
  useEffect(() => {
    async function refresh() {
      const newWishlist = await processingSearchArray(courses, query || "");
      dispatch(setWishlistSearch(newWishlist));
    }
    query && refresh();
  }, [query, courses, dispatch]);
  const handleRefreshSearch = () => {
    dispatch(setWishlistSearch(null));
  };
  return (
    <>
      {courses?.length > 0 ? (
        <>
          <div className="w-full flex items-center justify-end">
            {query && (
              <h1 className="text-xl mr-auto">
                {wishlistSearch?.length} search results for:{" "}
                <span className="font-bold">{`“${query}”`}</span>
              </h1>
            )}
            {query && (
              <div onClick={handleRefreshSearch}>
                <SpecialTextUnderline
                  text="Return to all courses"
                  className="text-purpleText56 font-bold mr-4"
                ></SpecialTextUnderline>
              </div>
            )}
            <SearchWishlist></SearchWishlist>
          </div>
          {loadingMyWishlist && <LoadingSpineQuarter></LoadingSpineQuarter>}
          {!loadingMyWishlist && (
            <>
              <div className="grid grid-cols-4 gap-4">
                {(wishlistSearch || courses)?.map((course) => (
                  <CourseCard
                    key={course.id}
                    id={course.id}
                    img={course.overview_image?.url}
                    title={course.title}
                    instructor={course?.user}
                    currentPrice={course.current_price}
                    originalPrice={course.original_price}
                    blockTooltip
                    iconHeart
                  ></CourseCard>
                ))}
              </div>
              {wishlistSearch && !wishlistSearch?.length > 0 && (
                <DataNotFound size={10}></DataNotFound>
              )}
            </>
          )}
        </>
      ) : (
        <div className="w-full h-[200px] flex items-center justify-center">
          <Button
            className="text-white font-bold bg-primaryBlack !mx-auto py-4"
            borderNone
            to="/"
          >
            Browse courses now
          </Button>
        </div>
      )}
    </>
  );
};

export default MyWishlist;
