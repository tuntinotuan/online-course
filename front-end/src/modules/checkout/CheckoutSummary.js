import React from "react";
import { Button } from "../../components/button";
import CoursePrice from "../../components/course/CoursePrice";
import CheckoutTitle from "./CheckoutTitle";
import { useDispatch, useSelector } from "react-redux";
import {
  totalCourseOriginnalPrice,
  totalCoursePrice,
  totalDiscountPriceForCoupon,
} from "../../utils/processing-number";
import { handlePaymentWithCheckout } from "../../redux-toolkit/order/orderHandlerThunk";
import { useSearchParams } from "react-router-dom";
import LoadingSpin from "../../components/loading/LoadingSpin";
import { toast } from "react-toastify";
import { setCardNumber } from "../../redux-toolkit/order/orderSlice";

const CheckoutSummary = () => {
  const dispatch = useDispatch();
  const [param] = useSearchParams();
  const paymentNow = param.get("payment-now");
  const paymentMethod = param.get("payment-method");
  const { course } = useSelector((state) => state.course);
  const { myCart } = useSelector((state) => state.cart);
  const { orderLoading } = useSelector((state) => state.order);
  const { courses } = myCart;
  const { listDiscount } = useSelector((state) => state.discount);
  const handlePayment = async () => {
    if (!paymentMethod) return toast.warning("Please select Payment Method!");
    if (paymentMethod === "checkout")
      dispatch(handlePaymentWithCheckout(!paymentNow ? courses : [course]));
    if (paymentMethod === "element") {
      dispatch(setCardNumber(true));
      setTimeout(() => {
        dispatch(setCardNumber(false));
      });
    }
    // const newValues = {
    //   navigate,
    //   stripeElement: stripe,
    //   elements,
    //   courses: !paymentNow ? courses : [course],
    //   cardNumberElement: elements.getElement(CardNumberElement),
    // };
    // if (paymentMethod === "element")
    //   dispatch(handlePaymentWithElement(newValues));
  };
  // const handlePayment = async () => {
  //   const newValues = {
  //     navigate,
  //     stripeElement: stripe,
  //     elements,
  //     courses: !paymentNow ? courses : [course],
  //     cardNumberElement: elements.getElement(CardNumberElement),
  //   };
  //   dispatch(handlePaymentWithElement(newValues));

  //   // try {
  //   //   if (!stripe || !elements) return;
  //   //   const { data } = await makePaymentRequest.post(`/custom`, {
  //   //     amount: paymentData.amount,
  //   //   });
  //   //   const client_secret = data.client_secret;

  //   //   const result = await stripe.confirmCardPayment(client_secret, {
  //   //     payment_method: {
  //   //       card: elements.getElement(CardNumberElement),
  //   //       billing_details: {
  //   //         // name: user.name,
  //   //         // email: user.email,
  //   //       },
  //   //     },
  //   //   });

  //   //   if (result.error) {
  //   //     toast.error(result.error.message);
  //   //     console.log(result.error.message);
  //   //   } else {
  //   //     console.log("succeeded payment");
  //   //     if (result.paymentIntent.status === "succeeded") {
  //   //       order.paymentInfo = {
  //   //         id: result.paymentIntent.id,
  //   //         status: result.paymentIntent.status,
  //   //       };
  //   //       // dispatch(createOrder(order));
  //   //       order &&
  //   //         order.orderItems.map((item) => {
  //   //           // dispatch(removeItemsFromCart(item.product));
  //   //         });
  //   //       // navigate("/success");
  //   //     } else {
  //   //       toast.error("There's some issue while processing payment ");
  //   //       console.log("There's some issue while processing payment ");
  //   //     }
  //   //   }
  //   // } catch (error) {
  //   //   toast.error(error);
  //   //   console.log(error);
  //   // }
  // };
  const totalPrice =
    totalCoursePrice(!paymentNow ? courses : [course]) -
    totalDiscountPriceForCoupon(listDiscount);
  return (
    <div className="sticky top-5 mt-24 pl-12">
      <CheckoutTitle className="mb-5">Summary</CheckoutTitle>
      <div className="flex flex-col gap-2 border border-transparent border-b-grayA6 border-opacity-25 pb-3">
        <div className="flex items justify-between">
          <span>Original Price:</span>
          <CoursePrice
            price={totalCourseOriginnalPrice(
              !paymentNow ? courses : [course]
            ).toLocaleString("en-US")}
            className="font-normal"
          ></CoursePrice>
        </div>
        {totalCourseOriginnalPrice(!paymentNow ? courses : [course]) -
          totalCoursePrice(!paymentNow ? courses : [course]) >
          0 && (
          <div className="flex items justify-between">
            <span>Discounts:</span>
            <CoursePrice
              price={(
                totalCourseOriginnalPrice(!paymentNow ? courses : [course]) -
                totalCoursePrice(!paymentNow ? courses : [course])
              ).toLocaleString("en-US")}
              className="font-normal"
              minus
            ></CoursePrice>
          </div>
        )}
        {listDiscount?.map((discount) => (
          <div className="flex items justify-between">
            <span>{discount.code}</span>
            <CoursePrice
              price={discount.price.toLocaleString("en-US")}
              className="font-normal"
              minus
            ></CoursePrice>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-between text-base font-bold pt-3 mb-5">
        <span>Total:</span>
        <CoursePrice price={totalPrice.toLocaleString("en-US")}></CoursePrice>
      </div>
      <span className="text-xs text-grayA6">
        By completing your purchase you agree to these
        <span className="text-purpleText56 ml-1">Terms of Service</span>
      </span>
      <Button
        className="flex items-center justify-center bg-purpleTextA4 text-white text-base font-bold py-4 my-3"
        borderNone
        full
        to=""
        onClick={handlePayment}
        disabled={orderLoading}
      >
        {orderLoading && (
          <LoadingSpin size="24px" borderSize="2px"></LoadingSpin>
        )}
        {!orderLoading && "Complete Checkout"}
      </Button>
      <span className="block text-center text-xs text-grayA6">
        30-Day Money-Back Guarantee
      </span>
    </div>
  );
};

export default CheckoutSummary;
