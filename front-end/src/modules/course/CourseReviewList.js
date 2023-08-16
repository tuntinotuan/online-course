import React from "react";
import Button from "../../components/button/Button";
import CourseHeading from "./CourseHeading";
import { SpecialCircle } from "../../components/special";
import ReviewCard from "../../components/review/ReviewCard";
import { ConvertUsernameShortly } from "../../utils/processing-string";

const CourseReviewList = () => {
  return (
    <section className="my-5">
      <div className="flex items-center gap-2">
        <img
          src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
          alt=""
          className="w-5 h-5 mb-5"
        />
        <CourseHeading>4.3 course rating</CourseHeading>
        <SpecialCircle className="bg-grayA6 mb-5" size={7}></SpecialCircle>
        <CourseHeading>19K ratings</CourseHeading>
      </div>
      <div className="grid grid-cols-2 gap-8">
        {dataLocal.map((items) => (
          <ReviewCard
            name={items.name}
            shortName={ConvertUsernameShortly(items.name)}
            time={items.time}
            content={items.text}
          ></ReviewCard>
        ))}
      </div>
      <Button className="font-bold">Show all reviews</Button>
    </section>
  );
};

export default CourseReviewList;

const dataLocal = [
  {
    name: "Vishwas M.",
    time: "3 weeks ago",
    text: `This course was put together a long time ago and I would expect the author's team to notify changes in the codes (in some way) to newer learners. I personally had to spend a lot of time finding the right syntax/codes, and would appreciate a heads-up (displaying the year a particular course was designed) before enrolling for it.`,
  },
  {
    name: "Eugene B.",
    time: "a weeks ago",
    text: `This was a great intro for Python and Machine learning. After finishing the course I really appreciate him providing discounts, as well as the links to his notes whether we would like to self study or not! It really makes it feel like he cares for our learning `,
  },
  {
    name: "Hsuan-Wen C.",
    time: "a weeks ago",
    text: `Jose is an excellent instructor. He broke down complex concepts to easy to understand explanations. However, I think there are two things this course can be improved:
    1) Update the content to reflect Python 3
    2) Include a final project requirement for students to get hands-on experience`,
  },
  {
    name: "Khotibul U.",
    time: "two weeks ago",
    text: `Good course, i finished this course and every lecturer that i learned is understandable and feel so easy to do, hopefully this course help me up to reach my goal on data analyst`,
  },
];
