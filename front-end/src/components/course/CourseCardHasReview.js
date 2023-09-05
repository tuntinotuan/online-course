import React from "react";
import { Link } from "react-router-dom";
import Image from "../image/Image";
import { strapiPathBE } from "../../utils/constants";
import useHover from "../../hooks/useHover";
import ButtonPlayVideo from "../button/ButtonPlayVideo";
import CourseStar from "./CourseStar";
import { useDispatch } from "react-redux";
import { toggleShowPopupReview } from "../../redux-toolkit/globalSlice";
import { setCurrentCourseId } from "../../redux-toolkit/review/reviewSlice";
import { handleGetMySingleReview } from "../../redux-toolkit/review/reviewHanlderThunk";

const CourseCardHasReview = ({ data }) => {
  const dispatch = useDispatch();
  const { nodeRef, hovered } = useHover();
  const handleShowPopupReview = (courseId) => {
    dispatch(toggleShowPopupReview(true));
    dispatch(setCurrentCourseId(courseId));
    dispatch(handleGetMySingleReview(courseId));
  };
  return (
    <div
      className="course-card relative h-full select-none -z-1 cursor-pointer group"
      ref={nodeRef}
    >
      <Link to={`/course/${data?.id}`} className={`block ${data?.imageHeight}`}>
        <Image
          url={
            `${strapiPathBE}${data?.overview_image?.url}` ||
            "https://img-b.udemycdn.com/course/240x135/4270250_e54c_3.jpg"
          }
          className="mb-2"
          isOverlay={hovered}
          bgOpacity="bg-opacity-50"
        >
          <ButtonPlayVideo size={25}></ButtonPlayVideo>
        </Image>
      </Link>
      <Link to={`/course/${data?.id}`}>
        <h3
          className="text-base course-title font-bold line-clamp-2"
          title={data?.title}
        >
          {data?.title ||
            "Create a Flappy Bird game on Android for Beginners/Unity&"}
        </h3>
        <p className="course-instructer text-xs text-grayA6 truncate">
          {data?.user?.username}
        </p>
      </Link>
      <div
        className="flex flex-col items-end text-xs ml-auto"
        onClick={() => handleShowPopupReview(data?.id)}
      >
        <CourseStar readOnly></CourseStar>
        <span>Leave a rating</span>
      </div>
    </div>
  );
};

export default CourseCardHasReview;
