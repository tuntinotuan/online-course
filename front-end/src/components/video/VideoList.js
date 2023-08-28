import React from "react";
import VideoItem from "./VideoItem";
import { useSelector } from "react-redux";

const VideoList = () => {
  const { course } = useSelector((state) => state.course);
  const { video_intro } = course;
  return (
    <div>
      <VideoItem data={video_intro} title={course.title}></VideoItem>
      {Array(2)
        .fill(null)
        .map((index) => (
          <VideoItem key={index}></VideoItem>
        ))}
    </div>
  );
};

export default VideoList;
