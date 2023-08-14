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
  const { nodeRef, coords } = useSwiperContext();
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
        {data &&
          data.map((item, index) => (
            <SwiperSlide key={index}>
              <CourseCard
                img={item.img_course}
                title={item.title}
                instructer={item.instructor}
                currentPrice={item.current_price}
                oldPrice={item.original_price}
                bestSeller={item.best_seller}
              ></CourseCard>
            </SwiperSlide>
          ))}
        <ButtonControlSwiper
          sizeButton="w-12 h-12"
          coords={coords}
        ></ButtonControlSwiper>
      </Swiper>
    </div>
  );
}

export default CourseList;
