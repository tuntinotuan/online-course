import React from "react";
import { Link } from "react-router-dom";

const SpecialToastEmail = ({ text, to }) => {
  return (
    <div>
      {text && text}{" "}
      {to && (
        <Link
          className="font-bold underline text-purpleText56 hover:text-opacity-80"
          target={"_blank"}
          to="https://mail.google.com/"
        >
          {to}
        </Link>
      )}
    </div>
  );
};

export default SpecialToastEmail;
