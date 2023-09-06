import React from "react";

const LearnOnlineVideoItem = ({ video, index }) => {
  return (
    <div className="block w-full hover:bg-purpleTextDC py-3 px-4 cursor-pointer">
      <h1>{`${index}. ${video?.title || "Hello"}`}</h1>
    </div>
  );
};

export default LearnOnlineVideoItem;
