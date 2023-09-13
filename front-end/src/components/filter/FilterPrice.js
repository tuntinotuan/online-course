import React from "react";
import RadioCustom from "../radio/RadioCustom";
import { useSearchParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

const FilterPrice = () => {
  const [params] = useSearchParams();
  const sortBy = params.get("sort-by");
  const [searchParams, setSearchParams] = useSearchParams();
  const { t } = useTranslation("search");
  const defineValue = [
    {
      title: "ascending price",
      value: "original_price:asc",
    },
    {
      title: "descending price",
      value: "original_price:desc",
    },
  ];
  const handleClickFilterPrice = (value) => {
    searchParams.set("sort-by", value);
    setSearchParams(searchParams);
  };
  return (
    <div>
      {defineValue.map((item) => (
        <SortPriceItem
          title={t(item.title)}
          on={item.value === sortBy}
          onClick={() => handleClickFilterPrice(item.value)}
        />
      ))}
    </div>
  );
};

function SortPriceItem({ title, on, onClick = () => {} }) {
  return (
    <div
      className="flex items-center gap-2 py-2 cursor-pointer"
      onClick={onClick}
    >
      <RadioCustom on={on}></RadioCustom>
      <span>{title}</span>
    </div>
  );
}

export default FilterPrice;
