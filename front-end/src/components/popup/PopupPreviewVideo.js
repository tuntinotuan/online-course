import React, { useEffect, useRef, useState } from "react";
import Popup from "./Popup";
import { strapiPathBE } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowPopupVideo } from "../../redux-toolkit/course/courseSlice";
import VideoList from "../video/VideoList";
import LoadingSpineQuarter from "../loading/LoadingSpineQuarter";

const PopupPreviewVideo = () => {
  const dispatch = useDispatch();
  const videoRef = useRef();
  const [loadVideo, setLoadVideo] = useState(false);
  const { course, showPopupVideo, urlPreviewVideo } = useSelector(
    (state) => state.course
  );
  const { video_lists } = course;
  const handleClosePopup = () => {
    dispatch(toggleShowPopupVideo(false));
    // videoRef.current?.pause();
  };
  useEffect(() => {
    setLoadVideo(true);
    setTimeout(() => {
      setLoadVideo(false);
    }, 100);
  }, [urlPreviewVideo]);

  return (
    <Popup
      show={showPopupVideo}
      onClick={handleClosePopup}
      classPopup="flex-col !justify-normal !items-normal"
      className={`top-16 w-[600px] !bg-primaryBlack dark:!bg-darkMain text-white border !border-gray-600 dark:!border-primaryBlack !p-0 ${
        video_lists?.length > 0 ? "mb-32" : ""
      }`}
    >
      <div className="px-6 pt-6 font-bold">
        <h2 className="text-purpleTextC0">Course Preview</h2>
        <h1 className="text-xl max-w-[400px] mb-10">{course.title}</h1>
        {loadVideo && (
          <div className="flex items-center justify-center h-[300px]">
            <LoadingSpineQuarter className="border-white"></LoadingSpineQuarter>
          </div>
        )}
        {!loadVideo && urlPreviewVideo && (
          <video
            controls
            autoPlay
            width="100%"
            height="100%"
            className="border border-gray-600 dark:border-primaryBlack"
            ref={videoRef}
          >
            <source
              src={`${strapiPathBE}${urlPreviewVideo}`}
              type="video/mp4"
            />
            Sorry, your browser doesn't support embedded videos.
          </video>
        )}
      </div>
      <p className="text-base font-bold py-3 px-6">Free Sample Videos:</p>
      <VideoList></VideoList>
    </Popup>
  );
};

export default PopupPreviewVideo;
