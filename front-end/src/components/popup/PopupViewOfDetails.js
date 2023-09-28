import React from "react";
import { Button } from "../button";
import { IconChevronLeft } from "../icon";
import { useDispatch, useSelector } from "react-redux";
import { setShowPopupViewOfDetails } from "../../redux-toolkit/globalSlice";

const PopupViewOfDetails = ({ to }) => {
  const dispatch = useDispatch();
  const { showPopupViewOfDetails } = useSelector((state) => state.global);
  const handleShowPopup = () => {
    dispatch(setShowPopupViewOfDetails(false));
  };
  return (
    <Button
      className={`fixed top-8 left-2 translate-y-full bg-purpleTextA4 text-white border-white hover:bg-white hover:text-primaryBlack hover:border-primaryBlack shadow-md z-50 ${
        showPopupViewOfDetails ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      to={to}
      title="Back"
      onClick={handleShowPopup}
    >
      <IconChevronLeft size={32}></IconChevronLeft>
    </Button>
  );
};

export default PopupViewOfDetails;
