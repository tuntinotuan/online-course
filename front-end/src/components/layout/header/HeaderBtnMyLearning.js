import React from "react";
import { NavLink } from "react-router-dom";
import useHover from "../../../hooks/useHover";
import LearningToggle from "../../learning/LearningToggle";

const HeaderBtnMyLearning = () => {
  const { hovered, setHovered, nodeRef } = useHover();
  return (
    <div ref={nodeRef} className="relative py-5">
      <NavLink
        to="/my-course/learning"
        onClick={() => setHovered(false)}
        className="hover:text-purpleText56"
      >
        My learning
      </NavLink>
      <LearningToggle
        hovered={hovered}
        onClick={() => setHovered(false)}
      ></LearningToggle>
    </div>
  );
};

export default HeaderBtnMyLearning;
