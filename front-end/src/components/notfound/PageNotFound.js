import React from "react";
import { FaGhost } from "react-icons/fa";
import ButtonBackHome from "../button/ButtonBackHome";
import { useTranslation } from "react-i18next";

// dark:bg-primaryBlack dark:text-[#e7ebf2] text-[#528cce]

const PageNotFound = () => {
  const { t } = useTranslation("notfound");
  return (
    <main className="main-not-found flex flex-col items-center justify-center text-center py-10">
      <h1>
        4
        <span className="relative text-purpleTextA4">
          <FaGhost className="page-not-found text-primaryBlack"></FaGhost>
          <FaGhost className="absolute -top-[10px] -left-[10px] page-not-found"></FaGhost>
        </span>
        4
      </h1>
      <h2 className="text-base font-bold mb-1">
        {t("error: 404 page not found")}
      </h2>
      <p className="text-xs text-grayA6">
        {t("sorry, the page you're looking for cannot be accessed")}
      </p>
      <ButtonBackHome to="/" className="font-bold mt-3">
        {t("back home")}
      </ButtonBackHome>
    </main>
  );
};

export default PageNotFound;
