import React, { useState } from "react";
import InputSelectFile from "../input/InputSelectFile";
import { Button } from "../button";
import { useDispatch } from "react-redux";
import { handleUpdateVideoLecture } from "../../redux-toolkit/lecture/lectureHandlerThunk";
import ToggleBtn from "../toggle/ToggleBtn";

const Video = ({ nameFile, videoId, preview }) => {
  const dispatch = useDispatch();
  const [showSelectFile, setShowSelectFile] = useState(!nameFile);
  const [urlChosenVideo, setUrlChosenVideo] = useState();
  const [isPreview, setIsPreview] = useState(preview);
  const updateVideoLecture = () => {
    dispatch(handleUpdateVideoLecture({ videoId, urlChosenVideo, isPreview }));
    setShowSelectFile(false);
  };
  return (
    <>
      {nameFile && (
        <div
          className={`flex items-center justify-between border border-transparent py-2 ${
            showSelectFile ? "border-b-gray-300 mb-2" : ""
          }`}
        >
          <span>{nameFile}</span>
          <div className="flex items-center gap-2">
            Preview:
            <ToggleBtn
              on={isPreview}
              onClick={() => setIsPreview(!isPreview)}
            ></ToggleBtn>
            <span
              className="font-bold text-purpleText56 cursor-pointer"
              onClick={() => setShowSelectFile(!showSelectFile)}
            >
              Replace
            </span>
          </div>
        </div>
      )}
      {showSelectFile && (
        <>
          <InputSelectFile
            urlChosenImage={urlChosenVideo}
            setUrlChosenImage={setUrlChosenVideo}
          ></InputSelectFile>
        </>
      )}
      <Button
        className="block bg-primaryBlack text-white font-bold mt-2 ml-auto"
        borderNone
        onClick={updateVideoLecture}
        disabled={!urlChosenVideo && isPreview === preview}
      >
        Save Video
      </Button>
    </>
  );
};

export default Video;
