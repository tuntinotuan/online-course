import React from "react";
import { CourseCard } from "../../components/course";
import { dataCourses } from "../../data/dataConfig";
import SearchWishlist from "../../components/search/SearchWishlist";

const MyWishlist = () => {
  return (
    <div>
      <div className="w-full flex items-center justify-end">
        <SearchWishlist></SearchWishlist>
      </div>
      <div className="grid grid-cols-4 gap-4">
        {dataCourses.map((item) => (
          <CourseCard
            img={item.img_course}
            title={item.title}
            instructer={item.instructor}
            currentPrice={item.current_price}
            oldPrice={item.original_price}
            bestSeller={item.best_seller}
            blockTooltip
          ></CourseCard>
        ))}
      </div>
    </div>
  );
};

export default MyWishlist;
