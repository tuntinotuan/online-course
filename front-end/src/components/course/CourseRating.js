import React from "react";
import CourseStar from "./CourseStar";

const CourseRating = ({ className, rating, totalRating = 0, secondary }) => {
  return (
    <div className={`flex items-center text-grayA6 gap-1 my-1 ${className}`}>
      <h2
        className={`font-bold ${
          secondary ? "text-[#F69C08]" : "text-starColor"
        }`}
      >
        {rating || 0}
      </h2>
      <CourseStar rating={rating} readOnly secondary={secondary}></CourseStar>
      <span className="text-xs">({totalRating || 0})</span>
    </div>
  );
};

export default CourseRating;
