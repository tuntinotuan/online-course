import React, { useEffect } from "react";
import CheckoutHeader from "../modules/checkout/CheckoutHeader";
import CheckoutPaymentMethod from "../modules/checkout/CheckoutPaymentMethod";
import CheckoutSummary from "../modules/checkout/CheckoutSummary";
import CheckoutOrderDetails from "../modules/checkout/CheckoutOrderDetails";
import CheckoutTitle from "../modules/checkout/CheckoutTitle";
import { useDispatch, useSelector } from "react-redux";
import { handleGetMyCart } from "../redux-toolkit/cart/cartHandlerThunk";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(
  "pk_test_51MwSqkEqTHVX4ukZmvtphvtHggeYSSNWklI1cgHc010ZyWPC6Esr5fFt8DNMHHxJ4kLh9tGfH6oz8mDFsO6GwACJ00AMfFHWuv"
);

const CheckoutPage = () => {
  const dispatch = useDispatch();
  const { userData } = useSelector((state) => state.user);
  const { cart } = userData;
  useEffect(() => {
    dispatch(handleGetMyCart(cart?.id));
  }, [cart, dispatch]);
  return (
    <div>
      <CheckoutHeader></CheckoutHeader>
      <div className="grid grid-cols-12">
        <div className="pl-52 col-span-7 flex flex-col gap-5 py-10 px-12">
          <CheckoutTitle className="text-3xl">Checkout</CheckoutTitle>
          <CheckoutTitle>Billing address</CheckoutTitle>
          <span className="text-xs text-grayA6">
            Udemy is required by law to collect applicable transaction taxes for
            purchases made in certain tax jurisdictions.
          </span>
          <CheckoutPaymentMethod></CheckoutPaymentMethod>
          <CheckoutOrderDetails></CheckoutOrderDetails>
        </div>
        <div className="pr-52 col-span-5 w-full h-full bg-grayF7 pb-56">
          <Elements stripe={stripePromise}>
            <CheckoutSummary></CheckoutSummary>
          </Elements>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
