import React from "react";
import { Button } from "../../components/button";
import { CourseList } from "../../components/course";
import { dataCourses } from "../../data/dataConfig";

const HomeSelectionItem = ({ data }) => {
  return (
    <div className="p-8 border border-slate-200 overflow-hidden">
      <h1 className="text-2xl font-bold mb-4">
        Expand your career opportunities with Python
      </h1>
      <p className={`preview-text text-base mb-4 max-w-[800px] line-clamp-3`}>
        Take one of Udemy's range of Python courses and learn how to code using
        this incredibly useful language. Its simple syntax and readability makes
        Python perfect for Flask, Django, data science, and machine learning.
        You'll learn how to build everything from games to sites to apps. Choose
        from a range of courses that will appeal to. Lorem, ipsum dolor sit amet
        consectetur adipisicing elit. Nisi error perferendis quas odit voluptas
        saepe consectetur, corporis laudantium animi accusantium. Lorem ipsum
        dolor sit amet consectetur adipisicing elit. Minus ut atque veniam iure
        quasi deserunt eum recusandae quae perspiciatis, expedita ex aliquid
        alias. Soluta nam, blanditiis molestiae enim dolore velit.
      </p>
      <Button className="font-bold mb-8">Explore Python</Button>
      <CourseList data={data || dataCourses}></CourseList>
    </div>
  );
};

export default HomeSelectionItem;
