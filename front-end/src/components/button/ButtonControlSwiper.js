import React from "react";
import ReactDOM from "react-dom";
import { IconArrowLeft, IconArrowRight } from "../icon";
import { useSwiperContext } from "../../contexts/swiper-context";
import { useSwiper } from "swiper/react";
const ButtonControlSwiper = ({ className, sizeButton = "" }) => {
  const { coords, isBeginning, isEnd, handleClickPrev, handleClickNext } =
    useSwiperContext();
  const swiper = useSwiper();
  const commonCss = `flex justify-center items-center absolute bg-primaryBlack dark:bg-primaryBg rounded-full shadow-md hover:brightness-150 text-white transition-all border border-gray-400 dark:border-primaryBlack z-50 ${className} ${
    sizeButton ? sizeButton : "w-10 h-10"
  }`;
  return ReactDOM.createPortal(
    <div className="swiper-nav-btns">
      <button
        onClick={() => handleClickPrev(swiper)}
        className={`-translate-x-1/2 ${commonCss} ${
          isBeginning ? "opacity-0 invisible" : "opacity-100 visible"
        } `}
        style={
          coords && {
            top: coords?.top + 45 + window.scrollY,
            left: coords?.x,
          }
        }
      >
        <IconArrowLeft size={24} stroke={3}></IconArrowLeft>
      </button>
      <button
        onClick={() => handleClickNext(swiper)}
        className={`translate-x-1/2 ${commonCss} ${
          isEnd ? "opacity-0 invisible" : "opacity-100 visible"
        }`}
        style={
          coords && {
            top: coords?.top + 45 + window.scrollY,
            right: coords?.x,
          }
        }
      >
        <IconArrowRight size={24} stroke={3}></IconArrowRight>
      </button>
    </div>,
    document.querySelector("body")
  );
};

export default ButtonControlSwiper;
