import React from "react";
import { IconFilm } from "../../components/icon";

const CourseContentItem = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-4">
        <IconFilm size={18}></IconFilm>
        <p className="text-purpleText56 underline cursor-pointer">
          Course Intro
        </p>
      </div>
      <div className="flex items-center gap-10">
        <p className="text-purpleText56 underline cursor-pointer">Preview</p>
        <span className="opacity-70">03:52</span>
      </div>
    </div>
  );
};

export default CourseContentItem;
