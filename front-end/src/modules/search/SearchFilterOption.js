import React from "react";
import ToggleFilter from "../../components/toggle/ToggleFilter";
import FilterRating from "../../components/filter/FilterRating";

const SearchFilterOption = () => {
  return (
    <>
      <ToggleFilter title="Ratings" initial>
        <FilterRating></FilterRating>
      </ToggleFilter>
      <ToggleFilter title="Price">Price...</ToggleFilter>
    </>
  );
};

export default SearchFilterOption;
