import React from "react";
import SearchFilterOption from "./SearchFilterOption";
import SearchList from "./SearchList";
import { useSelector } from "react-redux";
import Pagination from "@mui/material/Pagination";
import { useSearchParams } from "react-router-dom";

const SearchBody = () => {
  const [param] = useSearchParams();
  const page = param.get("page");
  const [searchParams, setSearchParams] = useSearchParams();
  const { showFilter } = useSelector((state) => state.global);
  const { searchPagination } = useSelector((state) => state.course);
  const { pageCount } = searchPagination;
  const handleChangePage = (event, value) => {
    searchParams.set("page", value);
    setSearchParams(searchParams);
  };
  return (
    <div className="flex items-start w-full">
      <div
        className={`w-[300px] transition-all duration-500 ${
          showFilter ? "mr-12" : "-ml-[300px]"
        }`}
      >
        <SearchFilterOption></SearchFilterOption>
      </div>
      <div
        className={`flex flex-col items-center w-full ${
          showFilter ? "" : "flex-1"
        }`}
      >
        <SearchList></SearchList>
        <Pagination
          page={Number(page) || 1}
          count={pageCount}
          color="secondary"
          className="mt-5"
          onChange={handleChangePage}
        />
      </div>
    </div>
  );
};

export default SearchBody;
