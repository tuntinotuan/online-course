import React from "react";
import { Button } from "../button";
import CoursePrice from "../course/CoursePrice";
import CartToggleItems from "./CartToggleItems";
import { useLocation } from "react-router-dom";

const CartToggleNoEmpty = ({ onClick = () => {} }) => {
  const { pathname } = useLocation();
  return (
    <div className="w-full">
      {Array(2)
        .fill(null)
        .map(() => (
          <CartToggleItems></CartToggleItems>
        ))}
      <div className="p-4">
        <div className="flex items-center gap-2 text-2xl font-bold">
          Total: <CoursePrice></CoursePrice>
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
