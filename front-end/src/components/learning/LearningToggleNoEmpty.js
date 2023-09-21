import React from "react";
import { Button } from "../button";
import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import CartToggleItems from "../cart/CartToggleItems";
import { useTranslation } from "react-i18next";

const LearningToggleNoEmpty = ({ onClick = () => {} }) => {
  const { pathname } = useLocation();
  const { myPurchasedCourses } = useSelector((state) => state.purchased);
  const { t } = useTranslation();
  return (
    <div className="w-full">
      <div className="max-h-[420px] overflow-y-auto">
        {myPurchasedCourses &&
          myPurchasedCourses.map((items) => (
            <CartToggleItems
              key={items.id}
              id={items.id}
              image={items?.overview_image?.url}
              title={items.title}
              lineClamp2="line-clamp-3"
              toSlug="course-dashboard-redirect"
              onClick={onClick}
            ></CartToggleItems>
          ))}
      </div>
      {pathname !== "/my-course/learning" && (
        <div className="p-4 shadow-[0_-15px_20px_-15px_rgba(0,0,0,0.3)]">
          <Button
            className="bg-primaryBlack text-white font-bold py-4"
            borderNone
            full
            to="/my-course/learning"
            onClick={onClick}
          >
            {t("go to my learning")}
          </Button>
        </div>
      )}
    </div>
  );
};

export default LearningToggleNoEmpty;
