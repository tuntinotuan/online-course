import React from "react";
import Image from "../image/Image";
import { strapiPathBE } from "../../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { setUrlPreviewVideo } from "../../redux-toolkit/course/courseSlice";
import { IconPlayCircle } from "../icon";

const VideoItem = ({ data, title }) => {
  const dispatch = useDispatch();
  const { urlPreviewVideo } = useSelector((state) => state.course);
  const handleChangeVideoUrl = () => {
    dispatch(setUrlPreviewVideo(data?.video?.url));
  };
  return (
    <div
      className={`flex items-center justify-between font-bold py-4 px-6 cursor-pointer ${
        data?.video?.url === urlPreviewVideo ? "bg-grayA6 bg-opacity-25" : ""
      }`}
      onClick={handleChangeVideoUrl}
    >
      <div className="flex items-center gap-4">
        <div className="w-[65px]">
          <Image
            url={
              `${strapiPathBE}${data?.preview_image?.url}` ||
              "https://i.ytimg.com/vi/6XKShsLYVu0/hqdefault.jpg?sqp=-oaymwEWCKgBEF5IWvKriqkDCQgBFQAAiEIYAQ==&rs=AOn4CLAXpQ341XI6GO3mzzNLcUX8Txz6iQ"
            }
          ></Image>
        </div>
        <h1 className="flex items-center">
          {data?.video?.url === urlPreviewVideo && (
            <IconPlayCircle className="mr-2"></IconPlayCircle>
          )}
          {data?.title || title}
        </h1>
      </div>
      <span>{data?.duration || "02:33"}</span>
    </div>
  );
};

export default VideoItem;
