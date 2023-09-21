import React from "react";
import CourseCardRow from "../../components/course/CourseCardRow";
import { useSelector } from "react-redux";

const SearchList = () => {
  const { coursesSearch } = useSelector((state) => state.course);
  return (
    <div className="w-full">
      {coursesSearch &&
        coursesSearch.map((item) => (
          <CourseCardRow data={item} key={item.id}></CourseCardRow>
        ))}
    </div>
  );
};

export default SearchList;
