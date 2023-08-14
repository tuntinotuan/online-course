import React from "react";
import TooltipCover from "../tooltip/TooltipCover";
import { Link } from "react-router-dom";

const NotificationToggle = ({ hovered }) => {
  return (
    <TooltipCover hovered={hovered} className="w-[350px] p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold">Notifications</h1>
        <span className="font-bold text-purpleText56 cursor-pointer">
          Settings
        </span>
      </div>
      <Link to="" className="block w-full text-center mt-5">
        No notifications.
      </Link>
    </TooltipCover>
  );
};

export default NotificationToggle;
