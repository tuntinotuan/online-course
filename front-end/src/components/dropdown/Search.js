import React from "react";
import { useDropdown } from "./dropdown-context";

const Search = ({ placeholder, ...props }) => {
  const { onChange } = useDropdown();
  return (
    <div className="p-2">
      <input
        type="text"
        placeholder={placeholder}
        className="py-2 px-3 outline-none w-full border border-gray-200 rounded"
        onChange={onChange}
        {...props}
      />
    </div>
  );
};

export default Search;
