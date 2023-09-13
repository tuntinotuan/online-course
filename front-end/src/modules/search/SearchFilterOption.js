import React from "react";
import ToggleFilter from "../../components/toggle/ToggleFilter";
import FilterRating from "../../components/filter/FilterRating";
import FilterPrice from "../../components/filter/FilterPrice";
import { useTranslation } from "react-i18next";

const SearchFilterOption = () => {
  const { t } = useTranslation("search");
  return (
    <>
      <ToggleFilter title={t("ratings")} initial>
        <FilterRating></FilterRating>
      </ToggleFilter>
      <ToggleFilter title={t("price")}>
        <FilterPrice></FilterPrice>
      </ToggleFilter>
    </>
  );
};

export default SearchFilterOption;
