import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../button/Button";
import Search from "../search/Search";
import useHover from "../../hooks/useHover";
import useClickOutSide from "../../hooks/useClickOutSide";
import SearchMobile from "../search/SearchMobile";
import {
  IconArrowRight,
  IconBell,
  IconCartOutline,
  IconCartSolid,
  IconEarth,
  IconHeart,
} from "../icon";
import CartToggle from "../cart/CartToggle";
import LogoUdemy from "../logo/LogoUdemy";
import { ButtonUserAvatar } from "../button";
import NotificationToggle from "../notification/NotificationToggle";
import WishlistToggle from "../wishlist/WishlistToggle";
import Sidebar from "./Sidebar";
import { SpecialCountCircle } from "../special";
import { useSelector } from "react-redux";
import { ConvertUsernameShortly } from "../../utils/processing-string";

const Header = ({
  hiddenMultiple = false,
  hiddenUdemyBusiness = false,
  between = false,
  widthSearch,
}) => {
  const { show: showSearchMobile, setShow: setShowSearchMobile } =
    useClickOutSide();
  const { hovered, nodeRef: nodeRefHover, setHovered } = useHover();
  const { hovered: hoverWishlist, nodeRef: nodeRefWishlist } = useHover();
  const { hovered: hoverCategories, nodeRef: nodeRefCategories } = useHover();
  const { hovered: hoverNotification, nodeRef: nodeRefNotification } =
    useHover();
  const { hovered: hoverAvatar, nodeRef: nodeRefAvatar } = useHover();

  const { user: users } = useSelector((state) => state.auth);
  const { jwt, user } = users;
  return (
    <header
      className={`header relative flex items-center ${
        between ? "justify-between px-5" : ""
      } justify-center gap-x-5 bg-white shadow-lg z-50`}
    >
      <LogoUdemy></LogoUdemy>
      {!hiddenMultiple && (
        <div className="py-[24px] cursor-pointer" ref={nodeRefCategories}>
          <p className="hover:text-purpleText56">Categories</p>
          {hoverCategories && (
            <div className="absolute left-32 top-[100%] bg-transparent  shadow-xl">
              <div className="flex bg-white border border-slate-200 mt-1">
                <ul className="w-[250px] h-[500px]">
                  <NavLink
                    to="/courses/development/"
                    className="flex items-center justify-between cursor-pointer px-4 py-2 hover:text-purpleText56"
                  >
                    Development
                    <IconArrowRight></IconArrowRight>
                  </NavLink>
                  <li className="flex items-center justify-between cursor-pointer px-4 py-2 hover:text-purpleText56">
                    Business
                    <IconArrowRight></IconArrowRight>
                  </li>
                  <li className="flex items-center justify-between cursor-pointer px-4 py-2 hover:text-purpleText56">
                    Finance & Accounting
                    <IconArrowRight></IconArrowRight>
                  </li>
                  <li className="flex items-center justify-between cursor-pointer px-4 py-2 hover:text-purpleText56">
                    IT & Software
                    <IconArrowRight></IconArrowRight>
                  </li>
                  <li className="flex items-center justify-between cursor-pointer px-4 py-2 hover:text-purpleText56">
                    Office Productivity
                    <IconArrowRight></IconArrowRight>
                  </li>
                </ul>
                <ul className="w-[250px] h-screen border border-transparent border-l-slate-200">
                  <li className="flex items-center justify-between cursor-pointer px-4 py-2 hover:text-purpleText56">
                    Web Development
                    <IconArrowRight></IconArrowRight>
                  </li>
                  <li className="flex items-center justify-between cursor-pointer px-4 py-2 hover:text-purpleText56">
                    Data Science
                    <IconArrowRight></IconArrowRight>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>
      )}
      {!hiddenMultiple && <Search width={widthSearch}></Search>}
      {!hiddenUdemyBusiness && (
        <NavLink to="/user/:userId" className="hover:text-purpleText56">
          Udemy Business
        </NavLink>
      )}
      {!hiddenMultiple && (
        <NavLink to="/teaching" className="hover:text-purpleText56">
          Teach on Udemy
        </NavLink>
      )}
      {jwt && (
        <>
          <NavLink to="/my-course/learning" className="hover:text-purpleText56">
            My learning
          </NavLink>
          <div ref={nodeRefWishlist} className="relative py-5">
            <NavLink
              to="/my-course/wishlist"
              className="hover:text-purpleText56"
            >
              <IconHeart></IconHeart>
            </NavLink>
            <WishlistToggle hovered={hoverWishlist}></WishlistToggle>
          </div>
        </>
      )}
      {showSearchMobile && (
        <SearchMobile onClick={() => setShowSearchMobile(false)}></SearchMobile>
      )}
      <div className="flex items-center gap-5">
        <div ref={nodeRefHover} className="relative py-5">
          <NavLink
            to="/cart"
            className="relative hover:text-purpleText56"
            onClick={() => setHovered(false)}
          >
            {true ? (
              <IconCartSolid></IconCartSolid>
            ) : (
              <IconCartOutline></IconCartOutline>
            )}
            <SpecialCountCircle className="absolute -top-1/2 right-0 translate-x-1/2"></SpecialCountCircle>
          </NavLink>
          <CartToggle
            hovered={hovered}
            onClick={() => setHovered(false)}
          ></CartToggle>
        </div>
      </div>
      {!jwt ? (
        <div className="flex items-center gap-2">
          <Button className="font-bold px-4" to="log-in">
            Log in
          </Button>
          <Button
            className="bg-primaryBlack text-white font-bold border border-primaryBlack"
            borderNone
            to="sign-up"
          >
            Sign up
          </Button>
          <Button className="" square="py-2 px-2">
            <IconEarth></IconEarth>
          </Button>
        </div>
      ) : (
        <>
          <div ref={nodeRefNotification} className="relative py-5">
            <NavLink
              to="/user/view-notifications"
              className="relative hover:text-purpleText56"
            >
              <IconBell></IconBell>
            </NavLink>
            <NotificationToggle
              hovered={hoverNotification}
            ></NotificationToggle>
          </div>
          <div ref={nodeRefAvatar} className="relative py-5">
            <ButtonUserAvatar
              shortName={ConvertUsernameShortly(user.username)}
              to="/user/edit-profile"
              cartHasCourse={true}
            ></ButtonUserAvatar>
            <Sidebar data={user} hovered={hoverAvatar}></Sidebar>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
