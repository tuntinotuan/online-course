import React from "react";
import TooltipCover from "../tooltip/TooltipCover";
import ButtonUserAvatar from "../button/ButtonUserAvatar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import IconEarth from "../icon/IconEarth";
import { SpecialCountCircle } from "../special";
import { strapiPathBE } from "../../utils/constants";
import { handleLogout } from "../../redux-toolkit/auth/authHandlerThunk";
import {
  setToggleDarkMode,
  toggleShowPopupChooseLanguage,
} from "../../redux-toolkit/globalSlice";
import { locales } from "../../i18n/i18n";
import { useTranslation } from "react-i18next";
import ToggleDarkMode from "../toggle/ToggleDarkMode";
import useDarkMode from "../../hooks/useDarkMode";

const Sidebar = ({ hovered, onClick = () => {} }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [darkModeState, setDarkModeState] = useDarkMode();
  const { userData } = useSelector((state) => state.user);
  const { avatar, url_google_avatar, role } = userData;
  const { myCart } = useSelector((state) => state.cart);
  const { courses } = myCart;
  const { t, i18n } = useTranslation();
  const currentLanguage = locales[i18n.language];
  const logoutHandler = async () => {
    try {
      dispatch(handleLogout())
        .unwrap()
        .then(() => navigate("/log-in"));
      navigate("/log-in");
    } catch (error) {
      console.log(error);
    }
  };
  const handleShowChooseLanguage = () => {
    dispatch(toggleShowPopupChooseLanguage(true));
    onClick();
  };
  const handleClickToggleDarkMode = () => {
    setDarkModeState(!darkModeState);
    dispatch(setToggleDarkMode(!darkModeState));
  };
  return (
    <TooltipCover hovered={hovered} className="!top-[106%] w-[260px]">
      <Link
        to="/user/edit-profile"
        className="w-full flex items-center gap-2 border border-transparent border-b-gray-300 dark:border-b-primaryBlack p-4 group"
        onClick={onClick}
      >
        <ButtonUserAvatar
          avatar={
            (avatar && `${strapiPathBE}${avatar?.url}`) || url_google_avatar
          }
          shortName={userData?.username}
          size={66}
          className="text-2xl"
        ></ButtonUserAvatar>
        <div className="overflow-hidden">
          <h1
            className="text-base font-bold transition-all group-hover:text-purpleText56 truncate"
            title={userData?.username}
          >
            {userData?.username || "Tuan Nguyen"}
          </h1>
          <p
            className="text-xs text-grayA6 dark:text-darkTextCB truncate"
            title={userData?.email}
          >
            {userData?.email || "tuan48594@donga.edu.vn"}
          </p>
        </div>
      </Link>
      {(role?.type === "admin" || role?.type === "moderator") && (
        <Link
          to="/admin/dashboard"
          className="w-full flex items-center justify-between gap-2 hover:text-purpleText56 border border-transparent border-b-gray-300 dark:border-b-primaryBlack p-4 group"
        >
          Admin Dashboard
        </Link>
      )}
      <div className="w-full flex flex-col items-center gap-4 border border-transparent border-b-gray-300 dark:border-b-primaryBlack p-4">
        <Link
          to="/my-course/learning"
          className="w-full transition-all hover:text-purpleText56"
          onClick={onClick}
        >
          {t("my learning")}
        </Link>
        <Link
          to="/cart"
          className="flex items-center justify-between w-full transition-all hover:text-purpleText56"
          onClick={onClick}
        >
          {t("my cart")}
          {courses?.length > 0 && <SpecialCountCircle></SpecialCountCircle>}
        </Link>
        <Link
          to="/my-course/wishlist"
          className="w-full transition-all hover:text-purpleText56"
          onClick={onClick}
        >
          {t("my wishlist")}
        </Link>
        <Link
          to="/user/edit-profile"
          className="w-full transition-all hover:text-purpleText56"
          onClick={onClick}
        >
          {t("edit profile")}
        </Link>
      </div>
      <button
        className="w-full flex items-center justify-between gap-2 border border-transparent border-b-gray-300 dark:border-b-primaryBlack p-4 group"
        onClick={handleShowChooseLanguage}
      >
        <span className="transition-all group-hover:text-purpleText56">
          {t("language")}
        </span>
        <div className="flex items-center gap-2">
          {currentLanguage}
          <IconEarth size={18}></IconEarth>
        </div>
      </button>
      <div className="w-full flex items-center justify-between gap-2 border border-transparent border-b-gray-300 dark:border-b-primaryBlack p-4 group">
        <ToggleDarkMode
          on={darkModeState}
          onClick={handleClickToggleDarkMode}
        ></ToggleDarkMode>
      </div>
      <div className="w-full flex flex-col items-center gap-4 border border-transparent border-b-gray-300 dark:border-b-primaryBlack p-4">
        <Link
          className="w-full transition-all hover:text-purpleText56"
          onClick={onClick}
        >
          {t("help")}
        </Link>
        <Link
          className="w-full transition-all hover:text-purpleText56"
          onClick={logoutHandler}
        >
          {t("log out")}
        </Link>
      </div>
    </TooltipCover>
  );
};

export default Sidebar;
