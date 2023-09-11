import React from "react";
import { Link, useParams, useSearchParams } from "react-router-dom";

const defaultValue = [
  {
    title: "Most popular",
    to: "",
  },
  {
    title: "New",
    to: "createdAt:desc",
  },
  {
    title: "Beginner Favorites",
    to: "total_reviews:desc",
  },
];

const MenuBorderBottom = ({ defineValue = defaultValue }) => {
  const { topicName } = useParams();
  const [param] = useSearchParams();
  const filter = param.get("filter");
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
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default MenuBorderBottom;
