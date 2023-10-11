import React from "react";
import ReactDOM from "react-dom";
import { IconArrowLeft, IconArrowRight } from "../icon";
import { useSwiperContext } from "../../contexts/swiper-context";
import { useSwiper } from "swiper/react";
import LoadingSpinQuarter from "../loading/LoadingSpinQuarter";
const ButtonControlSwiper = ({
  className,
  sizeButton = "",
  callApi,
  apiEnd,
}) => {
  const {
    coords,
    isBeginning,
    isEnd,
    loading,
    setLoading,
    handleClickPrev,
    handleClickNext,
  } = useSwiperContext();
  const swiper = useSwiper();
  const commonCss = `flex justify-center items-center absolute bg-primaryBlack dark:bg-primaryBg rounded-full shadow-md hover:brightness-150 text-white transition-all border border-gray-400 dark:border-primaryBlack z-40 ${className} ${
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
        onClick={async () => {
          if (apiEnd || !callApi) return handleClickNext(swiper, apiEnd);
          setLoading(true);
          try {
            await callApi();
            setTimeout(() => {
              handleClickNext(swiper, apiEnd);
            }, 500);
            setTimeout(() => {
              setLoading(false);
            }, 500);
          } catch (error) {
            console.log("error", error);
            setLoading(false);
          }
        }}
        className={`translate-x-1/2 disabled:cursor-wait ${commonCss} ${
          isEnd ? "opacity-0 invisible" : "opacity-100 visible"
        }`}
        style={
          coords && {
            top: coords?.top + 45 + window.scrollY,
            right: coords?.x,
          }
        }
        disabled={loading}
      >
        {loading && (
          <LoadingSpinQuarter
            size={20}
            borderSize="border-[2px]"
            borderColor="border-white"
          ></LoadingSpinQuarter>
        )}
        {!loading && <IconArrowRight size={24} stroke={3}></IconArrowRight>}
      </button>
    </div>,
    document.querySelector("body")
  );
};

export default ButtonControlSwiper;
