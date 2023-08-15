import React from "react";

const CheckoutTitle = ({
  className,
  children = "This is title of CheckoutPage",
}) => {
  return <h2 className={`text-2xl font-bold ${className}`}>{children}</h2>;
};

export default CheckoutTitle;
