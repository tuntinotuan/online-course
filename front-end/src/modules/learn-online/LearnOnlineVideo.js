import React, { useEffect, useState } from "react";
import { strapiPathBE } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button/Button";
import { IconArrowLeft } from "../../components/icon";
import { setToggleLearnOnlineSidebar } from "../../redux-toolkit/learn/learnSlice";

const LearnOnlineVideo = () => {
  const dispatch = useDispatch();
  const [loadVideo, setLoadVideo] = useState(false);
  const { course, showPopupVideo, urlPreviewVideo } = useSelector(
    (state) => state.course
  );
  const { toggleLearnOnlineSidebar } = useSelector((state) => state.learn);
  const { video_lists } = course;
  useEffect(() => {
    setLoadVideo(true);
    setTimeout(() => {
      setLoadVideo(false);
    }, 100);
  }, [urlPreviewVideo]);
  return (
    <div className="relative overflow-hidden">
      <video controls autoPlay width="100%" height="100%">
        <source src={`${strapiPathBE}${urlPreviewVideo}`} type="video/mp4" />
        Sorry, your browser doesn't support embedded videos.
      </video>
      {!toggleLearnOnlineSidebar && (
        <Button
          className={`absolute top-[10%] -right-24 hover:right-0 hover:bg-opacity-10 flex items-center justify-between text-white !border-gray-600 duration-500 gap-1 group`}
          onClick={() => dispatch(setToggleLearnOnlineSidebar(true))}
        >
          <IconArrowLeft size={26}></IconArrowLeft>
          <span className="opacity-0 group-hover:opacity-90 duration-500">
            Course content
          </span>
        </Button>
      )}
    </div>
  );
};

export default LearnOnlineVideo;
