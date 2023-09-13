import React, { useRef } from "react";
import { Button } from "../button";
import CoursePrice from "../course/CoursePrice";
import CartToggleItems from "./CartToggleItems";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import {
  totalCourseOriginnalPrice,
  totalCoursePrice,
} from "../../utils/processing-number";
import { useTranslation } from "react-i18next";

const CartToggleNoEmpty = ({ onClick = () => {} }) => {
  const nodeRef = useRef();
  const { pathname } = useLocation();
  const { myCart, myCartLocal } = useSelector((state) => state.cart);
  const { courses } = myCart;
  const { t } = useTranslation();
  const totalPrice = totalCoursePrice(courses || myCartLocal).toLocaleString(
    "en-US"
  );
  const totalOriginal = totalCourseOriginnalPrice(
    courses || myCartLocal
  ).toLocaleString("en-US");
  return (
    <div className="w-full">
      <div className="max-h-[420px] overflow-y-auto" ref={nodeRef}>
        {(courses || myCartLocal)?.map((items) => (
          <CartToggleItems
            id={items.id}
            image={items?.overview_image?.url}
            title={items.title}
            subtitle={items.subtitle}
            instructor={items?.user?.username}
            originalPrice={items.original_price}
            currentPrice={items.current_price}
            onClick={onClick}
            key={items.id}
          ></CartToggleItems>
        ))}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 text-xl font-bold">
          {t("total")}:<CoursePrice price={totalPrice}></CoursePrice>
          {totalOriginal > totalPrice && (
            <CoursePrice
              price={totalOriginal}
              className="text-base text-grayA6 font-normal line-through"
            ></CoursePrice>
          )}
        </div>
        {pathname !== "/cart" && (
          <Button
            className="bg-primaryBlack text-white font-bold py-4 mt-2"
            borderNone
            full
            to="cart"
            onClick={onClick}
          >
            {t("go to cart")}
          </Button>
        )}
      </div>
    </div>
  );
};

export default CartToggleNoEmpty;
