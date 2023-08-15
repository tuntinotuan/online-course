import React from "react";

const RadioPaymentInput = ({ on, id, onClick }) => {
  return (
    <input
      type="radio"
      name="payment-method"
      checked={on}
      id={id}
      className="w-6 h-6 text-red-600 bg-red-100 border-red-300 accent-black hidden"
      onClick={onClick}
      onChange={() => {}}
    />
  );
};

export default RadioPaymentInput;
