import React from "react";
import { useSearchParams } from "react-router-dom";

const FilterSortBy = () => {
  const [params] = useSearchParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = params.get("sort-by");
  const handleClickSortBy = (e) => {
    searchParams.set("sort-by", e.target.value);
    setSearchParams(searchParams);
  };
  return (
    <select
      name="filter-option"
      id="filter"
      className="h-full text-base border border-primaryBlack px-3 cursor-pointer"
      onChange={handleClickSortBy}
      value={sortBy || "most-relevant"}
    >
      <option value="most-relevant">Most Relevant</option>
      <option value="most-reviewed">Most Reviewed</option>
      <option value="star:desc">Highest Rated</option>
      <option value="createdAt:desc">Newest</option>
    </select>
  );
};

export default FilterSortBy;
