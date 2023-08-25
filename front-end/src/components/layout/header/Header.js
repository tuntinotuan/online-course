import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import useHover from "../../../hooks/useHover";
import Search from "../../search/Search";
import Button from "../../button/Button";
import useClickOutSide from "../../../hooks/useClickOutSide";
import LogoUdemy from "../../logo/LogoUdemy";
import TooltipCover from "../../tooltip/TooltipCover";
import {
  IconArrowRight,
  IconCartOutline,
  IconCartSolid,
  IconEarth,
} from "../../icon";
import SearchMobile from "../../search/SearchMobile";
import { SpecialCountCircle } from "../../special";
import CartToggle from "../../cart/CartToggle";
import HeaderBtnUserAvatar from "./HeaderBtnUserAvatar";
import HeaderBtnNotification from "./HeaderBtnNotification";
import HeaderBtnWishlist from "./HeaderBtnWishlist";

const Header = ({
  hiddenMultiple = false,
  hiddenUdemyBusiness = false,
  between = false,
  widthSearch,
}) => {
  const { show: showSearchMobile, setShow: setShowSearchMobile } =
    useClickOutSide();
  const { hovered, nodeRef: nodeRefHover, setHovered } = useHover();
  const { hovered: hoverCategories, nodeRef: nodeRefCategories } = useHover();

  const { jwt } = useSelector((state) => state.auth);
  const { myCart, myCartLocal } = useSelector((state) => state.cart);
  const { courses } = myCart;
  return (
    <header
      className={`header relative flex items-center ${
        between ? "justify-between px-5" : ""
      } justify-center gap-x-5 bg-white shadow-lg z-50`}
    >
      <LogoUdemy></LogoUdemy>
      {!hiddenMultiple && (
        <div
          className="relative py-[24px] cursor-pointer"
          ref={nodeRefCategories}
        >
          <p className="hover:text-purpleText56">Categories</p>
          <TooltipCover
            hovered={hoverCategories}
            className="-left-1/4 top-[106%] !w-[260px]"
          >
            <ul className="w-full h-[500px]">
              <NavLink
                to="/courses/development/"
                className="flex items-center justify-between cursor-pointer px-4 py-2 hover:text-purpleText56"
              >
                Development
                <IconArrowRight size={10} stroke={3}></IconArrowRight>
              </NavLink>
              <li className="flex items-center justify-between cursor-pointer px-4 py-2 hover:text-purpleText56">
                Business
                <IconArrowRight size={10} stroke={3}></IconArrowRight>
              </li>
              <li className="flex items-center justify-between cursor-pointer px-4 py-2 hover:text-purpleText56">
                Finance & Accounting
                <IconArrowRight size={10} stroke={3}></IconArrowRight>
              </li>
              <li className="flex items-center justify-between cursor-pointer px-4 py-2 hover:text-purpleText56">
                IT & Software
                <IconArrowRight size={10} stroke={3}></IconArrowRight>
              </li>
              <li className="flex items-center justify-between cursor-pointer px-4 py-2 hover:text-purpleText56">
                Office Productivity
                <IconArrowRight size={10} stroke={3}></IconArrowRight>
              </li>
            </ul>
            {/* <ul className="w-[250px] h-screen border border-transparent border-l-slate-200">
                <li className="flex items-center justify-between cursor-pointer px-4 py-2 hover:text-purpleText56">
                  Web Development
                  <IconArrowRight size={10} stroke={3}></IconArrowRight>
                </li>
                <li className="flex items-center justify-between cursor-pointer px-4 py-2 hover:text-purpleText56">
                  Data Science
                  <IconArrowRight size={10} stroke={3}></IconArrowRight>
                </li>
              </ul> */}
          </TooltipCover>
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
          <HeaderBtnWishlist></HeaderBtnWishlist>
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
            {courses?.length > 0 || myCartLocal?.length > 0 ? (
              <IconCartSolid></IconCartSolid>
            ) : (
              <IconCartOutline></IconCartOutline>
            )}
            {(courses?.length > 0 || myCartLocal?.length > 0) && (
              <SpecialCountCircle className="absolute -top-1/2 right-0 translate-x-1/2"></SpecialCountCircle>
            )}
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
          <HeaderBtnNotification></HeaderBtnNotification>
          <HeaderBtnUserAvatar></HeaderBtnUserAvatar>
        </>
      )}
    </header>
  );
};

export default Header;
