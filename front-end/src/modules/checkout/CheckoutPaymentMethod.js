import React from "react";
import CheckoutTitle from "./CheckoutTitle";
import { IconLock, IconWarningSolid } from "../../components/icon";
import RadioPayment from "../../components/radio/RadioPayment";
import {
  RadioPaymentBody,
  RadioPaymentInput,
  RadioPaymentSelect,
} from "../../components/radio";
import Image from "../../components/image/Image";
import CheckoutCreditForm from "./CheckoutCreditForm";
import { useSearchParams } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(`${process.env.STRIPE_PUBLIC_KEY}`);
const creditCardImg = [
  "https://www.udemy.com/staticx/udemy/images/v9/card-amex.svg",
  "https://www.udemy.com/staticx/udemy/images/v9/card-discover.svg",
  "https://www.udemy.com/staticx/udemy/images/v9/card-mastercard.svg",
  "https://www.udemy.com/staticx/udemy/images/v9/card-visa.svg",
];

const CheckoutPaymentMethod = () => {
  const [param] = useSearchParams();
  const paymentMethod = param.get("payment-method");
  const [searchParams, setSearchParams] = useSearchParams();
  const handleClickPayPal = () => {
    searchParams.set("payment-method", "checkout");
    setSearchParams(searchParams);
  };
  const handleClickCreditCard = () => {
    searchParams.set("payment-method", "element");
    setSearchParams(searchParams);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <CheckoutTitle>Payment Method</CheckoutTitle>
        <div className="flex items-center gap-2">
          <span className="text-xs text-grayA6">Secured connection</span>
          <IconLock size={20}></IconLock>
        </div>
      </div>
      <div>
        <RadioPayment>
          <RadioPaymentInput
            on={paymentMethod === "checkout"}
            id="id1"
            onClick={handleClickPayPal}
          ></RadioPaymentInput>
          <RadioPaymentSelect id="id1" on={paymentMethod === "checkout"}>
            <div className="w-10">
              <Image
                url="https://www.udemy.com/staticx/udemy/images/v9/hpp-paypal.svg"
                className="rounded"
              ></Image>
            </div>
            <p className="font-bold text-base">PayPal</p>
          </RadioPaymentSelect>
          <RadioPaymentBody on={paymentMethod === "checkout"}>
            <span className="text-base">
              In order to complete your transaction, we will transfer you over
              to PayPal's secure servers.
            </span>
            <p className="text-base my-3">
              <IconWarningSolid className="text-starBg"></IconWarningSolid>
              Unfortunately, PayPal does not support payments in VND therefore
              your payment will be in USD.
            </p>
            <p className="text-base font-bold">
              The amount you will be charged by Paypal is $38.98.
            </p>
          </RadioPaymentBody>
        </RadioPayment>
        <RadioPayment>
          <RadioPaymentInput
            on={paymentMethod === "element"}
            id="id2"
            onClick={handleClickCreditCard}
          ></RadioPaymentInput>
          <RadioPaymentSelect
            className="border-t-transparent"
            id="id2"
            on={paymentMethod === "element"}
          >
            <div className="w-10">
              <Image
                url="https://www.udemy.com/staticx/udemy/images/v9/card-default.svg"
                className="rounded"
              ></Image>
            </div>
            <p className="font-bold text-base mr-auto">Credit/Debit Card</p>
            <div className="flex items-center gap-1">
              {creditCardImg.map((url) => (
                <div className="w-10" key={url}>
                  <Image url={url} className="bg-white rounded"></Image>
                </div>
              ))}
            </div>
          </RadioPaymentSelect>
          <RadioPaymentBody on={paymentMethod === "element"}>
            <Elements stripe={stripePromise}>
              <CheckoutCreditForm></CheckoutCreditForm>
            </Elements>
          </RadioPaymentBody>
        </RadioPayment>
      </div>
    </div>
  );
};

export default CheckoutPaymentMethod;
