import React, { useRef } from "react";
import { Button } from "../button";
import { useTranslation } from "react-i18next";

const InputSelectFile = ({
  typeImage = false,
  name,
  urlChosenImage,
  setUrlChosenImage = () => {},
}) => {
  const { t } = useTranslation("profile");
  const ref = useRef();
  const chosenFile = () => {
    const file = ref.current.files[0];
    if (file) file.preview = URL.createObjectURL(file);
    setUrlChosenImage(file);
  };
  return (
    <div className="relative">
      <input
        id={name}
        name={name}
        type="file"
        className="hidden"
        accept={typeImage && "image/*"}
        onChange={chosenFile}
        ref={ref}
      />
      <label
        htmlFor={name}
        className="flex items-center justify-between bg-grayF7 dark:bg-darkMain text-base border border-primaryBlack cursor-pointer pl-4"
      >
        <p className="max-w-[450px] truncate">
          {urlChosenImage?.name || t("no file selected")}
        </p>
        <Button
          className="text-base font-bold bg-white dark:bg-darkMain border-transparent border-l-primaryBlack"
          onClick={() => ref.current.click()}
        >
          {t("upload file")}
        </Button>
      </label>
    </div>
  );
};

export default InputSelectFile;
