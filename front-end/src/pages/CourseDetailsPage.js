import React, { useEffect, useState } from "react";
import CourseAttention from "../modules/course/CourseAttention";
import CourseDetailsOverview from "../modules/course/CourseDetailsOverview";
import CourseDetailsBody from "../modules/course/CourseDetailsBody";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { handleGetSingleCourse } from "../redux-toolkit/course/courseHandlerThunk";

const CourseDetailsPage = () => {
  const dispatch = useDispatch();
  const { course } = useSelector((state) => state.course);
  const { courseId } = useParams();
  const [offset, setOffset] = useState(0);
  useEffect(() => {
    const onScroll = () => setOffset(window.scrollY);
    // clean up code
    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    dispatch(handleGetSingleCourse(courseId));
  }, [courseId, dispatch]);

  useEffect(() => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <section>
      <CourseAttention data={course}></CourseAttention>
      <CourseDetailsOverview data={course}></CourseDetailsOverview>
      <CourseDetailsBody scroll={offset}></CourseDetailsBody>
    </section>
  );
};

export default CourseDetailsPage;
