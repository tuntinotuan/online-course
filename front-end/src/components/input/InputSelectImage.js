import React from "react";
import { strapiPathBE } from "../../utils/constants";
import Image from "../image/Image";

const InputSelectImage = ({ url }) => {
  return (
    <div className="flex items-center justify-center w-full h-[250px] bg-gray-100">
      <input
        type="file"
        className="hidden"
        id="select-course-img"
        accept="image/*"
      />
      <label
        className="block w-[220px] mx-auto cursor-pointer"
        htmlFor="select-course-img"
      >
        <Image
          url={(url && `${strapiPathBE}${url}`) || `/img-upload.png 2x`}
        ></Image>
      </label>
    </div>
  );
};

export default InputSelectImage;
