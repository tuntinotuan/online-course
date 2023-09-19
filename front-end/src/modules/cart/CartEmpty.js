import React from "react";
import Image from "../../components/image/Image";
import Button from "../../components/button/Button";

const CartEmpty = () => {
  return (
    <>
      <h2 className="font-bold mb-1">0 Courses in Cart</h2>
      <div className="flex flex-col items-center justify-center gap-5 w-full border border-gray-100 dark:border-primaryBlack rounded py-5">
        <div className="w-[240px]">
          <Image url="empty-shopping-cart-v2.jpg" borderNone></Image>
        </div>
        <p>Your cart is empty. Keep shopping to find a course!</p>
        <Button
          className="bg-purpleTextA4 text-white font-bold py-3"
          borderNone
          to="/"
        >
          Keep Shopping
        </Button>
      </div>
    </>
  );
};

export default CartEmpty;
