import React from "react";

const RadioCustom = ({ on }) => {
  return (
    <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-primaryBlack dark:border-darkTextCB">
      <div
        className={`w-[8px] h-[8px] bg-primaryBlack dark:bg-darkTextCB rounded-full transition-all ${
          on ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      ></div>
    </div>
  );
};

export default RadioCustom;
