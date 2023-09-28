import React from "react";
import Image from "../../../components/image/Image";
import { Link } from "react-router-dom";

const InstructorCourseItem = () => {
  return (
    <div className="flex border border-gray-300 mb-2">
      <div className="w-[125px]">
        <Image
          url="https://s.udemycdn.com/course/200_H/placeholder.jpg"
          borderNone
        ></Image>
      </div>
      <div className="relative flex justify-between w-full p-4 group">
        <Link
          className={`absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 text-base font-bold text-purpleText56 transition-all opacity-0 group-hover:opacity-100`}
        >
          Edit / manage course
        </Link>
        <div className="flex flex-col justify-between">
          <h1 className="font-bold">Learn</h1>
          <div>
            <span className="font-bold">Status </span>
            <span>Draft</span>
          </div>
        </div>
        <div className="font-bold">Finish your course</div>
      </div>
    </div>
  );
};

export default InstructorCourseItem;
