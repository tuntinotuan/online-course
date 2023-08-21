import React, { useEffect } from "react";
import TooltipCover from "../tooltip/TooltipCover";
import CartToggleNoEmpty from "./CartToggleNoEmpty";
import TooltipEmpty from "../tooltip/TooltipEmpty";
import { useDispatch, useSelector } from "react-redux";
import { handleGetMyCart } from "../../redux-toolkit/cart/cartHandlerThunk";

const CartToggle = ({ hovered, onClick = () => {} }) => {
  const dispatch = useDispatch();
  const { myCart } = useSelector((state) => state.cart);
  const { courses } = myCart;
  const { userData } = useSelector((state) => state.user);
  const { cart } = userData;
  useEffect(() => {
    dispatch(handleGetMyCart(cart?.id));
  }, [cart, dispatch]);
  return (
    <TooltipCover hovered={hovered}>
      {courses?.length > 0 ? (
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
