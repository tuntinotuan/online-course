import React from "react";
import { Link } from "react-router-dom";

const TooltipEmpty = ({ title, go, onClick = () => {} }) => {
  return (
    <div className="flex flex-col items-center gap-4 p-4">
      <p className="text-grayA6 font-semibold">{title}</p>
      <Link to="/" className="text-purpleText56 font-bold" onClick={onClick}>
        {go}
      </Link>
    </div>
  );
};

export default TooltipEmpty;
