import React from "react";
import ToggleFilter from "../../components/toggle/ToggleFilter";
import FilterRating from "../../components/filter/FilterRating";
import FilterPrice from "../../components/filter/FilterPrice";

const SearchFilterOption = () => {
  return (
    <>
      <ToggleFilter title="Ratings" initial>
        <FilterRating></FilterRating>
      </ToggleFilter>
      <ToggleFilter title="Price">
        <FilterPrice></FilterPrice>
      </ToggleFilter>
    </>
  );
};

export default SearchFilterOption;
