import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUrlPlayVideo } from "../../redux-toolkit/learn/learnSlice";

const LearnOnlineVideoItem = ({ video, index }) => {
  const dispatch = useDispatch();
  const { urlPlayVideo } = useSelector((state) => state.learn);
  const handleSelectVideoLearn = () => {
    dispatch(setUrlPlayVideo(video?.video?.url));
  };
  return (
    <div
      className={`block w-full hover:bg-purpleTextDC dark:hover:bg-gray-900 dark:text-darkTextCB transition-all py-3 px-4 cursor-pointer ${
        video?.video?.url === urlPlayVideo
          ? "bg-purpleTextDC dark:bg-gray-900"
          : ""
      }`}
      onClick={handleSelectVideoLearn}
    >
      <h1>{`${index}. ${video?.title || "Hello"}`}</h1>
    </div>
  );
};

export default LearnOnlineVideoItem;
