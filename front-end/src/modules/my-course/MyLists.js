import React from "react";
import { Link } from "react-router-dom";

const MyLists = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 pt-20 mb-48">
      <h2 className="text-xl font-bold">
        Organize and access your courses faster!
      </h2>
      <p className="text-base">
        <Link
          to={"/my-course/learning"}
          className="border border-transparent border-b-purpleText56 text-purpleText56 font-bold mr-1"
        >
          Go to the All Courses tab
        </Link>
        to create a list
      </p>
    </div>
  );
};

export default MyLists;
