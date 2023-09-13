import React from "react";
import TooltipCover from "../tooltip/TooltipCover";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

const NotificationToggle = ({ hovered }) => {
  const { t } = useTranslation();
  return (
    <TooltipCover hovered={hovered} className="w-[350px] p-4">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-bold">{t("notifications")}</h1>
        <span className="font-bold text-purpleText56 cursor-pointer">
          {t("settings")}
        </span>
      </div>
      <Link to="" className="block w-full text-center mt-5">
        {t("no notifications.")}
      </Link>
    </TooltipCover>
  );
};

export default NotificationToggle;
