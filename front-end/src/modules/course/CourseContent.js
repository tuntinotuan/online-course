import React from "react";
import { useState } from "react";
import CourseSumary from "../../components/course/CourseSumary";
import CourseContentList from "./CourseContentList";
import CourseHeading from "./CourseHeading";
import { processQuantityOfLectures } from "../../utils/processing-array";

const CourseContent = ({
  videoData,
  topFlex = "flex items-center justify-between",
}) => {
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
            { value: videoData?.length || 15, title: "sections" },
            {
              value: processQuantityOfLectures(videoData) || 110,
              title: "lectures",
            },
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
      {videoData?.map((lesson) => (
        <CourseContentList
          key={lesson.id}
          listData={lesson}
          toggleAll={toggleAll}
        ></CourseContentList>
      ))}
    </section>
  );
};

export default CourseContent;
