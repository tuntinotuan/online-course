import React from "react";
import Image from "../../components/image/Image";
import CoursePrice from "../../components/course/CoursePrice";

const CheckoutItem = ({ urlImage, title, price }) => {
  return (
    <div className="flex items-center gap-2 mb-4">
      <div className="w-9 h-9">
        <Image url={urlImage}></Image>
      </div>
      <h1 className="font-bold truncate">{title}</h1>
      <CoursePrice
        price={price}
        className="text-base font-normal ml-auto"
      ></CoursePrice>
    </div>
  );
};

export default CheckoutItem;
