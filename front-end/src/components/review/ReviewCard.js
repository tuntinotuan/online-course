import React from "react";
import ButtonUserAvatar from "../button/ButtonUserAvatar";

const ReviewCard = ({ name, shortName, time, content }) => {
  return (
    <div className="pb-5">
      <div className="flex items-center justify-between border border-transparent border-t-gray-300 py-5">
        <div className="flex items-center gap-5">
          <ButtonUserAvatar
            shortName={shortName}
            size={40}
            className="cursor-text"
          ></ButtonUserAvatar>
          <div>
            <h2 className="text-base font-bold">{name}</h2>
            <div className="flex items-center gap-2">
              <Star></Star>
              <p className="text-xs font-bold text-grayA6">{time}</p>
            </div>
          </div>
        </div>
      </div>
      <p className="course-rating text-grayA6 line-clamp-5">{content}</p>
      {content.length > 260 && (
        <button className="font-bold border border-transparent border-b-primaryBlack cursor-pointer mt-2">
          Show more
        </button>
      )}
    </div>
  );
};

function Star({ amount }) {
  return (
    <div className="flex items-center gap-1">
      {Array(5)
        .fill(null)
        .map((index) => (
          <img
            src="https://cdn-icons-png.flaticon.com/128/1828/1828884.png"
            alt=""
            className="w-[11px] h-[11px]"
            key={index}
          />
        ))}
    </div>
  );
}

export default ReviewCard;
