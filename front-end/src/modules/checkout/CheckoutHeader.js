import React from "react";
import LogoUdemy from "../../components/logo/LogoUdemy";
import { Link, useSearchParams } from "react-router-dom";

const CheckoutHeader = () => {
  const [param] = useSearchParams();
  const paymentNow = param.get("payment-now");
  return (
    <header className="relative shadow-md z-50">
      <div className="page-container flex items-center justify-between">
        <LogoUdemy></LogoUdemy>
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
