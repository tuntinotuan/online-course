import React, { useEffect, useState } from "react";
import CourseAttention from "../modules/course/CourseAttention";
import CourseDetailsOverview from "../modules/course/CourseDetailsOverview";
import CourseDetailsBody from "../modules/course/CourseDetailsBody";

const CourseDetailsPage = () => {
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.pageYOffset);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <section>
      <CourseAttention></CourseAttention>
      <CourseDetailsOverview></CourseDetailsOverview>
      <CourseDetailsBody scroll={offset}></CourseDetailsBody>
    </section>
  );
};

export default CourseDetailsPage;
