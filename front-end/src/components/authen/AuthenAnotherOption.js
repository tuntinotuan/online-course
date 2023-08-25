import React from "react";
import { SpecialTextUnderline } from "../special";

const AuthenAnotherOption = ({
  className,
  textNormal = "This is normal text",
  textUnderline = "This is underline text",
  textUnderlineClassName,
  to = "",
  onClick,
}) => {
  return (
    <h3 className={className}>
      {textNormal}
      <SpecialTextUnderline
        className={`text-purpleText56 font-bold ${textUnderlineClassName}`}
        text={textUnderline}
        to={to}
        onClick={onClick}
      ></SpecialTextUnderline>
    </h3>
  );
};

export default AuthenAnotherOption;
