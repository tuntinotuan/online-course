import React from "react";
import { useParams } from "react-router-dom";

const CourseUpdate = () => {
  const { courseId } = useParams();
  return <div>This is course update id: {courseId}</div>;
};

export default CourseUpdate;
