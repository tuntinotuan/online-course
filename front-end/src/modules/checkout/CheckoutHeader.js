import React from "react";
import LogoUdemy from "../../components/logo/LogoUdemy";
import { Link, useSearchParams } from "react-router-dom";
import LogoUdemyDark from "../../components/logo/LogoUdemyDark";
import { useSelector } from "react-redux";

const CheckoutHeader = () => {
  const [param] = useSearchParams();
  const paymentNow = param.get("payment-now");
  const { darkMode } = useSelector((state) => state.global);
  return (
    <header className="relative border dark:border-primaryBlack shadow-md z-50">
      <div className="page-container flex items-center justify-between">
        {darkMode ? <LogoUdemyDark></LogoUdemyDark> : <LogoUdemy></LogoUdemy>}
        <Link
          to={!paymentNow ? ".." : `/course/${paymentNow}`}
          relative="path"
          className="font-bold text-purpleText56"
        >
          Cannel
        </Link>
      </div>
    </header>
  );
};

export default CheckoutHeader;
