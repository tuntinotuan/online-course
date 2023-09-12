import React from "react";
import Menu from "../../components/layout/Menu";
import { Outlet } from "react-router-dom";
import { useTranslation } from "react-i18next";

const HomeCourseSelection = ({ table, hiddenMenu = false }) => {
  const { t } = useTranslation("home");
  return (
    <section className={`${table}`}>
      <h1 className="text-3xl font-bold mb-4">{t("broad selection")}</h1>
      <p className="text-lg mb-2">{t("every month")}</p>
      {!hiddenMenu && <Menu></Menu>}
      <Outlet></Outlet>
    </section>
  );
};

export default HomeCourseSelection;
