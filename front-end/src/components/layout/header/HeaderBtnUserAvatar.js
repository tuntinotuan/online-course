import React from "react";
import Sidebar from "../Sidebar";
import { strapiPathBE } from "../../../utils/constants";
import { ButtonUserAvatar } from "../../button";
import useHover from "../../../hooks/useHover";
import { useSelector } from "react-redux";

const HeaderBtnUserAvatar = () => {
  const { hovered, setHovered, nodeRef } = useHover();
  const { userData } = useSelector((state) => state.user);
  const { avatar } = userData;
  const { myCart } = useSelector((state) => state.cart);
  const { courses } = myCart;
  return (
    <div ref={nodeRef} className="relative py-5">
      <ButtonUserAvatar
        avatar={avatar && `${strapiPathBE}${avatar?.url}`}
        shortName={userData.username}
        to="/user/edit-profile"
        cartHasCourse={courses?.length > 0}
        onClick={() => setHovered(false)}
      ></ButtonUserAvatar>
      <Sidebar hovered={hovered} onClick={() => setHovered(false)}></Sidebar>
    </div>
  );
};

export default HeaderBtnUserAvatar;
