import React from "react";
import CartEmpty from "../modules/cart/CartEmpty";
import CartNoEmpty from "../modules/cart/CartNoEmpty";

const CartPage = () => {
  return (
    <div className="w-full max-w-[1280px] mx-auto px-8 py-10">
      <h1 className="text-4xl font-bold mb-10">Shopping Cart</h1>
      {false && <CartEmpty></CartEmpty>}
      {true && <CartNoEmpty></CartNoEmpty>}
    </div>
  );
};

export default CartPage;
