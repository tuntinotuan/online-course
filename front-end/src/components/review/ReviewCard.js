import React from "react";
import ButtonUserAvatar from "../button/ButtonUserAvatar";
import CourseStar from "../course/CourseStar";
import { strapiPathBE } from "../../utils/constants";

const ReviewCard = ({ name, avatar, shortName, time, rating, content }) => {
  return (
    <div className="pb-5">
      <div className="flex items-center justify-between border border-transparent border-t-gray-300 py-5">
        <div className="flex items-center gap-5">
          <ButtonUserAvatar
            avatar={avatar && `${strapiPathBE}${avatar?.url}`}
            shortName={shortName}
            size={40}
            className="cursor-text"
          ></ButtonUserAvatar>
          <div>
            <h2 className="text-base font-bold">{name}</h2>
            <div className="flex items-center gap-2">
              <CourseStar rating={rating || 5} readOnly></CourseStar>
              <p className="text-xs font-bold text-grayA6">{time}</p>
            </div>
          </div>
        </div>
      </div>
      <p className="course-rating text-grayA6 line-clamp-5">{content}</p>
      {content?.length > 260 && (
        <button className="font-bold border border-transparent border-b-primaryBlack cursor-pointer mt-2">
          Show more
        </button>
      )}
    </div>
  );
};

export default ReviewCard;
