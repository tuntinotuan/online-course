import React, { useRef, useState } from "react";
import { Button } from "../button";

const InputSelectFile = () => {
  const ref = useRef();
  const [file, setFile] = useState(null);

  function chosenFile() {
    setFile(ref.current.files[0]);
  }
  return (
    <div className="relative">
      <input
        type="file"
        className="hidden"
        id="selectFile"
        onChange={chosenFile}
        ref={ref}
      />
      <label
        htmlFor="selectFile"
        className="flex items-center justify-between bg-grayF7 text-base border border-primaryBlack cursor-pointer pl-4"
      >
        {file === null ? "No file selected" : "1 file selected"}
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
