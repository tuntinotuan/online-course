import React from "react";
import Image from "../../components/image/Image";
import { ButtonPlayVideo } from "../../components/button";
import { useDispatch, useSelector } from "react-redux";
import { strapiPathBE } from "../../utils/constants";
import {
  setUrlPreviewVideo,
  toggleShowPopupVideo,
} from "../../redux-toolkit/course/courseSlice";

const CourseVideo = ({ className }) => {
  const dispatch = useDispatch();
  const { course } = useSelector((state) => state.course);
  const { video_intro } = course;
  const handleShowVideoIntro = () => {
    dispatch(toggleShowPopupVideo(true));
    dispatch(setUrlPreviewVideo(video_intro?.video?.url));
  };
  return (
    <div
      className={`relative cursor-pointer ${className}`}
      onClick={handleShowVideoIntro}
    >
      <div className="flex items-center justify-center absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] z-10">
        <ButtonPlayVideo></ButtonPlayVideo>
      </div>
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-base font-bold text-white z-10">
        Preview this course
      </p>
      <Image
        url={
          `${strapiPathBE}${course?.overview_image?.url}` ||
          "https://img-b.udemycdn.com/course/240x135/258316_55e9_12.jpg"
        }
      ></Image>
    </div>
  );
};

export default CourseVideo;
