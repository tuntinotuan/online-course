import React from "react";

const CourseHeading = ({ className, children }) => {
  return <h1 className={`text-2xl font-bold mb-5 ${className}`}>{children}</h1>;
};

export default CourseHeading;
