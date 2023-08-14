import React from "react";
import TooltipCover from "../tooltip/TooltipCover";
import ButtonUserAvatar from "../button/ButtonUserAvatar";
import { Link } from "react-router-dom";
import IconEarth from "../icon/IconEarth";
import { SpecialCountCircle } from "../special";

const Sidebar = ({ hovered }) => {
  return (
    <TooltipCover hovered={hovered} className="top-[106%] w-[260px]">
      <Link className="w-full flex items-center gap-2 border border-transparent border-b-gray-300 p-4 group">
        <ButtonUserAvatar size={66} className="text-2xl"></ButtonUserAvatar>
        <div>
          <h1 className="text-base font-bold transition-all group-hover:text-purpleText56">
            Tuan Nguyen
          </h1>
          <p className="text-xs text-grayA6">tuan48594@donga.edu.vn</p>
        </div>
      </Link>
      <div className="w-full flex flex-col items-center gap-4 border border-transparent border-b-gray-300 p-4">
        <Link className="w-full transition-all hover:text-purpleText56">
          My learning
        </Link>
        <Link className="flex items-center justify-between w-full transition-all hover:text-purpleText56">
          My cart
          <SpecialCountCircle></SpecialCountCircle>
        </Link>
        <Link className="w-full transition-all hover:text-purpleText56">
          My wishlist
        </Link>
        <Link className="w-full transition-all hover:text-purpleText56">
          Edit profile
        </Link>
      </div>
      <Link className="w-full flex items-center justify-between gap-2 border border-transparent border-b-gray-300 p-4 group">
        <span className="transition-all group-hover:text-purpleText56">
          Language
        </span>
        <div className="flex items-center gap-2">
          English<IconEarth size={18}></IconEarth>
        </div>
      </Link>
      <div className="w-full flex flex-col items-center gap-4 border border-transparent border-b-gray-300 p-4">
        <Link className="w-full transition-all hover:text-purpleText56">
          Help
        </Link>
        <Link className="w-full transition-all hover:text-purpleText56">
          Log out
        </Link>
      </div>
    </TooltipCover>
  );
};

export default Sidebar;
