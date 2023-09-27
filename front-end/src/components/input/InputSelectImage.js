import React, { useRef } from "react";
import Image from "../image/Image";

const InputSelectImage = ({ url, setUrlChosenImage }) => {
  const ref = useRef();
  const chosenFile = () => {
    const file = ref.current.files[0];
    if (file) file.preview = URL.createObjectURL(file);
    setUrlChosenImage(file);
  };
  return (
    <div className="flex items-center justify-center w-full h-[250px] bg-gray-100">
      <input
        type="file"
        className="hidden"
        id="select-course-img"
        accept="image/*"
        onChange={chosenFile}
        ref={ref}
      />
      <label
        className="block h-[150px] w-[220px] mx-auto cursor-pointer"
        htmlFor="select-course-img"
      >
        <Image url={url || `/img-upload.png 2x`}></Image>
      </label>
    </div>
  );
};

export default InputSelectImage;
