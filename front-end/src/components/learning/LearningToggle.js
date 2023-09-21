import React from "react";
import TooltipCover from "../tooltip/TooltipCover";
import LearningToggleNoEmpty from "./LearningToggleNoEmpty";
import { useSelector } from "react-redux";
import TooltipEmptyButton from "../tooltip/TooltipEmptyButton";
import { useTranslation } from "react-i18next";

const LearningToggle = ({ hovered, onClick }) => {
  const { myPurchasedCourses } = useSelector((state) => state.purchased);
  const { t } = useTranslation();
  return (
    <TooltipCover hovered={hovered} className="top-[115%]">
      {myPurchasedCourses?.length > 0 ? (
        <LearningToggleNoEmpty onClick={onClick}></LearningToggleNoEmpty>
      ) : (
        <TooltipEmptyButton
          title={t("start learning from over 213,000 courses today.")}
          go={t("browse now")}
          onClick={onClick}
        ></TooltipEmptyButton>
      )}
    </TooltipCover>
  );
};

export default LearningToggle;
