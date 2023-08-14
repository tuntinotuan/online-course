import React from "react";
import { Link } from "react-router-dom";

const SpecialTextUnderline = ({
  className,
  text = "This is special text underline :D",
  to = "",
}) => {
  return (
    <Link to={to}>
      <p
        className={`inline-block border border-transparent border-b-current mx-1 cursor-pointer ${className}`}
      >
        {text}
      </p>
    </Link>
  );
};

export default SpecialTextUnderline;
