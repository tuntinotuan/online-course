import React from "react";

const CourseLayoutHeading = ({ title, children }) => {
  return (
    <div className="my-10">
      <h1 className="text-3xl font-bold mb-5">{title}</h1>
      {children}
    </div>
  );
};

export default CourseLayoutHeading;
