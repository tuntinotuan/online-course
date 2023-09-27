import React from "react";
import { Button } from "../button";
import { IconChevronLeft } from "../icon";

const PopupViewOfDetails = ({ to }) => {
  return (
    <div className="fixed inset-0 bg-gradient-to-r from-[rgba(0,0,0,0.2)] via-transparent to-[rgba(0,0,0,0.2)] z-50">
      <Button
        className="absolute top-2 left-2 bg-white text-primaryBlack border-white hover:bg-transparent hover:text-white"
        to={to}
      >
        <IconChevronLeft size={32}></IconChevronLeft>
      </Button>
    </div>
  );
};

export default PopupViewOfDetails;
