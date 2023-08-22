import React from "react";

const FilterSortBy = () => {
  return (
    <select
      name="filter-option"
      id="filter"
      className="h-full text-base border border-primaryBlack px-3 cursor-pointer"
    >
      <option value="most-relevant">Most Relevant</option>
      <option value="most-reviewed">Most Reviewed</option>
      <option value="hightest-rated">Highest Rated</option>
      <option value="newest">Newest</option>
    </select>
  );
};

export default FilterSortBy;
