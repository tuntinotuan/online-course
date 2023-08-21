import React from "react";
import TooltipCover from "../tooltip/TooltipCover";
import ButtonUserAvatar from "../button/ButtonUserAvatar";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import IconEarth from "../icon/IconEarth";
import { SpecialCountCircle } from "../special";
import { ConvertUsernameShortly } from "../../utils/processing-string";
import { strapiPathBE } from "../../utils/constants";
import { handleLogout } from "../../redux-toolkit/auth/authHandlerThunk";

const Sidebar = ({ hovered }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { userData } = useSelector((state) => state.user);
  const { avatar } = userData;
  const { myCart } = useSelector((state) => state.cart);
  const { courses } = myCart;
  const logoutHandler = async () => {
    try {
      dispatch(handleLogout());
      navigate("/log-in");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <TooltipCover hovered={hovered} className="!top-[106%] w-[260px]">
      <Link
        to="/user/edit-profile"
        className="w-full flex items-center gap-2 border border-transparent border-b-gray-300 p-4 group"
      >
        <ButtonUserAvatar
          avatar={avatar && `${strapiPathBE}${avatar?.url}`}
          shortName={ConvertUsernameShortly(userData?.username)}
          size={66}
          to="/user/edit-profile"
          className="text-2xl"
        ></ButtonUserAvatar>
        <div>
          <h1 className="text-base font-bold transition-all group-hover:text-purpleText56">
            {userData?.username || "Tuan Nguyen"}
          </h1>
          <p className="text-xs text-grayA6">
            {userData?.email || "tuan48594@donga.edu.vn"}
          </p>
        </div>
      </Link>
      <div className="w-full flex flex-col items-center gap-4 border border-transparent border-b-gray-300 p-4">
        <Link
          to="/my-course/learning"
          className="w-full transition-all hover:text-purpleText56"
        >
          My learning
        </Link>
        <Link
          to="/cart"
          className="flex items-center justify-between w-full transition-all hover:text-purpleText56"
        >
          My cart
          {courses?.length > 0 && <SpecialCountCircle></SpecialCountCircle>}
        </Link>
        <Link
          to="/my-course/wishlist"
          className="w-full transition-all hover:text-purpleText56"
        >
          My wishlist
        </Link>
        <Link
          to="/user/edit-profile"
          className="w-full transition-all hover:text-purpleText56"
        >
          Edit profile
        </Link>
      </div>
      <Link className="w-full flex items-center justify-between gap-2 border border-transparent border-b-gray-300 p-4 group">
        <span className="transition-all group-hover:text-purpleText56">
          Language
        </span>
        <div className="flex items-center gap-2">
          English<IconEarth size={18}></IconEarth>
        </div>
      </Link>
      <div className="w-full flex flex-col items-center gap-4 border border-transparent border-b-gray-300 p-4">
        <Link className="w-full transition-all hover:text-purpleText56">
          Help
        </Link>
        <Link
          className="w-full transition-all hover:text-purpleText56"
          onClick={logoutHandler}
        >
          Log out
        </Link>
      </div>
    </TooltipCover>
  );
};

export default Sidebar;
