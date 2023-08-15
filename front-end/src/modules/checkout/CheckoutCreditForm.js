import React from "react";
import Input from "../../components/input/Input";
import { useForm } from "react-hook-form";

const CheckoutCreditForm = () => {
  const { control } = useForm();
  return (
    <div>
      <div className="flex items-center justify-end">
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
        </div>
      </div>
      {/* <CreditCardInput></CreditCardInput> */}
    </div>
  );
};

export default CheckoutCreditForm;
