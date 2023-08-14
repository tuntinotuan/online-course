import React from "react";
import TooltipCover from "../tooltip/TooltipCover";
import TooltipEmpty from "../tooltip/TooltipEmpty";

const WishlistToggle = ({ hovered }) => {
  return (
    <TooltipCover hovered={hovered}>
      <TooltipEmpty
        title="Your wishlist is empty."
        go="Explore courses"
      ></TooltipEmpty>
    </TooltipCover>
  );
};

export default WishlistToggle;
