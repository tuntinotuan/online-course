import React from "react";
import InstructorCreateCard from "../InstructorCreateCard";
import OndemandVideoIcon from "@mui/icons-material/OndemandVideo";
import ListAltIcon from "@mui/icons-material/ListAlt";

const InstructorCreateStep1 = () => {
  return (
    <>
      <h1 className="text-3xl font-bold text-center mx-auto">
        First, let's find out what type of course you're marking.
      </h1>
      <div className="flex items-center gap-5">
        <InstructorCreateCard
          icon={<OndemandVideoIcon fontSize="large"></OndemandVideoIcon>}
          title="Course"
          sub="Create rich learning experience with the help of video lectures,
              quizzes, coding exercises, etc."
          isActive
        ></InstructorCreateCard>
        <InstructorCreateCard
          icon={<ListAltIcon fontSize="large"></ListAltIcon>}
          title="Practice Test"
          sub="Help students prepare for certification exams by providing practice questions."
        ></InstructorCreateCard>
      </div>
    </>
  );
};

export default InstructorCreateStep1;
