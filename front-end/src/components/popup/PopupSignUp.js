import React from "react";
import Popup from "./Popup";
import SignUpPage from "../../pages/SignUpPage";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleShowPopupSignIn,
  toggleShowPopupSignUp,
} from "../../redux-toolkit/globalSlice";

const PopupSignUp = () => {
  const dispatch = useDispatch();
  const { showPopupSignUp } = useSelector((state) => state.global);
  const handleClosePopup = () => {
    dispatch(toggleShowPopupSignUp(false));
  };
  const handleShowSignIn = () => {
    handleClosePopup();
    dispatch(toggleShowPopupSignIn(true));
  };
  return (
    <Popup show={showPopupSignUp} onClick={handleClosePopup}>
      <SignUpPage
        className=""
        unToSignIn
        onClickSignIn={handleShowSignIn}
      ></SignUpPage>
    </Popup>
  );
};

export default PopupSignUp;
