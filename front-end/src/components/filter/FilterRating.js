import React, { useEffect } from "react";
import RadioCustom from "../radio/RadioCustom";
import CourseStar from "../course/CourseStar";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  handleGetCourseRating,
  handleSearchCourse,
} from "../../redux-toolkit/course/courseHandlerThunk";

const FilterRating = () => {
  const { courseAllRatings } = useSelector((state) => state.course);
  const { fourDotFive, four, threeDotFive, three } = courseAllRatings;
  const defineValue = [
    {
      value: 4.5,
      total: fourDotFive,
    },
    {
      value: 4,
      total: four,
    },
    {
      value: 3.5,
      total: threeDotFive,
    },
    {
      value: 3,
      total: three,
    },
  ];
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const keyword = params.get("keyword");
  const rating = params.get("ratings");
  const sortBy = params.get("sort-by");
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    dispatch(handleGetCourseRating());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  useEffect(() => {
    dispatch(handleSearchCourse({ keyword, sortBy, rating }));
  }, [keyword, sortBy, rating, dispatch]);
  const handleClickFilterStar = (value) => {
    searchParams.set("ratings", value);
    setSearchParams(searchParams);
  };
  return (
    <div>
      {defineValue.map((item) => (
        <RatingItem
          on={item.value === Number(rating)}
          value={item.value}
          total={item.total}
          onClick={() => handleClickFilterStar(item.value)}
        ></RatingItem>
      ))}
    </div>
  );
};

function RatingItem({ on, value, total = 2707, onClick = () => {} }) {
  return (
    <div
      className="flex items-center gap-2 cursor-pointer py-2"
      onClick={onClick}
    >
      <RadioCustom on={on}></RadioCustom>
      <CourseStar rating={value} readOnly></CourseStar>
      <span>
        {value === 3 || value === 4 ? `${value}.0` : value} & up{" "}
        <span className="text-grayA6">{`(${total.toLocaleString(
          "en-US"
        )})`}</span>
      </span>
    </div>
  );
}

export default FilterRating;
