import React from "react";
import Button from "../button/Button";
import { IconEarth } from "../icon";
import LogoUdemyDark from "../logo/LogoUdemyDark";
import { useDispatch } from "react-redux";
import { toggleShowPopupChooseLanguage } from "../../redux-toolkit/globalSlice";
import { useTranslation } from "react-i18next";
import { locales } from "../../i18n/i18n";

const Footer = ({
  mobileSmaller = "flex justify-between items-start",
  grid = "grid grid-cols-3 gap-32",
  mobile = "px-12 py-8",
}) => {
  const dispatch = useDispatch();
  const { t, i18n } = useTranslation("footer");
  const currentLanguage = locales[i18n.language];
  const handleShowChooseLanguage = () => {
    dispatch(toggleShowPopupChooseLanguage(true));
  };
  return (
    <footer
      className={`flex flex-col justify-between bg-primaryBg w-full ${mobile} text-white overflow-hidden`}
    >
      <div className={`mb-10 ${mobileSmaller}`}>
        <div className={`${grid}`}>
          <ul>
            <li className="mb-2 hover:underline cursor-pointer">
              Udemy Business
            </li>
            <li className="mb-2 hover:underline cursor-pointer">
              {t("teach on udemy")}
            </li>
            <li className="mb-2 hover:underline cursor-pointer">
              {t("get the app")}
            </li>
            <li className="mb-2 hover:underline cursor-pointer">
              {t("about us")}
            </li>
            <li className="mb-2 hover:underline cursor-pointer">
              {t("contact us")}
            </li>
          </ul>
          <ul>
            <li className="mb-2 hover:underline cursor-pointer">
              {t("careers")}
            </li>
            <li className="mb-2 hover:underline cursor-pointer">Blog</li>
            <li className="mb-2 hover:underline cursor-pointer">
              {t("help and support")}
            </li>
            <li className="mb-2 hover:underline cursor-pointer">
              {t("affiliate")}
            </li>
            <li className="mb-2 hover:underline cursor-pointer">
              {t("investors")}
            </li>
          </ul>
          <ul>
            <li className="mb-2 hover:underline cursor-pointer">
              {t("terms")}
            </li>
            <li className="mb-2 hover:underline cursor-pointer">
              {t("privacy policy")}
            </li>
            <li className="mb-2 hover:underline cursor-pointer">
              {t("cookie settings")}
            </li>
            <li className="mb-2 hover:underline cursor-pointer">
              {t("sitemap")}
            </li>
            <li className="mb-2 hover:underline cursor-pointer">
              {t("accessibility")}
            </li>
          </ul>
        </div>
        <Button
          className="flex items-center gap-1 border border-white pr-12 hover:bg-neutral-900"
          borderNone
          onClick={handleShowChooseLanguage}
        >
          <IconEarth></IconEarth>
          {currentLanguage}
        </Button>
      </div>
      <div className="flex justify-between items-center">
        <LogoUdemyDark></LogoUdemyDark>
        <span className="text-xs">© 2023 Udemy, Inc.</span>
      </div>
    </footer>
  );
};

export default Footer;
