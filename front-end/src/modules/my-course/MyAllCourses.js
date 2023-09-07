import React from "react";
import { CourseCardHasReview } from "../../components/course";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const MyAllCourses = () => {
  const { myPurchasedCourses } = useSelector((state) => state.purchased);
  const { courses } = myPurchasedCourses;
  return (
    <div className="py-5">
      {courses?.length > 0 ? (
        <div className="grid grid-cols-4 gap-4">
          {courses?.map((course) => (
            <CourseCardHasReview data={course}></CourseCardHasReview>
          ))}
        </div>
      ) : (
        <div className="text-center mt-10 pb-40">
          <h1 className="text-lg font-bold">
            Start learning from over 210,000 courses today.
          </h1>
          <p className="text-base mt-4">
            When you purchase a course, it will appear here.{" "}
            <Link
              to="/"
              className="font-bold text-purpleText56 border border-transparent border-b-purpleText56"
            >
              Browse now.
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default MyAllCourses;
