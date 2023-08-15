import React from "react";
import Image from "../../components/image/Image";
import { ButtonPlayVideo } from "../../components/button";

const CourseVideo = ({ className }) => {
  return (
    <div className={`relative cursor-pointer ${className}`}>
      <div className="flex items-center justify-center absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] z-10">
        <ButtonPlayVideo></ButtonPlayVideo>
      </div>
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-base font-bold text-white z-10">
        Preview this course
      </p>
      <Image url="https://img-b.udemycdn.com/course/240x135/258316_55e9_12.jpg"></Image>
    </div>
  );
};

export default CourseVideo;
