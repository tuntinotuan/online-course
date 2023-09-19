import React from "react";
import CourseHeading from "./CourseHeading";
import Image from "../../components/image/Image";

const CourseFeaturedReview = () => {
  return (
    <div className="border border-gray-300 dark:border-primaryBlack p-6 my-6">
      <CourseHeading>Featured review</CourseHeading>
      <div className="flex items-start gap-2">
        <div className="w-16 h-16">
          <Image
            url="https://img-b.udemycdn.com/user/200_H/28267614_d9b9.jpg"
            className="rounded-full"
          ></Image>
        </div>
        <div>
          <h1 className="text-base font-bold">Kenan H.</h1>
          <p>8 courses</p>
          <p>4 reviews</p>
        </div>
      </div>
      <div>
        <div className="star"></div>
        <p className="text-grayA6">3 years ago</p>
      </div>
      <p>
        It was very helpfull. To speed my reviews on topics I listened to Andrew
        at 2x. I am greatfull of being able to watch things all over again.
        Because at least for me, it really took me a bunch of time to start
        connecting all topics. So I watched videos in different orders depending
        what I wanted to review.
      </p>
    </div>
  );
};

export default CourseFeaturedReview;
