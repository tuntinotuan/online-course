import React from "react";
import { Button } from "../button";
import { useSelector } from "react-redux";
import { IconPen } from "../icon";

const InputEmailWithIcon = () => {
  const { userData } = useSelector((state) => state.user);
  return (
    <div className="relative w-full">
      <label className="flex items-center justify-between text-base border border-primaryBlack pl-4">
        <span className="max-w-[450px] truncate">
          Your email address is{" "}
          <span className="font-bold">
            {userData?.email || "ACB@gmail.com"}
          </span>
        </span>
        <Button
          className="text-base font-bold bg-white border-transparent border-l-primaryBlack py-[11px]"
          onClick={() => {}}
        >
          <IconPen></IconPen>
        </Button>
      </label>
    </div>
  );
};

export default InputEmailWithIcon;
