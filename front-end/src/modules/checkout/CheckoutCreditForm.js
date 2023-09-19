import React, { useEffect } from "react";
import {
  CardCvcElement,
  CardExpiryElement,
  CardNumberElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useSearchParams } from "react-router-dom";
import { handlePaymentWithElement } from "../../redux-toolkit/order/orderHandlerThunk";

const CheckoutCreditForm = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const stripe = useStripe();
  const elements = useElements();
  const [param] = useSearchParams();
  const paymentNow = param.get("payment-now");
  const { course } = useSelector((state) => state.course);
  const { myCart } = useSelector((state) => state.cart);
  const { cardNumber } = useSelector((state) => state.order);
  const { courses } = myCart;
  useEffect(() => {
    function paymentElement() {
      const newValues = {
        navigate,
        stripeElement: stripe,
        elements,
        courses: !paymentNow ? courses : [course],
        cardNumberElement: elements.getElement(CardNumberElement),
      };
      dispatch(handlePaymentWithElement(newValues));
    }
    cardNumber && paymentElement();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardNumber]);

  const commonCssForStripeElement = `paymentInput w-full border border-primaryBlack dark:bg-white font-bold focus:text-purpleTextA4 p-3`;

  return (
    <>
      <div className="flex items-center justify-end dark:text-white">
        <span className="text-xs text-grayA6 mb-2 mt-4">Required</span>
      </div>
      <CardNumberElement className={commonCssForStripeElement} />
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="flex items-center justify-end">
            <span className="text-xs text-grayA6 mb-2 mt-4">Required</span>
          </div>
          <CardExpiryElement className={commonCssForStripeElement} />
        </div>
        <div>
          <div className="flex items-center justify-end">
            <span className="text-xs text-grayA6 mb-2 mt-4">Required</span>
          </div>
          <CardCvcElement className={commonCssForStripeElement} />
        </div>
      </div>
      {/* <div className="flex items-center justify-end">
        <span className="text-xs text-grayA6 mb-2 mt-4">Required</span>
      </div>
      <Input
        control={control}
        name="cardName"
        placeholder="Name on card"
      ></Input>
      <div className="flex items-center justify-end">
        <span className="text-xs text-grayA6 mb-2 mt-4">Required</span>
      </div>
      <Input
        control={control}
        name="cardNumber"
        placeholder="Card number"
      ></Input>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="flex items-center justify-end">
            <span className="text-xs text-grayA6 mb-2 mt-4">Required</span>
          </div>
          <Input
            control={control}
            name="cardExpiry"
            placeholder="Expiry date"
          ></Input>
        </div>
        <div>
          <div className="flex items-center justify-end">
            <span className="text-xs text-grayA6 mb-2 mt-4">Required</span>
          </div>
          <Input
            control={control}
            name="cvc"
            type="number"
            placeholder="CVC/CVV"
            maxLength={4}
          ></Input>
        </div> */}
    </>
  );
};

export default CheckoutCreditForm;
