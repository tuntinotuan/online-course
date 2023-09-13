import React from "react";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FilterSortBy = () => {
  const [params] = useSearchParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = params.get("sort-by");
  const { t } = useTranslation("search");
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
      <option value="most-relevant">{t("most relevant")}</option>
      <option value="total_reviews:desc">{t("most reviewed")}</option>
      <option value="star:desc">{t("highest rated")}</option>
      <option value="createdAt:desc">{t("newest")}</option>
    </select>
  );
};

export default FilterSortBy;
