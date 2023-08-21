import React, { useEffect } from "react";
import TooltipCover from "../tooltip/TooltipCover";
import TooltipEmpty from "../tooltip/TooltipEmpty";
import WishlistToggleNoEmpty from "./WishlistToggleNoEmpty";
import { useDispatch, useSelector } from "react-redux";
import { handleGetMyWishlist } from "../../redux-toolkit/wishlist/wishlistHandlerThunk";

const WishlistToggle = ({ hovered }) => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  const { favorite } = userData;
  const { myWishlist } = useSelector((state) => state.wishlist);
  const { courses } = myWishlist;
  useEffect(() => {
    dispatch(handleGetMyWishlist(favorite?.id));
  }, [favorite, dispatch]);
  return (
    <TooltipCover hovered={hovered}>
      {courses?.length > 0 ? (
        <WishlistToggleNoEmpty></WishlistToggleNoEmpty>
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
