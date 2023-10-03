import React from "react";
import Input from "../input/Input";
import Button from "../button/Button";

const Edit = ({
  className,
  inputPlaceholder,
  childrenTitle,
  onClickCancel,
  submitSave = () => {},
  btnTitle,
  control,
}) => {
  return (
    <div className={`border border-primaryBlack bg-white p-2 m-2 ${className}`}>
      <div className="flex items-center gap-2 mb-2">
        {childrenTitle}
        <Input
          name="title"
          control={control}
          placeholder={inputPlaceholder}
          size={20}
          autoFocus
        ></Input>
      </div>
      <div className="flex items-center justify-end gap-2">
        <span className="font-bold cursor-pointer" onClick={onClickCancel}>
          Cancel
        </span>
        <Button
          className="bg-primaryBlack text-white font-bold"
          borderNone
          onClick={submitSave}
        >
          {btnTitle}
        </Button>
      </div>
    </div>
  );
};

export default Edit;
