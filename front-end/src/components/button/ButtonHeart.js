import React from "react";
import IconHeart from "../icon/IconHeart";
import { IconHeartSolid } from "../icon";
import { useSelector } from "react-redux";
import LoadingSpine from "../loading/LoadingSpine";

const ButtonHeart = ({ contain, className, onClick = () => {} }) => {
  const { loadingHeart } = useSelector((state) => state.wishlist);
  return (
    <button
      className={`border border-primaryBlack rounded-full p-3 ${className} group`}
      onClick={onClick}
    >
      {loadingHeart && (
        <LoadingSpine
          size="24px"
          borderSize="1px"
          borderColor="#000"
        ></LoadingSpine>
      )}
      {!loadingHeart &&
        (contain ? <IconHeartSolid></IconHeartSolid> : <IconHeart></IconHeart>)}
    </button>
  );
};

export default ButtonHeart;
