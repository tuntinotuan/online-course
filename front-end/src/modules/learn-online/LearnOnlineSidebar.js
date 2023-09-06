import React from "react";
import { IconClose } from "../../components/icon";
import { useDispatch } from "react-redux";
import { setToggleLearnOnlineSidebar } from "../../redux-toolkit/learn/learnSlice";
import LearnOnlineVideoList from "./LearnOnlineVideoList";

const LearnOnlineSidebar = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <div className="sticky top-0 w-[450px] h-[100vh]">
      <h1 className="flex items-center justify-between text-base font-bold pl-4 pr-1">
        Course content
        <IconClose
          className="py-4 px-2"
          size={20}
          onClick={() => dispatch(setToggleLearnOnlineSidebar(false))}
        ></IconClose>
      </h1>
      {data?.video_lists?.map((video, index) => (
        <LearnOnlineVideoList
          video={video}
          initial={index === 0}
        ></LearnOnlineVideoList>
      ))}
    </div>
  );
};

export default LearnOnlineSidebar;
