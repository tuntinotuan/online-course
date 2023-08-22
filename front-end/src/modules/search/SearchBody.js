import React from "react";
import SearchFilterOption from "./SearchFilterOption";
import SearchList from "./SearchList";
import { useSelector } from "react-redux";

const SearchBody = () => {
  const { showFilter } = useSelector((state) => state.global);
  return (
    <div className="grid grid-cols-12 w-full gap-12">
      <div
        className={`col-span-3 transition-all duration-500 ${
          showFilter ? "" : "-translate-x-[500px]"
        }`}
      >
        <SearchFilterOption></SearchFilterOption>
      </div>
      <div className={`${showFilter ? "col-span-9" : "col-span-full"}`}>
        <SearchList></SearchList>
      </div>
    </div>
  );
};

export default SearchBody;
