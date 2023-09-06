import React from "react";
import LogoUdemyDark from "../../logo/LogoUdemyDark";
import { Link } from "react-router-dom";

const HeaderLearnOnline = ({ title }) => {
  return (
    <header className="flex items-center bg-primaryBlack text-white border border-transparent border-b-gray-600 py-3 px-4">
      <LogoUdemyDark></LogoUdemyDark>
      <Link className="text-base border border-transparent border-l-gray-600 hover:text-gray-300 px-5 mx-5">
        {title}
      </Link>
    </header>
  );
};

export default HeaderLearnOnline;
