import React from "react";
import useHover from "../../../hooks/useHover";
import { NavLink } from "react-router-dom";
import { IconBell } from "../../icon";
import NotificationToggle from "../../notification/NotificationToggle";

const HeaderBtnNotification = () => {
  const { hovered, nodeRef } = useHover();
  return (
    <div ref={nodeRef} className="relative py-5">
      <NavLink
        to="/user/view-notifications"
        className="relative hover:text-purpleText56"
      >
        <IconBell></IconBell>
      </NavLink>
      <NotificationToggle hovered={hovered}></NotificationToggle>
    </div>
  );
};

export default HeaderBtnNotification;
