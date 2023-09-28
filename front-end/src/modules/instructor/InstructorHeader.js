import React from "react";
import HeaderBtnUserAvatar from "../../components/layout/header/HeaderBtnUserAvatar";
import HeaderBtnNotification from "../../components/layout/header/HeaderBtnNotification";

const InstructorHeader = () => {
  return (
    <header className="flex items-center justify-end gap-5 px-8">
      <HeaderBtnNotification></HeaderBtnNotification>
      <HeaderBtnUserAvatar></HeaderBtnUserAvatar>
    </header>
  );
};

export default InstructorHeader;
