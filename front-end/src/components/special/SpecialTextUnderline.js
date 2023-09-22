import React from "react";
import { Link } from "react-router-dom";

const SpecialTextUnderline = ({
  className,
  text = "This is special text underline :D",
  to = "",
  onClick,
}) => {
  const renderElement = () => (
    <p
      className={`inline-block border border-transparent border-b-current mx-1 cursor-pointer ${className}`}
      onClick={onClick}
    >
      {text}
    </p>
  );
  if (to)
    return (
      <Link to={to} onClick={onClick}>
        {renderElement()}
      </Link>
    );
  return renderElement();
};

export default SpecialTextUnderline;
