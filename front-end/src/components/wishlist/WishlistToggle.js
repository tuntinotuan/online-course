import React from "react";
import TooltipCover from "../tooltip/TooltipCover";
import TooltipEmpty from "../tooltip/TooltipEmpty";
import WishlistToggleNoEmpty from "./WishlistToggleNoEmpty";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const WishlistToggle = ({ hovered, onClick }) => {
  const { t } = useTranslation();
  const { myWishlist } = useSelector((state) => state.wishlist);
  const { courses } = myWishlist;
  return (
    <TooltipCover hovered={hovered}>
      {courses?.length > 0 ? (
        <WishlistToggleNoEmpty onClick={onClick}></WishlistToggleNoEmpty>
      ) : (
        <TooltipEmpty
          title={t("your wishlist is empty.")}
          go={t("explore courses")}
        ></TooltipEmpty>
      )}
    </TooltipCover>
  );
};

export default WishlistToggle;
