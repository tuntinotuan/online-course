import React from "react";
import { IconCheck } from "../icon";

const SpecialTextWithCheckIcon = ({ text }) => {
  return (
    <div className="flex items-start gap-5 mb-2">
      <IconCheck size={15}></IconCheck>
      <p className="flex-1">{text}</p>
    </div>
  );
};

export default SpecialTextWithCheckIcon;
