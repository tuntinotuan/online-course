import React from "react";
import Popup from "./Popup";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowPopupChooseLanguage } from "../../redux-toolkit/globalSlice";
import { useTranslation } from "react-i18next";

const PopupChooseLanguage = () => {
  const dispatch = useDispatch();
  const { showPopupChooseLanguage } = useSelector((state) => state.global);
  const defineValue = [
    {
      title: "English",
      shorthand: "en",
    },
    {
      title: "Tiếng Việt",
      shorthand: "vi",
    },
    {
      title: "日本語",
      shorthand: "",
    },
  ];
  const handleClosePopup = () => {
    dispatch(toggleShowPopupChooseLanguage(false));
  };

  return (
    <Popup
      show={showPopupChooseLanguage}
      onClick={handleClosePopup}
      className="w-[600px]"
    >
      <h1 className="text-xl font-bold mb-5">Choose a language</h1>
      <div className="grid grid-cols-3 gap-2">
        {defineValue.map((item) => (
          <LanguageList shorthand={item.shorthand} onClick={handleClosePopup}>
            {item.title}
          </LanguageList>
        ))}
      </div>
    </Popup>
  );
};

function LanguageList({ children, shorthand, onClick, ...props }) {
  const { i18n } = useTranslation();
  const currentLanguage = i18n.language;
  const handleChooseLanguage = (language) => {
    if (shorthand === currentLanguage) return;
    i18n.changeLanguage(language);
    localStorage.setItem("i18nextLng", language);
    onClick();
  };
  return (
    <div
      className={`py-2 px-4 cursor-pointer ${
        shorthand === currentLanguage
          ? "border border-primaryBlack cursor-wait"
          : ""
      }`}
      onClick={() => handleChooseLanguage(shorthand)}
      {...props}
    >
      {children}
    </div>
  );
}

export default PopupChooseLanguage;
