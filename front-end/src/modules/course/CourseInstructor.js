import React, { useState } from "react";
import { IconArrowDown } from "../../components/icon";
import { useSelector } from "react-redux";
import ButtonUserAvatar from "../../components/button/ButtonUserAvatar";
import { Link } from "react-router-dom";
import { strapiPathBE } from "../../utils/constants";

const CourseInstructor = () => {
  const [showMore, setShowMore] = useState(false);
  const { course } = useSelector((state) => state.course);
  const { user } = course;
  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <section className="py-5">
      <h1 className="text-2xl font-bold mb-5">Instructor</h1>
      <Link
        to={`/user/${user?.id}`}
        className="text-xl font-bold text-purpleText56 border border-transparent border-b-primaryBlack"
      >
        {user?.username || "Jose Portilla"}
      </Link>
      <h3 className="opacity-50 mt-2">
        Head of Data Science at Pierian Training
      </h3>
      <div className="profile flex items-center gap-5 py-2">
        <div className="w-28 h-28">
          <ButtonUserAvatar
            avatar={user?.avatar && `${strapiPathBE}${user?.avatar?.url}`}
            shortName={user?.username}
            size={112}
            to={`/user/${user?.id}`}
          ></ButtonUserAvatar>
        </div>
        <div>
          <div className="flex items-center gap-4 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z"
                clipRule="evenodd"
              />
            </svg>
            <p className="">{course.star || 4.9} Instructor Rating</p>
          </div>
          <div className="flex items-center gap-4 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M9.664 1.319a.75.75 0 01.672 0 41.059 41.059 0 018.198 5.424.75.75 0 01-.254 1.285 31.372 31.372 0 00-7.86 3.83.75.75 0 01-.84 0 31.508 31.508 0 00-2.08-1.287V9.394c0-.244.116-.463.302-.592a35.504 35.504 0 013.305-2.033.75.75 0 00-.714-1.319 37 37 0 00-3.446 2.12A2.216 2.216 0 006 9.393v.38a31.293 31.293 0 00-4.28-1.746.75.75 0 01-.254-1.285 41.059 41.059 0 018.198-5.424zM6 11.459a29.848 29.848 0 00-2.455-1.158 41.029 41.029 0 00-.39 3.114.75.75 0 00.419.74c.528.256 1.046.53 1.554.82-.21.324-.455.63-.739.914a.75.75 0 101.06 1.06c.37-.369.69-.77.96-1.193a26.61 26.61 0 013.095 2.348.75.75 0 00.992 0 26.547 26.547 0 015.93-3.95.75.75 0 00.42-.739 41.053 41.053 0 00-.39-3.114 29.925 29.925 0 00-5.199 2.801 2.25 2.25 0 01-2.514 0c-.41-.275-.826-.541-1.25-.797a6.985 6.985 0 01-1.084 3.45 26.503 26.503 0 00-1.281-.78A5.487 5.487 0 006 12v-.54z"
                clipRule="evenodd"
              />
            </svg>
            <p className="">9 Reviews</p>
          </div>
          <div className="flex items-center gap-4 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path d="M7 8a3 3 0 100-6 3 3 0 000 6zM14.5 9a2.5 2.5 0 100-5 2.5 2.5 0 000 5zM1.615 16.428a1.224 1.224 0 01-.569-1.175 6.002 6.002 0 0111.908 0c.058.467-.172.92-.57 1.174A9.953 9.953 0 017 18a9.953 9.953 0 01-5.385-1.572zM14.5 16h-.106c.07-.297.088-.611.048-.933a7.47 7.47 0 00-1.588-3.755 4.502 4.502 0 015.874 2.636.818.818 0 01-.36.98A7.465 7.465 0 0114.5 16z" />
            </svg>
            <p className="">9 Students</p>
          </div>
          <div className="flex items-center gap-4 mb-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-4 h-4"
            >
              <path
                fillRule="evenodd"
                d="M2 10a8 8 0 1116 0 8 8 0 01-16 0zm6.39-2.908a.75.75 0 01.766.027l3.5 2.25a.75.75 0 010 1.262l-3.5 2.25A.75.75 0 018 12.25v-4.5a.75.75 0 01.39-.658z"
                clipRule="evenodd"
              />
            </svg>
            <p className="">
              {user?.courses.length > 0 ? user?.courses.length : 9} Courses
            </p>
          </div>
        </div>
      </div>
      <div
        className={`relative opacity-80 ${
          showMore ? "" : "max-h-[150px] "
        } overflow-hidden`}
      >
        {!showMore && (
          <div className="absolute h-1/2 bottom-0 left-0 right-0 bg-gradient-to-t from-[rgba(255,255,255,0.9)]"></div>
        )}
        Jose Marcial Portilla has a BS and MS in Mechanical Engineering from
        Santa Clara University and years of experience as a professional
        instructor and trainer for Data Science, Machine Learning and Python
        Programming. He has publications and patents in various fields such as
        microfluidics, materials science, and data science. Over the course of
        his career he has developed a skill set in analyzing data and he hopes
        to use his experience in teaching and data science to help other people
        learn the power of programming, the ability to analyze data, and the
        skills needed to present the data in clear and beautiful visualizations.
        Currently he works as the Head of Data Science for Pierian Training and
        provides in-person data science and python programming training courses
        to employees working at top companies, including General Electric,
        Cigna, The New York Times, Credit Suisse, McKinsey and many more. Feel
        free to check out the website link to find out more information about
        training offerings.
      </div>
      <div
        className="flex items-center gap-2 font-bold text-purpleText56 hover:opacity-90 cursor-pointer mt-5"
        onClick={handleShowMore}
      >
        <span className="">{showMore ? "Show less" : "Show more"}</span>
        <IconArrowDown
          className={`${showMore ? "-rotate-180" : ""} transition-all`}
          size={12}
        ></IconArrowDown>
      </div>
    </section>
  );
};

export default CourseInstructor;
