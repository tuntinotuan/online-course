import React from "react";
import Button from "../../components/button/Button";
import NavigateCourse from "../../components/layout/NavigateCourse";
import ButtonStatusTag from "../../components/button/ButtonStatusTag";
import IconExclamation from "../../components/icon/IconExclamation";
import IconEarth from "../../components/icon/IconEarth";
import IconCard from "../../components/icon/IconCard";
import CourseVideo from "./CourseVideo";
import CourseRating from "../../components/course/CourseRating";
import { Link } from "react-router-dom";

const CourseDetailsOverview = ({ data }) => {
  const newTopic = data?.topic;
  return (
    <section className="bg-primaryBlack text-white py-8 overflow-hidden">
      <div className="page-container-fluid">
        <div className="max-w-[690px]">
          <NavigateCourse
            active={newTopic?.industry?.category?.name}
            array={[newTopic?.industry?.name, newTopic?.name]}
            arrow
          ></NavigateCourse>
          <CourseVideo className="my-5 hidden"></CourseVideo>
          <div>
            <h1 className="text-3xl font-bold">
              {data.title ||
                "Learning Python for Data Analysis and Visualization Ver 1"}
            </h1>
            <p className="text-lg my-3">
              {data.subtitle ||
                "Learn python and how to use it to analyze,visualize and present data. Includes tons of sample code and hours of video!"}
            </p>
            <div className={"flex items-center gap-2"}>
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
            <div className="my-2">
              <p>
                Created by
                <Link
                  to={`/user/${data?.user?.id}`}
                  className="text-purpleTextC0 underline ml-1"
                >
                  {data?.user?.username || "Jose Portilla"}
                </Link>
              </p>
            </div>
            <div className={`flex items-center gap-3 text-sm`}>
              <p className="flex items-center gap-1">
                <IconExclamation size={17}></IconExclamation>
                Last <span>{data.updatedAt || "updated 9/2019"}</span>
              </p>
              <p className="flex items-center gap-1">
                <IconEarth size={16}></IconEarth>
                English
              </p>
              <p className="flex items-center gap-1">
                <IconCard size={16}></IconCard>
                English [Auto], Indonesian [Auto] ,
                <p className="text-purpleTextC0 underline cursor-pointer">
                  5 more
                </p>
              </p>
            </div>
            <div className="hidden">
              <h1 className="text-4xl font-bold mb-3 mt-16">
                <span className="underline">đ</span>1,799,000
              </h1>
              <Button
                className="text-base font-bold bg-btnadd text-white mb-2"
                full
                borderNone
              >
                Add to Cart
              </Button>
              <p className="text-xs text-center mt-3 opacity-80">
                30-Day Money-Back Guarantee
              </p>
              <div
                className={`flex items-center justify-between text-sm font-bold opacity-90 mt-3 px-16`}
              >
                <p className="border border-transparent border-b-white">
                  Share
                </p>
                <p className="border border-transparent border-b-white">
                  Gift this course
                </p>
                <p className="border border-transparent border-b-white">
                  Apply Coupon
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CourseDetailsOverview;
