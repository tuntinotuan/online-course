import React from "react";
import { IconClose } from "../../components/icon";
import { useDispatch } from "react-redux";
import { setToggleLearnOnlineSidebar } from "../../redux-toolkit/learn/learnSlice";
import LearnOnlineVideoList from "./LearnOnlineVideoList";

const LearnOnlineSidebar = ({ data }) => {
  const dispatch = useDispatch();
  return (
    <div className="sticky top-0 w-[450px] h-[100vh] border border-gray-300 rounded-xl">
      <h1 className="flex items-center justify-between text-base font-bold pl-4 py-2 pr-1">
        Course content
        <IconClose
          className="rounded-full hover:bg-purpleTextDC transition-all p-2"
          size={20}
          onClick={() => dispatch(setToggleLearnOnlineSidebar(false))}
        ></IconClose>
      </h1>
      {data?.video_lists?.length > 0 ? (
        data?.video_lists?.map((video, index) => (
          <LearnOnlineVideoList
            video={video}
            initial={index === 0}
          ></LearnOnlineVideoList>
        ))
      ) : (
        <div className="border border-gray-300 border-b-transparent border-x-transparent last:border-b-gray-300">
          <h1 className="p-4">Next released video</h1>
        </div>
      )}
    </div>
  );
};

export default LearnOnlineSidebar;
