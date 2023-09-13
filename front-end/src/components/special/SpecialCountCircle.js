import React from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";

const SpecialCountCircle = ({ className }) => {
  const { myCart, myCartLocal } = useSelector((state) => state.cart);
  const { courses } = myCart;
  const { t, i18n } = useTranslation();
  const currentLng = i18n.language;
  return (
    <span
      className={`w-6 h-6 flex items-center justify-center bg-purpleTextA4 text-white text-xs font-semibold rounded-full transition-all duration-1000 ${className} ${
        true ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      title={`${courses?.length || myCartLocal?.length} ${t("item")}${
        courses?.length > 1 || myCartLocal?.length > 1
          ? currentLng === "en"
            ? "s"
            : ""
          : ""
      } ${t("in the cart")}`}
    >
      {courses?.length > 9 || myCartLocal?.length > 9
        ? "9+"
        : courses?.length || myCartLocal?.length}
    </span>
  );
};

export default SpecialCountCircle;
