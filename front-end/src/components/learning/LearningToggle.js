import React from "react";
import TooltipCover from "../tooltip/TooltipCover";
import LearningToggleNoEmpty from "./LearningToggleNoEmpty";
import { useSelector } from "react-redux";
import TooltipEmptyButton from "../tooltip/TooltipEmptyButton";

const LearningToggle = ({ hovered, onClick }) => {
  const { myPurchasedCourses } = useSelector((state) => state.purchased);
  const { courses } = myPurchasedCourses;
  return (
    <TooltipCover hovered={hovered} className="top-[115%]">
      {courses?.length > 0 ? (
        <LearningToggleNoEmpty onClick={onClick}></LearningToggleNoEmpty>
      ) : (
        <TooltipEmptyButton
          title="Start learning from over 213,000 courses today."
          go="Browse now"
          onClick={onClick}
        ></TooltipEmptyButton>
      )}
    </TooltipCover>
  );
};

export default LearningToggle;
