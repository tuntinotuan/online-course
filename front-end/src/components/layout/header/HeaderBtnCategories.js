import React, { useEffect } from "react";
import useHover from "../../../hooks/useHover";
import { useDispatch, useSelector } from "react-redux";
import { handleGetCategories } from "../../../redux-toolkit/category/categoryHanlderThunk";
import CategoriesToggle from "../../category/CategoriesToggle";

const HeaderBtnCategories = () => {
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
      <p className="hover:text-purpleText56 cursor-pointer">Categories</p>
      <CategoriesToggle
        hovered={hovered}
        onClick={() => setHovered(false)}
      ></CategoriesToggle>
    </div>
  );
};

export default HeaderBtnCategories;
