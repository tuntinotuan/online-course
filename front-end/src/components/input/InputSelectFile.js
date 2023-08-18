import React, { useRef } from "react";
import { Button } from "../button";
// import { useDispatch, useSelector } from "react-redux";
// import { setUrlImage } from "../../redux-toolkit/globalSlice";

const InputSelectFile = ({
  name,
  urlChosenImage,
  setUrlChosenImage = () => {},
}) => {
  // const dispatch = useDispatch();
  // const { urlChosenImage } = useSelector((state) => state.global);
  const ref = useRef();
  const chosenFile = () => {
    const file = ref.current.files[0];
    if (file) file.preview = URL.createObjectURL(file);
    setUrlChosenImage(file);
    // dispatch(setUrlImage(file));
  };
  return (
    <div className="relative">
      <input
        id={name}
        name={name}
        type="file"
        className="hidden"
        accept="image/*"
        onChange={chosenFile}
        ref={ref}
      />
      <label
        htmlFor={name}
        className="flex items-center justify-between bg-grayF7 text-base border border-primaryBlack cursor-pointer pl-4"
      >
        <p className="max-w-[450px] truncate">
          {urlChosenImage?.name || "No file selected"}
        </p>
        <Button
          className="text-base font-bold bg-white border-transparent border-l-primaryBlack"
          onClick={() => ref.current.click()}
        >
          Upload image
        </Button>
      </label>
    </div>
  );
};

export default InputSelectFile;
