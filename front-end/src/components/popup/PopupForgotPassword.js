import React from "react";
import Popup from "./Popup";
import ForgotPasswordPage from "../../pages/ForgotPasswordPage";
import {
  toggleShowPopupForgotPassword,
  toggleShowPopupSignIn,
} from "../../redux-toolkit/globalSlice";
import { useDispatch, useSelector } from "react-redux";

const PopupForgotPassword = () => {
  const dispatch = useDispatch();
  const { showPopupForgotPassword } = useSelector((state) => state.global);
  const handleClosePopup = () => {
    dispatch(toggleShowPopupForgotPassword(false));
  };
  const handleShowSignIn = () => {
    handleClosePopup();
    dispatch(toggleShowPopupSignIn(true));
  };
  return (
    <Popup show={showPopupForgotPassword} onClick={handleClosePopup}>
      <ForgotPasswordPage
        className=""
        unToSignIn
        onClickSignIn={handleShowSignIn}
      ></ForgotPasswordPage>
    </Popup>
  );
};

export default PopupForgotPassword;
