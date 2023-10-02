import React, { useState } from "react";
import { IconSearch } from "../icon";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";

const SearchMyAnything = ({ size = 40 }) => {
  const navigate = useNavigate();
  const [param] = useSearchParams();
  const search = param.get("search");
  const [filter, setFilter] = useState("");
  const { handleSubmit } = useForm();
  const handleChangeInput = (e) => {
    setFilter(e.target.value);
  };
  const submitSearch = () => {
    navigate(`?search=${filter}`);
  };
  return (
    <form
      onSubmit={handleSubmit(submitSearch)}
      className="flex items-center"
      style={{ height: size }}
    >
      <input
        type="text"
        placeholder="Search my course"
        defaultValue={search}
        onChange={handleChangeInput}
        className="w-[200px] h-full dark:bg-darkMain placeholder:text-grayA6 border border-primaryBlack py-3 px-4"
      />
      <button
        className="flex items-center justify-center h-full bg-primaryBlack text-white disabled:cursor-wait disabled:opacity-60 disabled:blur-[0.5px]"
        style={{ width: size }}
        onClick={submitSearch}
        disabled={!filter}
      >
        <IconSearch size={size / 2}></IconSearch>
      </button>
    </form>
  );
};

export default SearchMyAnything;
