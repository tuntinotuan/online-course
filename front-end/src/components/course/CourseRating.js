import React from "react";
import CourseStar from "./CourseStar";

const CourseRating = ({ rating, totalRating = 0 }) => {
  return (
    <div className="flex items-center gap-1 my-1">
      <h2 className="text-starColor font-bold">{rating || 0}</h2>
      <CourseStar rating={rating} readOnly></CourseStar>
      <span className="text-xs text-grayA6">({totalRating || 0})</span>
    </div>
  );
};

export default CourseRating;
