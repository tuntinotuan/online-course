import React, { useEffect } from "react";
import useHover from "../../../hooks/useHover";
import { useDispatch, useSelector } from "react-redux";
import { handleGetCategories } from "../../../redux-toolkit/category/categoryHanlderThunk";
import CategoriesToggle from "../../category/CategoriesToggle";
import { useTranslation } from "react-i18next";

const HeaderBtnCategories = () => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const { hovered, setHovered, nodeRef } = useHover();
  const { listCategories } = useSelector((state) => state.category);
  useEffect(() => {
    if (!listCategories.length > 0 && hovered) {
      dispatch(handleGetCategories());
    }
  }, [listCategories, hovered, dispatch]);
  return (
    <div className="relative py-[24px]" ref={nodeRef}>
      <p className={`cursor-pointer ${hovered ? "text-purpleText56" : ""}`}>
        {t("category")}
      </p>
      <CategoriesToggle
        hovered={hovered}
        onClick={() => setHovered(false)}
      ></CategoriesToggle>
    </div>
  );
};

export default HeaderBtnCategories;
