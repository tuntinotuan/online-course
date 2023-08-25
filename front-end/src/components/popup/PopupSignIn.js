import React from "react";
import Popup from "./Popup";
import SignInPage from "../../pages/SignInPage";
import { useDispatch, useSelector } from "react-redux";
import {
  toggleShowPopupForgotPassword,
  toggleShowPopupSignIn,
  toggleShowPopupSignUp,
} from "../../redux-toolkit/globalSlice";

const PopupSignIn = () => {
  const dispatch = useDispatch();
  const { showPopupSignIn } = useSelector((state) => state.global);
  const handleClosePopup = () => {
    dispatch(toggleShowPopupSignIn(false));
  };
  const handleShowSignUp = () => {
    handleClosePopup();
    dispatch(toggleShowPopupSignUp(true));
  };
  const handleShowForgotPassword = () => {
    handleClosePopup();
    dispatch(toggleShowPopupForgotPassword(true));
  };
  return (
    <Popup show={showPopupSignIn} onClick={handleClosePopup}>
      <SignInPage
        className=""
        unToSignUp
        unToForgotPassword
        onClickSignUp={handleShowSignUp}
        onClickForgotPassword={handleShowForgotPassword}
      ></SignInPage>
    </Popup>
  );
};

export default PopupSignIn;
