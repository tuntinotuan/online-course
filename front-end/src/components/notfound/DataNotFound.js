import React from "react";
import { useTranslation } from "react-i18next";

const DataNotFound = () => {
  const { t } = useTranslation("notfound");
  return (
    <div className={`flex flex-col gap-2 text-center`}>
      <img
        srcSet="/universe-notfound.png 2x"
        alt=""
        className="mx-auto w-[250px]"
      />
      <h1 className="text-5xl font-bold">{t("no results found")}</h1>
      <div className="text-base">
        <p>{t("we couldn't find what you searched for.")}</p>
        <p>{t("try searching again.")}</p>
      </div>
    </div>
  );
};

export default DataNotFound;
