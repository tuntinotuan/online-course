import React from "react";
import SearchFilterOption from "./SearchFilterOption";
import SearchList from "./SearchList";
import { useSelector } from "react-redux";

const SearchBody = () => {
  const { showFilter } = useSelector((state) => state.global);
  return (
    <div className="flex items-start w-full">
      <div
        className={`w-[300px] transition-all duration-500 ${
          showFilter ? "mr-12" : "-ml-[300px]"
        }`}
      >
        <SearchFilterOption></SearchFilterOption>
      </div>
      <div className={`${showFilter ? "" : "flex-1"}`}>
        <SearchList></SearchList>
      </div>
    </div>
  );
};

export default SearchBody;
