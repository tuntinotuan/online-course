import React, { useState } from "react";
import { IconArrowDown } from "../../components/icon";
import LearnOnlineVideoItem from "./LearnOnlineVideoItem";

const LearnOnlineVideoList = ({ video, initial = false }) => {
  const [toggle, setToggle] = useState(initial);
  const handleToggle = () => {
    setToggle(!toggle);
  };
  return (
    <div className="border border-gray-300 border-b-transparent border-x-transparent last:border-b-gray-300">
      <div
        className={`flex items-center justify-between w-full bg-grayF7 border border-transparent py-3 px-4 cursor-pointer ${
          toggle ? "border-b-gray-300" : ""
        }`}
        onClick={handleToggle}
      >
        <div className="w-full flex items-center justify-between gap-4">
          <h2 className="text-[15px] font-bold">
            {video.lesson || "Intro to Course and Python"}
          </h2>
          <IconArrowDown
            className={`${toggle ? "-rotate-180" : ""} transition-all`}
            size={14}
          ></IconArrowDown>
        </div>
      </div>
      {toggle && (
        <div className="flex flex-col gap-4">
          {true ? (
            <div>
              {video?.video_courses?.map((video, index) => (
                <LearnOnlineVideoItem
                  video={video}
                  index={index + 1}
                ></LearnOnlineVideoItem>
              ))}
            </div>
          ) : (
            <p className="text-xs text-grayA6">Next release course</p>
          )}
        </div>
      )}
    </div>
  );
};

export default LearnOnlineVideoList;
