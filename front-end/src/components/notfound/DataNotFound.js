import React from "react";

const DataNotFound = () => {
  return (
    <div className={`flex flex-col gap-2 text-center`}>
      <img
        srcSet="/universe-notfound.png 2x"
        alt=""
        className="mx-auto w-[250px]"
      />
      <h1 className="text-5xl font-bold">No results found</h1>
      <div className="text-base">
        <p>We couldn't find what you searched for.</p>
        <p>Try searching again.</p>
      </div>
    </div>
  );
};

export default DataNotFound;
