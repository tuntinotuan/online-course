import React, { useState } from "react";
import { IconSearch } from "../icon";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import {
  setWishlistLoading,
  setWishlistSearch,
} from "../../redux-toolkit/wishlist/wishlistSlice";
import { useSearchParams } from "react-router-dom";
import { processingSearchArray } from "../../utils/processing-array";

const SearchWishlist = ({ size = 40 }) => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();
  const { myWishlist } = useSelector((state) => state.wishlist);
  const { courses } = myWishlist;
  const { handleSubmit } = useForm({ mode: "onChange" });
  const [filter, setFilter] = useState("");
  const handleChangeInput = (e) => {
    setFilter(e.target.value);
  };
  const submitSearchWishlist = async () => {
    if (!filter) return;
    dispatch(setWishlistLoading(true));
    try {
      const newWishlist = await processingSearchArray(courses, filter);
      dispatch(setWishlistSearch(newWishlist));
      searchParams.set("q-wishlist", filter);
      setSearchParams(searchParams);
      setTimeout(() => {
        dispatch(setWishlistLoading(false));
      }, 200);
    } catch (error) {
      console.log("Search wishlist in error", error);
      dispatch(setWishlistLoading(false));
    }
  };
  return (
    <form
      onSubmit={handleSubmit(submitSearchWishlist)}
      className="flex items-center my-8"
      style={{ height: size }}
    >
      <input
        type="text"
        placeholder="Search my course"
        onChange={handleChangeInput}
        className="w-[200px] h-full placeholder:text-grayA6 border border-primaryBlack py-3 px-4"
      />
      <button
        className="flex items-center justify-center h-full bg-primaryBlack text-white disabled:cursor-wait disabled:opacity-60 disabled:blur-[0.5px]"
        style={{ width: size }}
        onClick={submitSearchWishlist}
        disabled={!filter}
      >
        <IconSearch size={size / 2}></IconSearch>
      </button>
    </form>
  );
};

export default SearchWishlist;
