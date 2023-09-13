import React from "react";
import { useTranslation } from "react-i18next";
import { Link, useParams, useSearchParams } from "react-router-dom";

const defaultValue = [
  {
    title: "most popular",
    to: "",
  },
  {
    title: "new",
    to: "createdAt:desc",
  },
  {
    title: "beginner favorites",
    to: "total_reviews:desc",
  },
];

const MenuBorderBottom = ({ defineValue = defaultValue }) => {
  const { topicName } = useParams();
  const [param] = useSearchParams();
  const filter = param.get("filter");
  const { t } = useTranslation("category");
  return (
    <div className="flex items-center gap-5 border border-transparent border-b-gray-300 mb-4">
      {defineValue.map((item, index) => (
        <Link
          to={`/topic/${topicName}?filter=${item.to}`}
          className={`text-base text-grayA6 font-bold pb-2 ${
            filter === item.to || (!filter && index === 0)
              ? "text-primaryBlack"
              : ""
          }`}
          style={{
            borderBottom:
              (filter === item.to || (!filter && index === 0)) && "2px solid",
          }}
          key={item.title}
        >
          {t(item.title)}
        </Link>
      ))}
    </div>
  );
};

export default MenuBorderBottom;
