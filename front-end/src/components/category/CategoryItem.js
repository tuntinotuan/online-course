import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { IconArrowRight } from "../icon";
import useHover from "../../hooks/useHover";
import { useDispatch } from "react-redux";
import { setListIndustries } from "../../redux-toolkit/category/categorySlice";
import { handleGetTopics } from "../../redux-toolkit/category/categoryHanlderThunk";

const CategoryItem = ({
  title,
  to,
  industries,
  topics = false,
  arrowNone = false,
  ...props
}) => {
  const dispatch = useDispatch();
  const { hovered, nodeRef } = useHover();
  useEffect(() => {
    if (industries && !topics) {
      hovered && dispatch(setListIndustries(industries));
    }
  }, [hovered, industries, topics, dispatch]);
  useEffect(() => {
    if (topics) {
      hovered && dispatch(handleGetTopics(industries?.id));
    }
  }, [industries, topics, hovered, dispatch]);

  return (
    <NavLink
      to={`/courses/${to}`}
      className="flex items-center justify-between cursor-pointer px-4 py-2 hover:text-purpleText56"
      ref={nodeRef}
      {...props}
    >
      {title}
      {!arrowNone && <IconArrowRight size={10} stroke={3}></IconArrowRight>}
    </NavLink>
  );
};

export default CategoryItem;
