import { createContext, useContext, useEffect, useRef, useState } from "react";

const SwiperContext = createContext();

function SwiperProvider(props) {
  const nodeRef = useRef();
  const [coords, setCoords] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  console.log("coords", coords);
  const handleClickPrev = (swiper) => {
    swiper.slidePrev(1000);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
  };
  const handleClickNext = (swiper) => {
    swiper.slideNext(1000);
    setIsEnd(swiper.isEnd);
    setIsBeginning(swiper.isBeginning);
  };
  useEffect(() => {
    const newCoords = nodeRef.current.getBoundingClientRect();
    setCoords(newCoords);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [window.scrollY]);
  const values = {
    nodeRef,
    coords,
    isBeginning,
    isEnd,
    handleClickPrev,
    handleClickNext,
  };
  return <SwiperContext.Provider value={values} {...props} />;
}

function useSwiperContext() {
  const context = useContext(SwiperContext);
  if (typeof context === "undefined")
    throw new Error("useSwiper must be used within SwiperProvider");
  return context;
}

export { useSwiperContext, SwiperProvider };
