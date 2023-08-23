import React from "react";
import CheckoutTitle from "./CheckoutTitle";
import CheckoutItem from "./CheckoutItem";
import { useSelector } from "react-redux";

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
  const { myCart } = useSelector((state) => state.cart);
  const { courses } = myCart;
  return (
    <div>
      <CheckoutTitle className="mb-5">Order Details</CheckoutTitle>
      {courses?.map((courses) => (
        <CheckoutItem courses={courses}></CheckoutItem>
      ))}
    </div>
  );
};

export default CheckoutOrderDetails;
