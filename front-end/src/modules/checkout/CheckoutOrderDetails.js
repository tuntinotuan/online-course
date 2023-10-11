import React, { useEffect } from "react";
import CheckoutTitle from "./CheckoutTitle";
import CheckoutItem from "./CheckoutItem";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { handleGetSingleCourse } from "../../redux-toolkit/course/courseHandlerThunk";

// const listItem = [
//   {
//     url: "https://img-b.udemycdn.com/course/100x100/4530794_8cd1_2.jpg",
//     title: "PMBOK Guide 7th Edition Review 18 PDUs, Renew the PMP",
//     price: "1,899,000",
//   },
//   {
//     url: "https://img-b.udemycdn.com/course/100x100/3142166_a637_3.jpg",
//     title: "[NEW] Ultimate AWS Certified Cloud Practitioner - 2023",
//     price: "2,499,000",
//   },
// ];

const CheckoutOrderDetails = () => {
  const dispatch = useDispatch();
  const [param] = useSearchParams();
  const paymentNow = param.get("payment-now");
  const { course } = useSelector((state) => state.course);
  const { myCart } = useSelector((state) => state.cart);
  const { courses } = myCart;
  useEffect(() => {
    dispatch(handleGetSingleCourse({ courseId: paymentNow }));
  }, [paymentNow, dispatch]);

  return (
    <div>
      <CheckoutTitle className="mb-5">Order Details</CheckoutTitle>
      {!paymentNow
        ? courses?.map((courses) => (
            <CheckoutItem courses={courses}></CheckoutItem>
          ))
        : course && <CheckoutItem courses={course}></CheckoutItem>}
    </div>
  );
};

export default CheckoutOrderDetails;
