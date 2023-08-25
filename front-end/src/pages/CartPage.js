import React, { useEffect } from "react";
import CartEmpty from "../modules/cart/CartEmpty";
import CartNoEmpty from "../modules/cart/CartNoEmpty";
import { useSelector } from "react-redux";

const CartPage = () => {
  const { myCart, myCartLocal } = useSelector((state) => state.cart);
  const { courses } = myCart;
  console.log("myCartLocal", myCartLocal);
  useEffect(() => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  return (
    <div className="w-full max-w-[1280px] mx-auto px-8 py-10">
      <h1 className="text-4xl font-bold mb-10">Shopping Cart</h1>
      {myCartLocal?.length > 0 || courses?.length > 0 ? (
        <CartNoEmpty data={courses || myCartLocal}></CartNoEmpty>
      ) : (
        <CartEmpty></CartEmpty>
      )}
    </div>
  );
};

export default CartPage;
