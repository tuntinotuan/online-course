import React from "react";
import { Button, ButtonHeart, ButtonStatusTag } from "../button";
import CourseSumary from "./CourseSumary";
import ReactDOM from "react-dom";
import { SpecialArrow, SpecialTextWithCheckIcon } from "../special";
import { Link } from "react-router-dom";
const targetCourse = [
  "Master Machine Learning on Python & R",
  "Have a great intuition of many Machine Learning models. What is your name, What's up Bro?",
  "Make accurate predictions",
];
const CourseTooltip = ({
  title,
  bestSeller,
  hovered,
  coords,
  onMouseOver = () => {},
  onMouseOut = () => {},
}) => {
  return ReactDOM.createPortal(
    <div
      className={`absolute bg-white w-[340px] h-auto border border-gray-300 p-6 -translate-y-1/2 transition-all ${
        hovered
          ? "opacity-100 visible scale-100"
          : "opacity-0 invisible scale-90"
      } z-50`}
      style={
        coords && {
          top: coords.top + coords.height / 2 + window.scrollY,
          left:
            coords?.x > 600
              ? coords?.x - 340 - 20
              : coords?.x + coords.width + 20,
        }
      }
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <Link
        to="/course/123"
        className="text-lg course-title font-bold transition-all hover:text-purpleText56 cursor-pointer"
      >
        {title}
      </Link>
      <div className="flex items-center gap-2">
        {bestSeller && (
          <ButtonStatusTag className="bg-tagYellow">Bestseller</ButtonStatusTag>
        )}
        <span className="text-xs text-greenText1E">
          Updated <p className="inline font-bold">August 2023</p>
        </span>
      </div>
      <CourseSumary className="my-2"></CourseSumary>
      <p>
        Learn complete Python with Basics, Data Science, Data Visualisation,
        Desktop Graphical Applications and Machine Learning
      </p>
      <div className="my-3">
        {targetCourse.map((item) => (
          <SpecialTextWithCheckIcon
            text={item}
            key={item}
          ></SpecialTextWithCheckIcon>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <Button
          className="w-[230px] bg-purpleTextA4 text-white text-lg font-bold py-4"
          borderNone
        >
          Add to cart
        </Button>
        <ButtonHeart></ButtonHeart>
      </div>
      <div
        className={`cover-space absolute top-0 w-5 h-full bg-transparent ${
          coords?.x > 600 ? "left-full" : "right-full"
        } cursor-pointer`}
      ></div>
      <SpecialArrow coords={coords}></SpecialArrow>
    </div>,
    document.querySelector("body")
  );
};

export default CourseTooltip;
