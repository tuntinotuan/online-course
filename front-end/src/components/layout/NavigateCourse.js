import React from "react";
import { IconArrowRight } from "../icon";
import { Link } from "react-router-dom";

const NavigateCourse = ({
  active = "Most popular",
  array = ["New", "Trending"],
  arrow = false,
}) => {
  return (
    <nav className={`mb-4`}>
      <ul className={`flex items-center text-purpleTextC0 font-bold`}>
        <Link to={`/topic/${active}`} className={`cursor-pointer`}>
          {active}
        </Link>
        {array.map((items) => (
          <Link
            to={`/topic/${items}`}
            className={`flex items-center cursor-pointer`}
            key={items}
          >
            {arrow && (
              <IconArrowRight
                className="mx-2 text-white"
                size={12}
                stroke={2.5}
              ></IconArrowRight>
            )}
            {items}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default NavigateCourse;
