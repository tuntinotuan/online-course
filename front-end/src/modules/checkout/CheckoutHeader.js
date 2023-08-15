import React from "react";
import LogoUdemy from "../../components/logo/LogoUdemy";
import { Link } from "react-router-dom";

const CheckoutHeader = () => {
  return (
    <header className="relative shadow-md z-50">
      <div className="page-container flex items-center justify-between">
        <LogoUdemy></LogoUdemy>
        <Link to=".." relative="path" className="font-bold text-purpleText56">
          Cannel
        </Link>
      </div>
    </header>
  );
};

export default CheckoutHeader;
