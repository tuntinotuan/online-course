import React, { useState } from "react";
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

const creditCardImg = [
  "https://www.udemy.com/staticx/udemy/images/v9/card-amex.svg",
  "https://www.udemy.com/staticx/udemy/images/v9/card-discover.svg",
  "https://www.udemy.com/staticx/udemy/images/v9/card-mastercard.svg",
  "https://www.udemy.com/staticx/udemy/images/v9/card-visa.svg",
];

const CheckoutPaymentMethod = () => {
  const [on, setOn] = useState();
  const [on2, setOn2] = useState();
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
            on={on}
            id="id1"
            onClick={() => {
              setOn(true);
              setOn2(false);
            }}
          ></RadioPaymentInput>
          <RadioPaymentSelect id="id1" on={on}>
            <div className="w-10">
              <Image
                url="https://www.udemy.com/staticx/udemy/images/v9/hpp-paypal.svg"
                className="rounded"
              ></Image>
            </div>
            <p className="font-bold text-base">PayPal</p>
          </RadioPaymentSelect>
          <RadioPaymentBody on={on}>
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
            on={on2}
            id="id2"
            onClick={() => {
              setOn(false);
              setOn2(true);
            }}
          ></RadioPaymentInput>
          <RadioPaymentSelect
            className="border-t-transparent"
            id="id2"
            on={on2}
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
                  <Image url={url} className="rounded"></Image>
                </div>
              ))}
            </div>
          </RadioPaymentSelect>
          <RadioPaymentBody on={on2}>
            <CheckoutCreditForm></CheckoutCreditForm>
          </RadioPaymentBody>
        </RadioPayment>
      </div>
    </div>
  );
};

export default CheckoutPaymentMethod;
