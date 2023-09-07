import React from "react";
import { IconFilm } from "../../components/icon";
import { useDispatch } from "react-redux";
import {
  setUrlPreviewVideo,
  toggleShowPopupVideo,
} from "../../redux-toolkit/course/courseSlice";

const CourseContentItem = ({ video }) => {
  const dispatch = useDispatch();
  const handleClickPreview = () => {
    if (video?.preview) {
      dispatch(toggleShowPopupVideo(true));
      dispatch(setUrlPreviewVideo(video.video.url));
    }
  };
  return (
    <div
      className={`flex items-center justify-between`}
      onClick={handleClickPreview}
    >
      <div className="flex items-center gap-4">
        <IconFilm size={18}></IconFilm>
        <p
          className={
            video?.preview ? "text-purpleText56 underline cursor-pointer" : ""
          }
        >
          {video.title || "Course Intro"}
        </p>
      </div>
      <div className="flex items-center gap-10">
        {video?.preview && (
          <p className="text-purpleText56 underline cursor-pointer">Preview</p>
        )}
        <span className="opacity-70">{video.duration || "03:52"}</span>
      </div>
    </div>
  );
};

export default CourseContentItem;
