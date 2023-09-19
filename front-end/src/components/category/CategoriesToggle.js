import React from "react";
import TooltipCover from "../tooltip/TooltipCover";
import CategoriesSkeleton from "./CategoriesSkeleton";
import { useSelector } from "react-redux";
import CategoryItem from "./CategoryItem";
import { useTranslation } from "react-i18next";

const CategoriesToggle = ({ hovered, onClick }) => {
  const {
    listCategories,
    listIndustries,
    listTopics,
    loadingCategories,
    loadingTopics,
  } = useSelector((state) => state.category);
  const { t } = useTranslation("category");
  return (
    <TooltipCover hovered={hovered} className="-left-1/4 top-[108%] !w-[260px]">
      {loadingCategories &&
        Array(10)
          .fill(null)
          .map((item, index) => (
            <CategoriesSkeleton key={index}></CategoriesSkeleton>
          ))}
      {!loadingCategories && (
        <ul className="w-full min-h-[500px] py-2">
          {listCategories?.map((category) => (
            <CategoryItem
              to={category.name}
              title={category.name}
              industries={category.industries}
              category
              onClick={onClick}
            ></CategoryItem>
          ))}
        </ul>
      )}
      {listIndustries.length > 0 && (
        <ul className="absolute -top-[1px] left-full w-[250px] min-h-[500px] bg-white dark:bg-darkMain shadow-md border border-gray-300 dark:border-primaryBlack py-2">
          {listIndustries?.map((industry) => (
            <CategoryItem
              to={industry.name}
              title={industry.name}
              industries={industry}
              topics
              onClick={onClick}
            ></CategoryItem>
          ))}
          {listTopics && (
            <ul className="absolute -top-[1px] left-full w-[250px] min-h-[500px] bg-white dark:bg-darkMain shadow-md border border-gray-300 dark:border-primaryBlack">
              <h3 className="pt-4 px-4 font-bold text-grayA6 dark:text-darkTextCB">
                {t("popular topics")}
              </h3>
              {loadingTopics &&
                Array(5)
                  .fill(null)
                  .map((item, index) => (
                    <CategoriesSkeleton key={index}></CategoriesSkeleton>
                  ))}
              {!loadingTopics && (
                <div className="mt-2">
                  {listTopics?.length > 0 ? (
                    listTopics?.map((topic) => (
                      <CategoryItem
                        to={topic.name}
                        title={topic.name}
                        arrowNone
                        onClick={onClick}
                      ></CategoryItem>
                    ))
                  ) : (
                    <p className="text-xs text-grayA6 font-semibold px-4 pt-2">
                      {t("nothing topics")}
                    </p>
                  )}
                </div>
              )}
            </ul>
          )}
        </ul>
      )}
    </TooltipCover>
  );
};

export default CategoriesToggle;
