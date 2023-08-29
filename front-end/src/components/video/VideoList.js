import React from "react";
import VideoItem from "./VideoItem";
import { useSelector } from "react-redux";
import { processAllVideoPreview } from "../../utils/processing-array";

const VideoList = () => {
  const { course } = useSelector((state) => state.course);
  const { video_intro, video_lists } = course;
  const allVideo = processAllVideoPreview(video_lists);
  return (
    <div>
      <VideoItem data={video_intro} title={course?.title}></VideoItem>
      {allVideo?.map((item) => (
        <VideoItem data={item} key={item.id}></VideoItem>
      ))}
    </div>
  );
};

export default VideoList;
