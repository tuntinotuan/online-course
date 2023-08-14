import React from "react";
import { ButtonStatusTag } from "../button";
import CoursePrice from "./CoursePrice";
import Image from "../image/Image";
import CourseTooltip from "./CourseTooltip";
import useHover from "../../hooks/useHover";
import { Link } from "react-router-dom";

const CourseCard = ({
  img,
  title,
  instructer,
  currentPrice,
  oldPrice,
  bestSeller = false,
}) => {
  const { hovered, setHovered, nodeRef, coords } = useHover();
  return (
    <Link
      to="/course/123"
      className="course-card relative h-full select-none -z-1 cursor-pointer group"
      ref={nodeRef}
    >
      <Image url={img} className="mb-2" isOverlay={hovered}></Image>
      <div>
        <h3 className="text-base course-title font-bold line-clamp-2">
          {title}
        </h3>
        <p className="course-instructer text-xs text-grayA6 truncate">
          {instructer}
        </p>
        <div className="flex items-center text-base gap-2 mb-2">
          <span className="font-bold">
            <CoursePrice price={currentPrice}></CoursePrice>
          </span>
          <span className="line-through">
            {oldPrice && (
              <>
                <CoursePrice
                  price={oldPrice}
                  className="font-normal text-grayA6"
                ></CoursePrice>
              </>
            )}
          </span>
        </div>
        {bestSeller && (
          <ButtonStatusTag className="bg-tagYellow">Bestseller</ButtonStatusTag>
        )}
      </div>
      <CourseTooltip
        title={title}
        bestSeller={bestSeller}
        hovered={hovered}
        onMouseOver={() => setHovered(true)}
        onMouseOut={() => setHovered(false)}
        coords={coords}
      ></CourseTooltip>
    </Link>
  );
};

export default CourseCard;
