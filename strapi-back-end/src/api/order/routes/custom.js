module.exports = {
  routes: [
    {
      method: "POST",
      path: "/custom/payment-with-checkout",
      handler: "order.paymentWithCheckout",
      config: {
        auth: false,
      },
    },
    {
      method: "POST",
      path: "/custom/payment-with-element",
      handler: "order.paymentWithElement",
      config: {
        auth: false,
      },
    },
  ],
};
