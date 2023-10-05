import React from "react";
import { currency } from "../../utils/constants";
import IconTag from "../icon/IconTag";

const CoursePrice = ({
  className,
  price = "666,666",
  tag = false,
  minus = false,
}) => {
  return (
    <h1 className={`flex items-center font-bold ${className}`}>
      {minus && <span className="mr-1">-</span>}
      {currency}
      <span className="ml-[0.5px]">{price}</span>
      {tag && <IconTag size={18} className="ml-1"></IconTag>}
    </h1>
  );
};

export default CoursePrice;
