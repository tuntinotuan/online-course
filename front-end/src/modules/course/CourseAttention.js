import React from "react";
import ButtonStatusTag from "../../components/button/ButtonStatusTag";
import CourseRating from "../../components/course/CourseRating";

const CourseAttention = ({ data }) => {
  return (
    <section
      className={`fixed top-0 left-0 right-0 bg-primaryBlack text-white py-2 px-3
        shadow-lg overflow-hidden z-40`}
    >
      <div
        className={`flex items-center justify-between w-auto overflow-hidden`}
      >
        <div>
          <h1 className="text-sm font-bold">
            {data.title ||
              "Learning Python for Data Analysis and Visualization Ver 1"}
          </h1>
          <div className="flex items-center gap-2">
            <ButtonStatusTag className="bg-tagYellow">
              Bestseller
            </ButtonStatusTag>
            <CourseRating
              rating={data?.reviews}
              totalRating={data?.reviews?.length}
              className="text-purpleTextC0"
              secondary
            ></CourseRating>
            <p>197,152 students</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseAttention;
