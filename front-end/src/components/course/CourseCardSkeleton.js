import React from "react";

const CourseCardSkeleton = () => {
  return (
    <div className="animate-pulse">
      <div className="course-card relative h-full select-none -z-1 cursor-pointer group">
        <div className="h-[135px] bg-grayA6 mb-2"></div>
        <div>
          <h3 className="h-5 bg-grayA6 text-base course-title font-bold line-clamp-2">
            {/* {title} */}
          </h3>
          <p className="h-3 w-1/2 bg-grayA6 course-instructer text-xs text-grayA6 truncate my-2"></p>
          <div className="flex items-center text-base gap-2 mb-2">
            <span className="h-5 w-20 bg-grayA6 font-bold"></span>
            <span className="h-5 w-20 bg-grayA6 line-through"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseCardSkeleton;
