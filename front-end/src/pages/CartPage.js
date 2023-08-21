import React, { useEffect } from "react";
import CartEmpty from "../modules/cart/CartEmpty";
import CartNoEmpty from "../modules/cart/CartNoEmpty";
import { useSelector } from "react-redux";

const CartPage = () => {
  const { myCart } = useSelector((state) => state.cart);
  const { courses } = myCart;
  useEffect(() => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  return (
    <div className="w-full max-w-[1280px] mx-auto px-8 py-10">
      <h1 className="text-4xl font-bold mb-10">Shopping Cart</h1>
      {courses?.length > 0 ? (
        <CartNoEmpty data={courses}></CartNoEmpty>
      ) : (
        <CartEmpty></CartEmpty>
      )}
    </div>
  );
};

export default CartPage;
