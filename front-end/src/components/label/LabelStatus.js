import React from "react";

const LabelStatus = ({ children, type = "default" }) => {
  let styleClassName = "text-white bg-grayA6";
  switch (type) {
    case "draft":
      styleClassName = "bg-grayA6 text-white";
      break;
    case "public":
      styleClassName = "bg-green-100 text-green-500";
      break;
    case "reject":
      styleClassName = "bg-red-100 text-red-500";
      break;
    default:
      break;
  }
  return (
    <span
      className={`inline-block text-xs font-bold uppercase py-1 px-2 ${styleClassName}`}
    >
      {children}
    </span>
  );
};

export default LabelStatus;
