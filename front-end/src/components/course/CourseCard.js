import React from "react";
import { ButtonStatusTag } from "../button";
import CoursePrice from "./CoursePrice";
import Image from "../image/Image";
import CourseTooltip from "./CourseTooltip";
import useHover from "../../hooks/useHover";
import { Link } from "react-router-dom";
import { strapiPathBE } from "../../utils/constants";

const CourseCard = ({
  id,
  img,
  title,
  subtitle,
  updatedAt,
  instructor,
  originalPrice,
  currentPrice,
  bestSeller = false,
  blockTooltip = false,
}) => {
  const { nodeRef, hovered, setHovered, coords } = useHover();
  return (
    <div className="">
      <Link
        to={`/course/${id}`}
        className="course-card relative h-full select-none -z-1 cursor-pointer group"
        ref={nodeRef}
      >
        <div className="h-[135px]">
          <Image
            url={`${strapiPathBE}${img}`}
            className="mb-2"
            isOverlay={hovered}
          ></Image>
        </div>
        <div>
          <h3 className="text-base course-title font-bold line-clamp-2">
            {title}
          </h3>
          <p className="course-instructer text-xs text-grayA6 truncate">
            {instructor?.username}
          </p>
          <div className="flex items-center text-base gap-2 mb-2">
            <span className="font-bold">
              <CoursePrice
                price={(currentPrice || originalPrice).toLocaleString("en-US")}
              ></CoursePrice>
            </span>
            <span className="line-through">
              {currentPrice && (
                <CoursePrice
                  price={originalPrice.toLocaleString("en-US")}
                  className="font-normal text-grayA6"
                ></CoursePrice>
              )}
            </span>
          </div>
          {bestSeller && (
            <ButtonStatusTag className="bg-tagYellow">
              Bestseller
            </ButtonStatusTag>
          )}
        </div>
      </Link>
      {!blockTooltip && (
        <CourseTooltip
          courseId={id}
          title={title}
          subtitle={subtitle}
          updatedAt={updatedAt}
          bestSeller={bestSeller}
          hovered={hovered}
          onMouseOver={() => setHovered(true)}
          onMouseOut={() => setHovered(false)}
          coords={coords}
        ></CourseTooltip>
      )}
    </div>
  );
};

export default CourseCard;
