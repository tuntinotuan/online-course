import React from "react";

const RadioPaymentBody = ({ on, children }) => {
  return (
    <>
      {on && (
        <div className="border border-t-transparent border-gray-300 dark:border-primaryBlack p-6">
          {children}
        </div>
      )}
    </>
  );
};

export default RadioPaymentBody;
