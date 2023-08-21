import React from "react";
import { NavLink } from "react-router-dom";
import useHover from "../../../hooks/useHover";
import WishlistToggle from "../../wishlist/WishlistToggle";
import { IconHeart, IconHeartSolid } from "../../icon";
import { useSelector } from "react-redux";

const HeaderBtnWishlist = () => {
  const { hovered, nodeRef } = useHover();
  const { myWishlist } = useSelector((state) => state.wishlist);
  const { courses } = myWishlist;
  return (
    <div ref={nodeRef} className="relative py-5">
      <NavLink to="/my-course/wishlist" className="hover:text-purpleText56">
        {courses?.length > 0 ? (
          <IconHeartSolid></IconHeartSolid>
        ) : (
          <IconHeart></IconHeart>
        )}
      </NavLink>
      <WishlistToggle hovered={hovered}></WishlistToggle>
    </div>
  );
};

export default HeaderBtnWishlist;
