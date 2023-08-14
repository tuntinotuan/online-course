import React from "react";
import { IconPlay } from "../../components/icon";
import Image from "../../components/image/Image";

const CourseVideo = ({ className }) => {
  return (
    <div className={`relative cursor-pointer ${className}`}>
      <div className="flex flex-col items-center justify-center absolute inset-0 bg-gradient-to-t from-[rgba(0,0,0,0.8)] z-10">
        <div className="flex items-center justify-center w-16 h-16 bg-white text-primaryBlack rounded-full mb-5 z-10">
          <IconPlay size={36}></IconPlay>
        </div>
      </div>
      <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-base font-bold text-white z-10">
        Preview this course
      </p>
      <Image url="https://img-b.udemycdn.com/course/240x135/396876_cc92_7.jpg"></Image>
    </div>
  );
};

export default CourseVideo;
