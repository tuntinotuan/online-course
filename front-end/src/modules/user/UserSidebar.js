import React from "react";
import { ButtonUserAvatar } from "../../components/button";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { strapiPathBE } from "../../utils/constants";
import { useTranslation } from "react-i18next";

const listLink = [
  {
    title: "profile",
    path: "/user/edit-profile",
  },
  {
    title: "photo",
    path: "/user/edit-photo",
  },
  {
    title: "account security",
    path: "/user/edit-account",
  },
];

const UserSidebar = () => {
  const { t } = useTranslation("profile");
  const { userData } = useSelector((state) => state.user);
  const { avatar, url_google_avatar } = userData;
  return (
    <div className="col-span-2 border border-transparent border-r-gray-300 dark:border-r-primaryBlack pb-52">
      <div className="flex flex-col items-center gap-2 p-4">
        <ButtonUserAvatar
          avatar={
            (avatar && `${strapiPathBE}${avatar?.url}`) || url_google_avatar
          }
          shortName={userData?.username}
          size={120}
          to="/user/edit-profile"
        ></ButtonUserAvatar>
        <h1
          className="text-base font-bold max-w-[180px] truncate"
          title={userData?.username}
        >
          {userData?.username || "Tuan Nguyen"}
        </h1>
      </div>
      {listLink.map((item) => (
        <NavLink
          to={item.path}
          key={item.title}
          className="user-sidebar-link block w-full hover:bg-grayA6 hover:text-white transition-all hover:font-semibold px-4 py-1"
        >
          {t(item.title)}
        </NavLink>
      ))}
    </div>
  );
};

export default UserSidebar;
