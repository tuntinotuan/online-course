import React, { useRef } from "react";
import { Button } from "../button";
import CoursePrice from "../course/CoursePrice";
import CartToggleItems from "./CartToggleItems";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { totalCoursePrice } from "../../utils/processing-number";

const CartToggleNoEmpty = ({ onClick = () => {} }) => {
  const nodeRef = useRef();
  const { pathname } = useLocation();
  const { myCart } = useSelector((state) => state.cart);
  const { courses } = myCart;
  return (
    <div className="w-full">
      <div className="max-h-[420px] overflow-y-auto" ref={nodeRef}>
        {courses &&
          courses.map((items) => (
            <CartToggleItems
              id={items.id}
              image={items?.overview_image?.url}
              title={items.title}
              subtitle={items.subtitle}
              instructor={items?.user?.username}
              originalPrice={items.original_price}
              currentPrice={items.current_price}
              key={items.id}
            ></CartToggleItems>
          ))}
      </div>
      <div className="p-4">
        <div className="flex items-center gap-2 text-2xl font-bold mb-2">
          Total:
          <CoursePrice
            price={totalCoursePrice(courses).toLocaleString("en-US")}
          ></CoursePrice>
        </div>
        {pathname !== "/cart" && (
          <Button
            className="bg-primaryBlack text-white font-bold py-4"
            borderNone
            full
            to="cart"
            onClick={onClick}
          >
            Go to cart
          </Button>
        )}
      </div>
    </div>
  );
};

export default CartToggleNoEmpty;
