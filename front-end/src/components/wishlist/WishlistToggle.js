import React from "react";
import TooltipCover from "../tooltip/TooltipCover";
import TooltipEmpty from "../tooltip/TooltipEmpty";
import WishlistToggleNoEmpty from "./WishlistToggleNoEmpty";
import { useSelector } from "react-redux";

const WishlistToggle = ({ hovered, onClick }) => {
  const { myWishlist } = useSelector((state) => state.wishlist);
  const { courses } = myWishlist;
  return (
    <TooltipCover hovered={hovered}>
      {courses?.length > 0 ? (
        <WishlistToggleNoEmpty onClick={onClick}></WishlistToggleNoEmpty>
      ) : (
        <TooltipEmpty
          title="Your wishlist is empty."
          go="Explore courses"
        ></TooltipEmpty>
      )}
    </TooltipCover>
  );
};

export default WishlistToggle;
