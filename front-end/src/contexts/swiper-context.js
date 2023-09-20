import { createContext, useContext, useEffect, useRef, useState } from "react";

const SwiperContext = createContext();

function SwiperProvider(props) {
  const nodeRef = useRef();
  const [coords, setCoords] = useState(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleClickPrev = (swiper) => {
    swiper.slidePrev(1000);
    setIsBeginning(swiper.isBeginning);
    setIsEnd(swiper.isEnd);
    const newCoords = nodeRef.current.getBoundingClientRect();
    setCoords(newCoords);
  };
  const handleClickNext = (swiper, apiEnd) => {
    swiper.slideNext(1000);
    apiEnd && setIsEnd(swiper.isEnd);
    setIsBeginning(swiper.isBeginning);
    const newCoords = nodeRef.current.getBoundingClientRect();
    setCoords(newCoords);
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
    loading,
    setLoading,
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
