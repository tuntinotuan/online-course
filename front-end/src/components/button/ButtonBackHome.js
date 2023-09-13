import React from "react";
import { Link } from "react-router-dom";
import IconArrowRight from "../icon/IconArrowRight";

const ButtonBackHome = ({ className, children, to = "" }) => {
  return (
    <Link to={to} className="mt-2">
      <button
        className={`relative text-base text-white bg-purpleTextA4 rounded transition-all duration-500 hover:shadow-md hover:pr-8 py-4 px-5 group ${className}`}
      >
        <span>{children}</span>
        <IconArrowRight
          className={`absolute top-1/2 right-3 -translate-y-1/2 transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:right-2`}
          stroke={2.5}
          size={14}
        ></IconArrowRight>
      </button>
    </Link>
  );
};

export default ButtonBackHome;
