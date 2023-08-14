import { useEffect, useRef, useState } from "react";

export default function useHover() {
  // mouseover
  // mouseout
  const [hovered, setHovered] = useState(false);
  const [coords, setCoords] = useState(null);
  const nodeRef = useRef(null);
  useEffect(() => {
    function handleMouseOver(e) {
      setHovered(true);
      setCoords(e.currentTarget.getBoundingClientRect());
    }
    function handleMouseOut() {
      setHovered(false);
    }
    const dom = nodeRef.current;
    if (dom) {
      dom.addEventListener("mouseover", handleMouseOver);
      dom.addEventListener("mouseout", handleMouseOut);
    }
    return () => {
      dom && dom.removeEventListener("mouseover", handleMouseOver);
      dom && dom.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);
  return {
    hovered,
    setHovered,
    nodeRef,
    coords,
  };
}
