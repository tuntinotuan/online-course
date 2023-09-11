import React from "react";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import InstructorCard from "./InstructorCard";
import { ButtonControlSwiper } from "../button";
import {
  SwiperProvider,
  useSwiperContext,
} from "../../contexts/swiper-context";

const InstructorList = ({ data, items = 4 }) => {
  return (
    <SwiperProvider>
      <InstructorListMain data={data} items={items}></InstructorListMain>
    </SwiperProvider>
  );
};

function InstructorListMain({ data, items }) {
  const { nodeRef } = useSwiperContext();
  return (
    <div className="" ref={nodeRef}>
      <Swiper
        slidesPerView={items}
        slidesPerGroup={items - 1}
        grabCursor={"true"}
        spaceBetween={15}
      >
        {data?.map((items) => (
          <SwiperSlide>
            <InstructorCard data={items}></InstructorCard>
          </SwiperSlide>
        ))}
        {data.length > items && (
          <ButtonControlSwiper sizeButton="w-12 h-12"></ButtonControlSwiper>
        )}
      </Swiper>
    </div>
  );
}

export default InstructorList;
