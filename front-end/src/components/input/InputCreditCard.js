import React, { useState } from "react";

const InputCreditCard = () => {
  const [cardNumber, setCardNumber] = useState("");

  const handleCardNumberChange = (event) => {
    const input = event.target.value;
    // Remove non-numeric characters
    const cleanInput = input.replace(/\D/g, "");

    // Format the input with spaces for every 4 characters
    const formattedInput = cleanInput.replace(/(\d{4})/g, "$1 ");

    setCardNumber(formattedInput);
  };

  return (
    <div>
      <h2>Credit Card Input</h2>
      <input
        type="text"
        placeholder="Enter credit card number"
        value={cardNumber}
        maxLength={19}
        onChange={handleCardNumberChange}
      />
    </div>
  );
};

export default InputCreditCard;
