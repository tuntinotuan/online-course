import React from "react";
import { useState } from "react";
import CourseSumary from "../../components/course/CourseSumary";
import CourseContentList from "./CourseContentList";
import CourseHeading from "./CourseHeading";

const CourseContent = ({ topFlex = "flex items-center justify-between" }) => {
  const [toggleAll, setToggleAll] = useState(false);
  const handeToggleAll = () => {
    setToggleAll(!toggleAll);
  };
  return (
    <section>
      <CourseHeading>Course content</CourseHeading>
      <div className={`${topFlex} last:mb-2`}>
        <CourseSumary
          obj={[
            { value: 15, title: "sections" },
            { value: 110, title: "lectures" },
            { value: "21h 5m", title: "total length" },
          ]}
          className="text-base mb-3"
        ></CourseSumary>
        <span
          className="text-contribute font-bold cursor-pointer text-purpleText56 hover:opacity-90"
          onClick={handeToggleAll}
        >
          {toggleAll ? "Collapse" : "Expand"} all section
        </span>
      </div>
      {Array(4)
        .fill(null)
        .map((index) => (
          <CourseContentList
            toggleAll={toggleAll}
            key={index}
          ></CourseContentList>
        ))}
    </section>
  );
};

export default CourseContent;
