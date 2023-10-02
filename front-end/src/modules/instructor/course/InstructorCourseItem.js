import React from "react";
import Image from "../../../components/image/Image";
import { Link } from "react-router-dom";
import { strapiPathBE } from "../../../utils/constants";

const InstructorCourseItem = ({ course }) => {
  let styleForStatusSpan = "";
  switch (course.status) {
    case "draft":
      styleForStatusSpan = "";
      break;
    case "public":
      styleForStatusSpan = "text-green-500";
      break;
    case "reject":
      styleForStatusSpan = "text-red-500";
      break;

    default:
      break;
  }
  return (
    <div className="flex w-full border border-gray-300 mb-2">
      <div className="w-[125px]">
        <Image
          url={
            (course?.overview_image?.url &&
              `${strapiPathBE}${course?.overview_image?.url}`) ||
            "https://s.udemycdn.com/course/200_H/placeholder.jpg"
          }
          borderNone
        ></Image>
      </div>
      <div className="relative flex justify-between w-full p-4 group">
        <Link
          to={`/instructor/course/${course?.id}/manage/basics`}
          className={`absolute inset-0 flex items-center justify-center bg-white bg-opacity-90 text-base font-bold text-purpleText56 transition-all opacity-0 group-hover:opacity-100`}
        >
          Edit / manage course
        </Link>
        <div className="flex flex-col justify-between">
          <h1 className="font-bold">{course.title}</h1>
          <div>
            <span className="font-bold">Status </span>
            <span className={`capitalize ${styleForStatusSpan}`}>
              {course.status}
            </span>
          </div>
        </div>
        <div className="font-bold">Finish your course</div>
      </div>
    </div>
  );
};

export default InstructorCourseItem;
