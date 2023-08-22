import React from "react";
import RadioCustom from "../radio/RadioCustom";
import CourseStar from "../course/CourseStar";

const defineValue = [
  {
    value: 4.5,
    total: 3412,
  },
  {
    value: 4,
    total: 5621,
  },
  {
    value: 3.5,
    total: 134,
  },
  {
    value: 3,
    total: 662,
  },
];

const FilterRating = () => {
  return (
    <div>
      {defineValue.map((item, index) => (
        <RatingItem
          on={index === 0}
          value={item.value}
          total={item.total}
        ></RatingItem>
      ))}
    </div>
  );
};

function RatingItem({ on, value, total = 2707 }) {
  return (
    <div className="flex items-center gap-2 cursor-pointer py-2">
      <RadioCustom on={on}></RadioCustom>
      <CourseStar rating={value} readOnly></CourseStar>
      <span>
        {value} & up{" "}
        <span className="text-grayA6">{`(${total.toLocaleString(
          "en-US"
        )})`}</span>
      </span>
    </div>
  );
}

export default FilterRating;
