import React from "react";
import { CourseCard } from "../../components/course";
import SearchWishlist from "../../components/search/SearchWishlist";
import { useSelector } from "react-redux";
import { Button } from "../../components/button";

const MyWishlist = () => {
  const { myWishlist } = useSelector((state) => state.wishlist);
  const { courses } = myWishlist;
  return (
    <div>
      {courses?.length > 0 ? (
        <>
          <div className="w-full flex items-center justify-end">
            <SearchWishlist></SearchWishlist>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {courses?.map((course) => (
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
    </div>
  );
};

export default MyWishlist;
