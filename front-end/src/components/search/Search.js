import React, { useState } from "react";
import { IconSearch } from "../icon";
import { useDispatch } from "react-redux";
import { handleSearchCourse } from "../../redux-toolkit/course/courseHandlerThunk";
import { useForm } from "react-hook-form";
import { useNavigate, useSearchParams } from "react-router-dom";

const Search = ({
  width = "w-[562px]",
  bgColor = "bg-grayF7",
  borderNone = false,
  rounded = "rounded-full",
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [params] = useSearchParams();
  let keyword = params.get("keyword");
  const { handleSubmit } = useForm({ mode: "onChange" });
  const [filter, setFilter] = useState("");
  const handleChangeInput = (e) => {
    setFilter(e.target.value);
  };

  const handleSubmitSearch = () => {
    if (!filter) return null;
    filter && dispatch(handleSearchCourse({ keyword }));
    navigate(`/courses/search?keyword=${filter}`);
  };
  return (
    <form
      onSubmit={handleSubmit(handleSubmitSearch)}
      className={`flex items-center ${width} h-[48px] ${
        borderNone ? "" : "border border-primaryBlack"
      } ${rounded} ${bgColor} px-3 py-2`}
    >
      <IconSearch
        className={filter !== "" ? "cursor-pointer" : "text-grayA6 cursor-wait"}
        onClick={handleSubmitSearch}
      ></IconSearch>
      <input
        type="text"
        placeholder="Search for anything"
        defaultValue={keyword}
        className={`w-full h-full px-4 placeholder:text-grayA6 ${bgColor} outline-none`}
        onChange={handleChangeInput}
      />
    </form>
  );
};

export default Search;
