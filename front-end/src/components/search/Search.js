import React, { useState } from "react";
import { IconSearch } from "../icon";

const Search = ({
  width = "w-[562px]",
  bgColor = "bg-grayF7",
  borderNone = false,
  rounded = "rounded-full",
}) => {
  const [filter, setFilter] = useState("");
  const handleChangeInput = (e) => {
    setFilter(e.target.value);
  };
  return (
    <div
      className={`flex items-center ${width} h-[48px] ${
        borderNone ? "" : "border border-primaryBlack"
      } ${rounded} ${bgColor} px-3 py-2`}
    >
      <IconSearch
        className={filter !== "" ? "cursor-pointer" : "text-grayA6 cursor-wait"}
      ></IconSearch>
      <input
        type="text"
        placeholder="Search for anything"
        className={`w-full h-full px-4 placeholder:text-grayA6 ${bgColor} outline-none`}
        onChange={handleChangeInput}
      />
    </div>
  );
};

export default Search;
