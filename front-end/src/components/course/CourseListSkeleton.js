import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CourseCardSkeleton from "./CourseCardSkeleton";

const CourseListSkeleton = ({ items = 5 }) => {
  return (
    <div className={`relative course-list`}>
      <Swiper
        cssMode={true}
        slidesPerView={items}
        grabCursor={"true"}
        spaceBetween={15}
      >
        {Array(5)
          .fill(null)
          .map((item, index) => (
            <SwiperSlide key={index}>
              <CourseCardSkeleton></CourseCardSkeleton>
            </SwiperSlide>
          ))}
      </Swiper>
    </div>
  );
};

export default CourseListSkeleton;
