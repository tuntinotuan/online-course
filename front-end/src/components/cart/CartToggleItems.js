import React from "react";
import Image from "../image/Image";
import CoursePrice from "../course/CoursePrice";

const CartToggleItems = () => {
  return (
    <div className="flex items-start justify-between gap-2 border border-transparent border-b-gray-200 p-4 cursor-pointer">
      <div className="h-[70px] w-[70px]">
        <Image url="empty-shopping-cart-v2.jpg"></Image>
      </div>
      <div className="flex-1">
        <h2 className="font-bold line-clamp-2">
          The Complete 2023 Web Development Bootcamp Bootcamp
        </h2>
        <p className="max-w-[200px] text-grayA6 truncate">
          Dr. Jason Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Excepturi aspernatur illum sed eligendi architecto inventore quaerat
          quos dolorem numquam nostrum eveniet asperiores quis quibusdam dolor
          veritatis sapiente sit, maxime mollitia?
        </p>
        {/* <p className="flex items-center font-bold">{currency}222,222</p> */}
        <CoursePrice price="222,222"></CoursePrice>
      </div>
    </div>
  );
};

export default CartToggleItems;
