import React from "react";
import { ButtonUserAvatar } from "../../components/button";

const UserSidebar = () => {
  return (
    <div className="col-span-2 border border-transparent border-r-gray-300">
      <div className="flex flex-col items-center gap-2 p-4">
        <ButtonUserAvatar
          avatar={`https://img-b.udemycdn.com/user/200_H/242590638_80e3.jpg`}
          shortName="TN"
          size={120}
        ></ButtonUserAvatar>
        <h1 className="text-base font-bold">Tuan Nguyen</h1>
      </div>
      <div></div>
    </div>
  );
};

export default UserSidebar;
