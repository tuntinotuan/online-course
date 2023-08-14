import React from "react";
import CartTotal from "./CartTotal";
import CartItems from "./CartItems";

const CartNoEmpty = () => {
  return (
    <div className="flex items-start gap-20">
      <div className="w-[70%]">
        <h2 className="font-bold mb-1">0 Courses in Cart</h2>
        {Array(2)
          .fill(null)
          .map(() => (
            <CartItems></CartItems>
          ))}
        {true && (
          <div className="mt-5">
            <h2 className="font-bold mb-1">Saved for later</h2>
            <CartItems></CartItems>
          </div>
        )}
      </div>
      <CartTotal></CartTotal>
    </div>
  );
};

export default CartNoEmpty;
