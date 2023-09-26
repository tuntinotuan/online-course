import React from "react";
import IconHeart from "../icon/IconHeart";
import { IconHeartSolid } from "../icon";
import { useSelector } from "react-redux";
import LoadingSpin from "../loading/LoadingSpin";

const ButtonHeart = ({ contain, className, onClick = () => {} }) => {
  const { jwt } = useSelector((state) => state.auth);
  const { loadingHeart } = useSelector((state) => state.wishlist);
  return (
    <button
      className={`border border-primaryBlack rounded-full p-3 ${className} group`}
      onClick={onClick}
    >
      {loadingHeart && (
        <LoadingSpin
          size="24px"
          borderSize="1px"
          borderColor="#000"
        ></LoadingSpin>
      )}
      {!loadingHeart &&
        (jwt && contain ? (
          <IconHeartSolid></IconHeartSolid>
        ) : (
          <IconHeart></IconHeart>
        ))}
    </button>
  );
};

export default ButtonHeart;
