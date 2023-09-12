import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { IconArrowRight } from "../icon";
import useHover from "../../hooks/useHover";
import { useDispatch, useSelector } from "react-redux";
import {
  setListIndustries,
  setListTopics,
} from "../../redux-toolkit/category/categorySlice";

const CategoryItem = ({
  title,
  to,
  industries,
  topics = false,
  arrowNone = false,
  category = false,
  ...props
}) => {
  const dispatch = useDispatch();
  const { hovered, nodeRef } = useHover();
  const { listIndustries, listTopics } = useSelector((state) => state.category);
  useEffect(() => {
    if (industries && !topics) {
      hovered && dispatch(setListIndustries(industries));
    }
  }, [hovered, industries, topics, dispatch]);
  useEffect(() => {
    if (topics) {
      // hovered && dispatch(handleGetTopics(industries?.id));
      hovered && dispatch(setListTopics(industries?.topics));
    }
  }, [industries, topics, hovered, dispatch]);
  useEffect(() => {
    if (category && hovered) {
      dispatch(setListTopics(null));
    }
  }, [category, industries, listIndustries, hovered, dispatch]);
  return (
    <Link
      to={`/topic/${to}`}
      className={`flex items-center justify-between hover:text-purpleText56 cursor-pointer px-4 py-2 ${
        industries === listIndustries || industries?.topics === listTopics
          ? "text-purpleText56"
          : ""
      }`}
      ref={nodeRef}
      {...props}
    >
      {title}
      {!arrowNone && <IconArrowRight size={10} stroke={3}></IconArrowRight>}
    </Link>
  );
};

export default CategoryItem;
