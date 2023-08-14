import React from "react";
import { SpecialCircle } from "../special";

const CourseSumaryItems = ({ children, hidden = false }) => {
  return (
    <span className="flex items-center gap-2">
      {!hidden && <SpecialCircle></SpecialCircle>}
      <span>{children}</span>
    </span>
  );
};

export default CourseSumaryItems;
