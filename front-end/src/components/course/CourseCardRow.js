import React from "react";
import Image from "../image/Image";
import { strapiPathBE } from "../../utils/constants";
import CoursePrice from "./CoursePrice";
import CourseRating from "./CourseRating";
import CourseSumary from "./CourseSumary";
import { Link } from "react-router-dom";
import useHover from "../../hooks/useHover";
import CourseTooltip from "./CourseTooltip";

const CourseCardRow = ({ data }) => {
  const { nodeRef, hovered, setHovered, coords } = useHover();
  return (
    <div
      className="w-full flex items-start justify-between gap-16 border border-transparent border-b-gray-300 py-4"
      ref={nodeRef}
    >
      <div className="flex items-start gap-4">
        <Link to={`/course/${data.id}`} className="w-[250px] flex-shrink-0">
          <Image
            url={`${strapiPathBE}${data?.overview_image?.url}`}
            isOverlay
          ></Image>
        </Link>
        <div>
          <Link
            to={`/course/${data.id}`}
            className="text-base course-title font-bold line-clamp-2"
          >
            {data?.title}
          </Link>
          <p className="my-1 line-clamp-2">{data.subtitle}</p>
          <p className="course-instructer text-xs text-grayA6 truncate">
            {data?.user?.username}
          </p>
          <CourseRating rating={data.star}></CourseRating>
          <CourseSumary></CourseSumary>
        </div>
      </div>
      <div className="text-base mb-2">
        <span className="font-bold">
          <CoursePrice
            price={(
              data?.current_price || data?.original_price
            )?.toLocaleString("en-US")}
          ></CoursePrice>
        </span>
        <span className="font-thin line-through">
          {data?.current_price && (
            <CoursePrice
              price={data?.original_price?.toLocaleString("en-US")}
              className="font-normal text-grayA6"
            ></CoursePrice>
          )}
        </span>
      </div>
      {false && (
        <CourseTooltip
          courseId={data.id}
          hovered={hovered}
          onMouseOver={() => setHovered(true)}
          onMouseOut={() => setHovered(false)}
          coords={coords}
        ></CourseTooltip>
      )}
    </div>
  );
};

export default CourseCardRow;
