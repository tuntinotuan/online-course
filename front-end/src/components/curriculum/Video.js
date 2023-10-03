import React, { useState } from "react";
import InputSelectFile from "../input/InputSelectFile";
import { Button } from "../button";
import { useDispatch } from "react-redux";
import { handleUpdateVideoLecture } from "../../redux-toolkit/lecture/lectureHandlerThunk";

const Video = ({ nameFile, videoId }) => {
  const dispatch = useDispatch();
  const [showSelectFile, setShowSelectFile] = useState(false);
  const [urlChosenVideo, setUrlChosenVideo] = useState();
  const updateVideoLecture = () => {
    dispatch(handleUpdateVideoLecture({ videoId, urlChosenVideo }));
    setShowSelectFile(false);
  };
  return (
    <>
      <div
        className={`flex items-center justify-between border border-transparent py-2 ${
          showSelectFile ? "border-b-gray-300 mb-2" : ""
        }`}
      >
        <span>{nameFile}</span>
        <span
          className="font-bold text-purpleText56 cursor-pointer"
          onClick={() => setShowSelectFile(!showSelectFile)}
        >
          Replace
        </span>
      </div>
      {showSelectFile && (
        <>
          <InputSelectFile
            urlChosenImage={urlChosenVideo}
            setUrlChosenImage={setUrlChosenVideo}
          ></InputSelectFile>
          <Button
            className="block bg-primaryBlack text-white font-bold mt-2 ml-auto"
            borderNone
            onClick={updateVideoLecture}
            disabled={!urlChosenVideo}
          >
            Save Video
          </Button>
        </>
      )}
    </>
  );
};

export default Video;
