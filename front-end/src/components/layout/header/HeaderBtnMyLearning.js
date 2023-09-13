import React from "react";
import { NavLink } from "react-router-dom";
import useHover from "../../../hooks/useHover";
import LearningToggle from "../../learning/LearningToggle";
import { useTranslation } from "react-i18next";

const HeaderBtnMyLearning = () => {
  const { hovered, setHovered, nodeRef } = useHover();
  const { t } = useTranslation();
  return (
    <div ref={nodeRef} className="relative py-5">
      <NavLink
        to="/my-course/learning"
        onClick={() => setHovered(false)}
        className="hover:text-purpleText56"
      >
        {t("my learning")}
      </NavLink>
      <LearningToggle
        hovered={hovered}
        onClick={() => setHovered(false)}
      ></LearningToggle>
    </div>
  );
};

export default HeaderBtnMyLearning;
