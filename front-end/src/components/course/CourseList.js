import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import CourseCard from "./CourseCard";
import ButtonControlSwiper from "../button/ButtonControlSwiper";
import {
  SwiperProvider,
  useSwiperContext,
} from "../../contexts/swiper-context";
import CourseCardSkeleton from "./CourseCardSkeleton";
import { useSelector } from "react-redux";

const CourseList = ({ data, autoPlay = false, items = 5 }) => {
  return (
    <SwiperProvider>
      <CourseListMain
        data={data}
        autoPlay={autoPlay}
        items={items}
      ></CourseListMain>
    </SwiperProvider>
  );
};

function CourseListMain({ data, autoPlay, items }) {
  const { nodeRef } = useSwiperContext();
  const { loading } = useSelector((state) => state.global);
  return (
    <div className={`relative course-list`} ref={nodeRef}>
      <Swiper
        cssMode={true}
        slidesPerView={items}
        slidesPerGroup={items - 1}
        grabCursor={"true"}
        spaceBetween={15}
        autoplay={autoPlay}
      >
        {loading &&
          Array(5)
            .fill(null)
            .map((item, index) => (
              <SwiperSlide key={index}>
                <CourseCardSkeleton></CourseCardSkeleton>
              </SwiperSlide>
            ))}
        {!loading &&
          data?.map((course) => (
            <SwiperSlide key={course.id}>
              <CourseCard
                id={course.id}
                img={course.overview_image?.url}
                title={course.title}
                subtitle={course.subtitle}
                updatedAt={course.updatedAt}
                instructor={course.user}
                star={course.star}
                reviews={course.reviews}
                originalPrice={course.original_price}
                currentPrice={course?.current_price}
                bestSeller={course.best_seller}
              ></CourseCard>
            </SwiperSlide>
          ))}
        {!loading && data?.length > items && (
          <ButtonControlSwiper sizeButton="w-12 h-12"></ButtonControlSwiper>
        )}
      </Swiper>
    </div>
  );
}

export default CourseList;
