import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Image from "../image/Image";
import { strapiPathBE } from "../../utils/constants";
import useHover from "../../hooks/useHover";
import ButtonPlayVideo from "../button/ButtonPlayVideo";
import CourseStar from "./CourseStar";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowPopupReview } from "../../redux-toolkit/globalSlice";
import { setCurrentCourseId } from "../../redux-toolkit/review/reviewSlice";
import { handleGetMySingleReview } from "../../redux-toolkit/review/reviewHanlderThunk";
import { requestGetMySingleReview } from "../../redux-toolkit/review/reviewRequests";

const CourseCardHasReview = ({ data, page }) => {
  const dispatch = useDispatch();
  const { reviewLoading } = useSelector((state) => state.review);
  const { currentUserId } = useSelector((state) => state.auth);
  const [singleReview, setSingReview] = useState();
  const { nodeRef, hovered } = useHover();
  const handleShowPopupReview = (courseId) => {
    dispatch(toggleShowPopupReview(true));
    dispatch(setCurrentCourseId(courseId));
    dispatch(handleGetMySingleReview(courseId));
  };
  useEffect(() => {
    async function fetchReview() {
      try {
        const response = await requestGetMySingleReview(
          currentUserId,
          data?.id
        );
        setSingReview(response.data[0]);
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchReview();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reviewLoading]);

  return (
    <div
      className="course-card relative h-full select-none -z-1 cursor-pointer"
      ref={nodeRef}
    >
      <Link
        to={`/course-dashboard-redirect/${data?.id}`}
        className={`block ${data?.imageHeight}`}
      >
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
      <Link to={`/course-dashboard-redirect/${data?.id}`}>
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
        className="flex flex-col items-end text-xs group"
        onClick={() => handleShowPopupReview(data?.id)}
      >
        <CourseStar
          rating={singleReview?.rating || 0}
          size={14}
          readOnly
        ></CourseStar>
        {!singleReview && <span>Leave a rating</span>}
        {singleReview && (
          <span>
            <span className="group-hover:hidden">Your</span>
            <span className="hidden group-hover:inline">Edit</span> rating
          </span>
        )}
      </div>
    </div>
  );
};

export default CourseCardHasReview;
