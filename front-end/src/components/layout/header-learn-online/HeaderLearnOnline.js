import React from "react";
import LogoUdemyDark from "../../logo/LogoUdemyDark";
import { Link } from "react-router-dom";

const HeaderLearnOnline = ({ data }) => {
  return (
    <header className="flex items-center bg-primaryBlack text-white border border-transparent border-b-gray-600 px-4">
      <LogoUdemyDark></LogoUdemyDark>
      <Link
        to={`/course/${data?.id}`}
        className="text-base border border-transparent border-l-gray-600 hover:text-gray-300 px-5 mx-5"
      >
        {data?.title}
      </Link>
    </header>
  );
};

export default HeaderLearnOnline;
