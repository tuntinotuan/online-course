import React from "react";
import IconArrowLeft from "../icon/IconArrowLeft";

const NavigateCourse = ({
  active = "Most popular",
  array = ["New", "Trending"],
  arrow = false,
}) => {
  return (
    <nav className={`mb-4`}>
      <ul className={`flex items-center text-purpleTextC0 font-bold`}>
        <li className={`cursor-pointer`}>{active}</li>
        {array.map((items) => (
          <li className={`flex items-center cursor-pointer`}>
            {arrow && (
              <IconArrowLeft
                className="mx-2 text-white"
                size={12}
                stroke={2.5}
              ></IconArrowLeft>
            )}
            {items}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavigateCourse;
