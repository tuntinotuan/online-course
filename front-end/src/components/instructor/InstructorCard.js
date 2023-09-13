import React from "react";
import { strapiPathBE } from "../../utils/constants";
import { ButtonUserAvatar } from "../button";
import { Link } from "react-router-dom";
import { mediumRatingsCourse } from "../../utils/processing-number";
import { totalStudents } from "../../utils/processing-array";
import { useTranslation } from "react-i18next";

const InstructorCard = ({ data }) => {
  const { t } = useTranslation("category");
  return (
    <Link
      to={`/user/${data.id}`}
      className={`flex items-start gap-4 border border-b-gray-300 p-4 hover:bg-grayF7`}
    >
      <ButtonUserAvatar
        avatar={data?.avatar && `${strapiPathBE}${data?.avatar?.url}`}
        shortName={data?.username}
        size={64}
      ></ButtonUserAvatar>
      <div className="flex flex-col gap-1">
        <h2 className="popular-instructor text-base font-bold max-w-[200px] truncate">
          {data?.username}
        </h2>
        {data?.traning && <p className="text-sm">{data?.traning}</p>}
        <div className="flex items-center gap-1">
          <p className="text-base text-star font-bold">
            {mediumRatingsCourse(data?.courses)?.toFixed(1)}
          </p>
          <img
            src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
            alt=""
            className="w-3 h-3"
          />
          <p className="text-xs text-textstart">{t("instructor rating")}</p>
        </div>
        <div className="flex items-center gap-1 text-xs">
          <p className="font-bold">{totalStudents(data?.courses) || "1280"}</p>
          <p className="text-slate-800">{t("students")}</p>
        </div>
        <div className="flex items-center gap-1 text-xs">
          <p className="font-bold">{data?.courses?.length}</p>
          <p className="text-slate-800">{t("courses")}</p>
        </div>
      </div>
    </Link>
  );
};

export default InstructorCard;
