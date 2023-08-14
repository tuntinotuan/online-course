import React from "react";
import CourseSumary from "../../components/course/CourseSumary";
import CourseStar from "../../components/course/CourseStar";
import CoursePrice from "../../components/course/CoursePrice";
import { ButtonStatusTag } from "../../components/button";
import Image from "../../components/image/Image";

const CartItems = () => {
  return (
    <div className="flex items-start border border-transparent border-t-gray-200 py-4">
      <div className="w-[120px]">
        <Image url="empty-shopping-cart-v2.jpg"></Image>
      </div>
      <div className="flex flex-col gap-2 mx-4">
        <h1 className="font-bold text-base">
          The Complete 2023 Web Development Bootcamp
        </h1>
        <h2 className="text-grayA6 text-xs">By Dr. Jason</h2>
        <div className="flex items-center gap-2">
          <ButtonStatusTag className="bg-tagYellow">Bestseller</ButtonStatusTag>
          <ButtonStatusTag className="bg-tagSky">
            Updated Recently
          </ButtonStatusTag>
          <CourseStar></CourseStar>
        </div>
        <CourseSumary></CourseSumary>
      </div>
      <div className="flex flex-col items-end gap-2 mr-10">
        <button className="text-purpleText56">Remove</button>
        <button className="text-purpleText56">Save for Later</button>
      </div>
      <CoursePrice
        className="text-purpleTextA4 text-lg"
        price="2,299,000"
        tag
      ></CoursePrice>
    </div>
  );
};

export default CartItems;
