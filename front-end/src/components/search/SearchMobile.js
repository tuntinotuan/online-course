import React from "react";
import Search from "./Search";
import { IconClose } from "../icon";

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
          <IconClose></IconClose>
        </div>
      </div>
    </div>
  );
};

export default SearchMobile;
