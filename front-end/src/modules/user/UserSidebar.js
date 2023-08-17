import React from "react";
import { ButtonUserAvatar } from "../../components/button";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { ConvertUsernameShortly } from "../../utils/processing-string";
import { strapiPathBE } from "../../utils/constants";

const listLink = [
  {
    title: "Profile",
    path: "/user/edit-profile",
  },
  {
    title: "Photo",
    path: "/user/edit-photo",
  },
  {
    title: "Account Security",
    path: "/user/edit-account",
  },
];

const UserSidebar = () => {
  const { userData } = useSelector((state) => state.user);
  const { avatar } = userData;
  return (
    <div className="col-span-2 border border-transparent border-r-gray-300 pb-52">
      <div className="flex flex-col items-center gap-2 p-4">
        <ButtonUserAvatar
          avatar={avatar && `${strapiPathBE}${avatar?.url}`}
          shortName={ConvertUsernameShortly(userData?.username)}
          size={120}
          to="/user/edit-profile"
        ></ButtonUserAvatar>
        <h1 className="text-base font-bold">
          {userData?.username || "Tuan Nguyen"}
        </h1>
      </div>
      {listLink.map((item) => (
        <NavLink
          to={item.path}
          key={item.title}
          className="user-sidebar-link block w-full hover:bg-grayA6 hover:text-white transition-all hover:font-semibold px-4 py-1"
        >
          {item.title}
        </NavLink>
      ))}
    </div>
  );
};

export default UserSidebar;
