import React from "react";
import SpecialTextWithDots from "../../components/special/SpecialTextWithDots";
import { useTranslation } from "react-i18next";

const SearchNotfound = ({ keyword }) => {
  const { t } = useTranslation("search");
  return (
    <>
      <h1 className="text-2xl font-bold mb-4">
        {t("sorry, we couldn't find any results for")} {`“${keyword}”`}
      </h1>
      <SpecialTextWithDots
        title={`${t("try adjusting your search. Here are some ideas")}:`}
        styleTitle="text-xl"
        content={[
          t("make sure all words are spelled correctly"),
          t("try different search terms"),
          t("try more general search terms"),
        ]}
        styleContent="!text-primaryBlack dark:!text-darkTextCB"
        dotSize={5}
      ></SpecialTextWithDots>
    </>
  );
};

export default SearchNotfound;
