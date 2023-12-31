import React, { useEffect } from "react";
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

const CourseList = ({
  data,
  autoPlay = false,
  items = 5,
  callApi = false,
  apiEnd,
  restoreBtn,
}) => {
  return (
    <SwiperProvider>
      <CourseListMain
        data={data}
        autoPlay={autoPlay}
        items={items}
        callApi={callApi}
        apiEnd={apiEnd}
        restoreBtn={restoreBtn}
      ></CourseListMain>
    </SwiperProvider>
  );
};

function CourseListMain({
  data,
  autoPlay,
  items,
  callApi,
  apiEnd,
  restoreBtn,
}) {
  const { nodeRef, setIsEnd, setIsBeginning } = useSwiperContext();
  useEffect(() => {
    setIsBeginning(true);
    setIsEnd(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [restoreBtn]);
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
        {data?.map((course) => (
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
        {data?.length > items - 1 && (
          <ButtonControlSwiper
            sizeButton="w-12 h-12"
            callApi={callApi}
            apiEnd={apiEnd}
          ></ButtonControlSwiper>
        )}
      </Swiper>
    </div>
  );
}

export default CourseList;
