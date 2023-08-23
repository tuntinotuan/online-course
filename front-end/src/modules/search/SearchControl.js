import React from "react";
import { Button } from "../../components/button";
import { IconFilter } from "../../components/icon";
import FilterSortBy from "../../components/filter/FilterSortBy";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowFilter } from "../../redux-toolkit/globalSlice";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchControl = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const { coursesSearch } = useSelector((state) => state.course);
  const { showFilter } = useSelector((state) => state.global);
  const handleShowFilter = () => {
    dispatch(toggleShowFilter(!showFilter));
  };
  const handleClearFilters = () => {
    navigate(`/courses/search?keyword=${params.get("keyword")}`);
  };
  return (
    <div className="flex items-center justify-between h-[60px] mb-5">
      <div className="flex items-center gap-2 h-full">
        <Button
          className="flex items-center justify-center h-full font-bold gap-2"
          onClick={handleShowFilter}
        >
          <IconFilter></IconFilter>
          Filter {params.size > 1 ? `(${params.size - 1})` : ""}
        </Button>
        <FilterSortBy></FilterSortBy>
        {params.size > 1 && (
          <span
            className="text-base font-bold cursor-pointer"
            onClick={handleClearFilters}
          >
            Clear filters
          </span>
        )}
      </div>
      <h1 className="text-base font-bold text-grayA6">
        {coursesSearch.length.toLocaleString("en-US") || 0} results
      </h1>
    </div>
  );
};

export default SearchControl;
