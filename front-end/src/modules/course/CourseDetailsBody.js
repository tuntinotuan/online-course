import React, { Fragment } from "react";
import CourseContent from "./CourseContent";
import CourseDescription from "./CourseDescription";
import CourseVideoOverview from "./CourseVideoOverview";
import CourseFeaturedReview from "./CourseFeaturedReview";
import CourseReviewList from "./CourseReviewList";
import CourseInstructor from "./CourseInstructor";
import { useSelector } from "react-redux";

const CourseDetailsBody = ({
  scroll,
  leftWidth = "w-[690px]",
  leftBlockCenter = false,
  hiddenRightBlock = false,
  overHidden = false,
  padding = "",
}) => {
  return (
    <section
      className={`py-8 h-auto ${padding} ${
        overHidden ? "overflow-hidden" : ""
      }`}
    >
      <div className="page-container-fluid relative h-full flex items-start gap-10">
        <div
          className={`h-full ${leftWidth} ${leftBlockCenter ? "mx-auto" : ""}`}
        >
          <Left></Left>
        </div>
        {!hiddenRightBlock && (
          <div className="flex flex-col justify-end h-full w-[350px] px-2">
            <Right scroll={scroll}></Right>
          </div>
        )}
      </div>
    </section>
  );
};

function Left() {
  const { course } = useSelector((state) => state.course);
  const { video_lists } = course;
  return (
    <Fragment>
      {video_lists?.length > 0 && (
        <CourseContent videoData={video_lists}></CourseContent>
      )}
      <CourseDescription></CourseDescription>
      <CourseFeaturedReview></CourseFeaturedReview>
      <CourseReviewList course={course}></CourseReviewList>
      <CourseInstructor></CourseInstructor>
    </Fragment>
  );
}
function Right({ scroll }) {
  return (
    <Fragment>
      <CourseVideoOverview offset={scroll}></CourseVideoOverview>
    </Fragment>
  );
}

export default CourseDetailsBody;
