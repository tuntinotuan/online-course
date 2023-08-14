import React from "react";
import { NavLink } from "react-router-dom";
import Button from "../button/Button";
import Search from "../search/Search";
import useHover from "../../hooks/useHover";
import useClickOutSide from "../../hooks/useClickOutSide";
import SearchMobile from "../search/SearchMobile";
import {
  IconArrowLeft,
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
  return (
    <header
      className={`header relative flex items-center ${
        between ? "justify-between px-5" : ""
      } justify-center gap-x-5 bg-white shadow-lg z-50`}
    >
      <NavLink to="/">
        <LogoUdemy></LogoUdemy>
      </NavLink>
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
                    <IconArrowLeft></IconArrowLeft>
                  </NavLink>
                  <li className="flex items-center justify-between cursor-pointer px-4 py-2 hover:text-purpleText56">
                    Business
                    <IconArrowLeft></IconArrowLeft>
                  </li>
                  <li className="flex items-center justify-between cursor-pointer px-4 py-2 hover:text-purpleText56">
                    Finance & Accounting
                    <IconArrowLeft></IconArrowLeft>
                  </li>
                  <li className="flex items-center justify-between cursor-pointer px-4 py-2 hover:text-purpleText56">
                    IT & Software
                    <IconArrowLeft></IconArrowLeft>
                  </li>
                  <li className="flex items-center justify-between cursor-pointer px-4 py-2 hover:text-purpleText56">
                    Office Productivity
                    <IconArrowLeft></IconArrowLeft>
                  </li>
                </ul>
                <ul className="w-[250px] h-screen border border-transparent border-l-slate-200">
                  <li className="flex items-center justify-between cursor-pointer px-4 py-2 hover:text-purpleText56">
                    Web Development
                    <IconArrowLeft></IconArrowLeft>
                  </li>
                  <li className="flex items-center justify-between cursor-pointer px-4 py-2 hover:text-purpleText56">
                    Data Science
                    <IconArrowLeft></IconArrowLeft>
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
      {hiddenMultiple && (
        <>
          <NavLink to="/home/my-courses" className="hover:text-purpleText56">
            My learning
          </NavLink>
          <div ref={nodeRefWishlist} className="relative py-5">
            <NavLink
              to="/home/my-courses/wishlist"
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
      {!hiddenMultiple ? (
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
              to="/user/edit-profile"
              cartHasCourse={true}
            ></ButtonUserAvatar>
            <Sidebar hovered={hoverAvatar}></Sidebar>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
