import React, { useEffect } from "react";
import RadioCustom from "../radio/RadioCustom";
import CourseStar from "../course/CourseStar";
import { useSearchParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  handleSearchCourse,
  handleSearchCourseOnly,
} from "../../redux-toolkit/course/courseHandlerThunk";
import { useTranslation } from "react-i18next";

const FilterRating = () => {
  const { coursesSearchOnly } = useSelector((state) => state.course);
  let fourDotFive = [];
  let four = [];
  let threeDotFive = [];
  let three = [];
  coursesSearchOnly.forEach((item) => {
    if (item.star >= 4.5) fourDotFive.push(item);
    if (item.star >= 4) four.push(item);
    if (item.star >= 3.5) threeDotFive.push(item);
    if (item.star >= 3) three.push(item);
  });
  const defineValue = [
    {
      value: 4.5,
      total: fourDotFive.length,
    },
    {
      value: 4,
      total: four.length,
    },
    {
      value: 3.5,
      total: threeDotFive.length,
    },
    {
      value: 3,
      total: three.length,
    },
  ];
  const dispatch = useDispatch();
  const [params] = useSearchParams();
  const keyword = params.get("keyword");
  const rating = params.get("ratings");
  const sortBy = params.get("sort-by");
  const [searchParams, setSearchParams] = useSearchParams();
  useEffect(() => {
    dispatch(handleSearchCourseOnly({ keyword }));
  }, [keyword, dispatch]);

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
          key={item.value}
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
  const { t } = useTranslation("search");
  return (
    <div
      className="flex items-center gap-2 cursor-pointer py-2"
      onClick={onClick}
    >
      <RadioCustom on={on}></RadioCustom>
      <CourseStar rating={value} size={15} readOnly></CourseStar>
      <span>
        {value === 3 || value === 4 ? `${value}.0` : value} & {t("up")}{" "}
        <span className="text-grayA6">{`(${total.toLocaleString(
          "en-US"
        )})`}</span>
      </span>
    </div>
  );
}

export default FilterRating;
