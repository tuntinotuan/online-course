import React from "react";
import { useState } from "react";
import SpecialTextWithDots from "../../components/special/SpecialTextWithDots";
import { IconArrowDown } from "../../components/icon";
import CourseHeading from "./CourseHeading";
import ReactMarkdown from "react-markdown";
const dataLocal = [
  "You'll get a full understanding of how to program with Python and how to use it in conjunction with scientific computing modules and libraries to analyze data.",
  "You will also get lifetime access to over 100 example python code notebooks, new and updated videos, as well as future additions of various data analysis projects that you can use for a portfolio to show future employers! ",
  "By the end of this course you will: ",
  "- Have an understanding of how to program in Python. ",
  "- Know how to create and manipulate arrays using numpy and Python. ",
  "- Know how to use pandas to create and analyze data sets. ",
  "- Know how to use matplotlib and seaborn libraries to create beautiful data ,visualization. ",
  "- Have an amazing portfolio of example python data analysis projects! ",
  "- Have an understanding of Machine Learning and SciKit Learn!",
  "With 100+ lectures and over 20 hours of information and more than 100 example python code notebooks, you will be excellently prepared for a future in data science! ",
];
const CourseDescription = ({ description }) => {
  const [showMore, setShowMore] = useState(false);
  const handleShowMore = () => {
    setShowMore(!showMore);
  };
  return (
    <section className="h-full">
      <div
        className={`react-mark-down relative mt-8 overflow-hidden ${
          showMore ? "h-full" : "max-h-[300px]"
        }`}
      >
        {!showMore && (
          <div className="absolute h-1/2 bottom-0 left-0 right-0 bg-gradient-to-t from-white dark:from-darkMain"></div>
        )}
        <CourseHeading>Description</CourseHeading>
        <p className="font-bold mb-2">
          This course will give you the resources to learn python and
          effectively use it analyze and visualize data! Start your career in
          Data Science!
        </p>
        {dataLocal.map((items) => (
          <p className="text-slate-600 dark:text-darkTextCB mb-2" key={items}>
            {items}
          </p>
        ))}
        <p className="text-slate-600 dark:text-darkTextCB mt-5">
          Please make sure you read the entire page to understand if the course
          is the correct version for you.
        </p>
        <SpecialTextWithDots
          title="Who this course is for:"
          data={[
            "Anyone interested in learning more about python, data science, or data visualizations.",
            "Anyone interested about the rapidly expanding world of data science!",
          ]}
          styleContent="dark:text-darkTextCB"
        ></SpecialTextWithDots>
        <ReactMarkdown>{description}</ReactMarkdown>
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

export default CourseDescription;
