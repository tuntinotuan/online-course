import React from "react";
import Search from "./Search";

const SearchMobile = ({ onClick }) => {
  return (
    <div className="fixed inset-0 bg-white">
      <div className="flex items-center shadow-md">
        <Search
          width="w-full"
          bgColor="bg-white"
          borderNone
          rounded=""
        ></Search>
        <div
          className="flex items-center justify-center w-16 h-10 bg-white rounded-full"
          onClick={onClick}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default SearchMobile;
