import React from "react";
import CheckoutTitle from "./CheckoutTitle";
import CheckoutItem from "./CheckoutItem";

const listItem = [
  {
    url: "https://img-b.udemycdn.com/course/100x100/4530794_8cd1_2.jpg",
    title: "PMBOK Guide 7th Edition Review 18 PDUs, Renew the PMP",
    price: "1,899,000",
  },
  {
    url: "https://img-b.udemycdn.com/course/100x100/3142166_a637_3.jpg",
    title: "[NEW] Ultimate AWS Certified Cloud Practitioner - 2023",
    price: "2,499,000",
  },
];

const CheckoutOrderDetails = () => {
  return (
    <div>
      <CheckoutTitle className="mb-5">Order Details</CheckoutTitle>
      {listItem.map((item) => (
        <CheckoutItem
          key={item.title}
          urlImage={item.url}
          title={item.title}
          price={item.price}
        ></CheckoutItem>
      ))}
    </div>
  );
};

export default CheckoutOrderDetails;
