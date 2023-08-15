import React from "react";
import { IconSearch } from "../icon";

const SearchWishlist = ({ size = 40 }) => {
  return (
    <div className="flex items-center my-8" style={{ height: size }}>
      <input
        type="text"
        placeholder="Search my course"
        className="w-[200px] h-full placeholder:text-grayA6 border border-primaryBlack py-3 px-4"
      />
      <button
        className="flex items-center justify-center h-full bg-primaryBlack text-white"
        style={{ width: size }}
      >
        <IconSearch size={size / 2}></IconSearch>
      </button>
    </div>
  );
};

export default SearchWishlist;
