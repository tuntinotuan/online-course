import React from "react";
import TooltipCover from "../tooltip/TooltipCover";
import CartToggleNoEmpty from "./CartToggleNoEmpty";
import TooltipEmpty from "../tooltip/TooltipEmpty";

const CartToggle = ({ hovered, onClick = () => {} }) => {
  return (
    <TooltipCover hovered={hovered}>
      {true ? (
        <CartToggleNoEmpty onClick={onClick}></CartToggleNoEmpty>
      ) : (
        <TooltipEmpty
          title="Your cart is empty."
          go="Keep shopping"
          onClick={onClick}
        ></TooltipEmpty>
      )}
    </TooltipCover>
  );
};

export default CartToggle;
