import React, { useEffect, useState } from "react";
import { strapiPathBE } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import Button from "../../components/button/Button";
import { IconChevronLeft } from "../../components/icon";
import { setToggleLearnOnlineSidebar } from "../../redux-toolkit/learn/learnSlice";
import LoadingSpinQuarter from "../../components/loading/LoadingSpinQuarter";

const LearnOnlineVideo = () => {
  const dispatch = useDispatch();
  const [loadVideo, setLoadVideo] = useState(false);
  const { toggleLearnOnlineSidebar, urlPlayVideo } = useSelector(
    (state) => state.learn
  );
  useEffect(() => {
    setLoadVideo(true);
    setTimeout(() => {
      setLoadVideo(false);
    }, 100);
  }, [urlPlayVideo]);
  return (
    <div className="relative w-full bg-primaryBlack rounded-xl overflow-hidden">
      {loadVideo && (
        <div className="flex items-center justify-center h-[300px]">
          <LoadingSpinQuarter></LoadingSpinQuarter>
        </div>
      )}
      {!loadVideo && (
        <video
          controls
          autoPlay
          width="100%"
          className="rounded-inherit"
          style={{
            height: toggleLearnOnlineSidebar ? 400 : 500,
          }}
        >
          <source src={`${strapiPathBE}${urlPlayVideo}`} type="video/mp4" />
          Sorry, your browser doesn't support embedded videos.
        </video>
      )}
      {!toggleLearnOnlineSidebar && (
        <Button
          className={`absolute top-[10%] -right-[110px] hover:right-0 hover:bg-opacity-10 flex items-center justify-between gap-1 text-white !border-gray-600 duration-500 py-3 px-4 group`}
          onClick={() => dispatch(setToggleLearnOnlineSidebar(true))}
        >
          <IconChevronLeft size={20}></IconChevronLeft>
          <span className="font-bold opacity-0 group-hover:opacity-90 duration-500">
            Course content
          </span>
        </Button>
      )}
    </div>
  );
};

export default LearnOnlineVideo;
