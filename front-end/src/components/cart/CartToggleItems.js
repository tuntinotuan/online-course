import React from "react";
import Image from "../image/Image";
import CoursePrice from "../course/CoursePrice";
import { strapiPathBE } from "../../utils/constants";
import { Link } from "react-router-dom";

const CartToggleItems = ({
  id,
  image,
  title,
  instructor,
  originalPrice,
  currentPrice,
  children,
  lineClamp = "line-clamp-2",
  onClick = () => {},
}) => {
  return (
    <div className="border border-transparent border-b-gray-200 p-3">
      <Link
        to={`/course/${id}`}
        className="grid grid-cols-10"
        onClick={onClick}
      >
        <div className="col-span-3 w-[65px] h-[65px]">
          <Image
            url={`${strapiPathBE}${image}` || "empty-shopping-cart-v2.jpg"}
          ></Image>
        </div>
        <div className="col-span-7">
          <h2 className={`font-bold leading-4 ${lineClamp}`}>
            {title || "The Complete 2023 Web Development Bootcamp Bootcamp"}
          </h2>
          {instructor && (
            <p className="text-xs max-w-[200px] text-grayA6 truncate">
              {instructor ||
                "Dr. Jason Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi aspernatur illum sed eligendi architecto inventore quaerat quos dolorem numquam nostrum eveniet asperiores quis quibusdam dolor veritatis sapiente sit, maxime mollitia?"}
            </p>
          )}
          {(currentPrice || originalPrice) && (
            <div className="flex gap-2">
              <CoursePrice
                price={
                  currentPrice?.toLocaleString("en-US") ||
                  originalPrice.toLocaleString("en-US")
                }
              ></CoursePrice>
              {currentPrice && (
                <CoursePrice
                  price={originalPrice?.toLocaleString("en-US") || "222,222"}
                  className="text-xs text-grayA6 !font-normal line-through"
                ></CoursePrice>
              )}
            </div>
          )}
        </div>
      </Link>
      {children}
    </div>
  );
};

export default CartToggleItems;
