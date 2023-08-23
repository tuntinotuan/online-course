import React from "react";
import Image from "../../components/image/Image";
import CoursePrice from "../../components/course/CoursePrice";
import { strapiPathBE } from "../../utils/constants";

const CheckoutItem = ({ courses }) => {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="w-10 h-10">
        <Image url={`${strapiPathBE}${courses?.overview_image?.url}`}></Image>
      </div>
      <h1 className="font-bold truncate">{courses.title}</h1>
      <div className="ml-auto">
        <CoursePrice
          price={(
            courses.current_price || courses.original_price
          ).toLocaleString("en-US")}
          className="text-base font-normal"
        ></CoursePrice>
        {courses.current_price && (
          <CoursePrice
            price={courses.original_price.toLocaleString("en-US")}
            className="text-base font-normal text-grayA6 line-through"
          ></CoursePrice>
        )}
      </div>
    </div>
  );
};

export default CheckoutItem;
