import React from "react";
import ManagePromotionItem from "./ManagePromotionItem";
import { useSelector } from "react-redux";

const ManagePromotionList = () => {
  const { discountACourse } = useSelector((state) => state.discount);
  return (
    <>
      {discountACourse?.map((discount) => (
        <ManagePromotionItem discount={discount}></ManagePromotionItem>
      ))}
    </>
  );
};

export default ManagePromotionList;
