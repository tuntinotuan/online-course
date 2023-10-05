import React, { useState } from "react";
import { IconPen, IconTrash } from "../../../../components/icon";
import CoursePrice from "../../../../components/course/CoursePrice";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import {
  handleDeleteDiscount,
  handleUpdateDiscount,
} from "../../../../redux-toolkit/discount/discountHandlerThunk";
import ManagePromotionEdit from "./ManagePromotionEdit";
import { useParams } from "react-router-dom";

const ManagePromotionItem = ({ discount }) => {
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const [showUpdateCoupon, setShowUpdateCoupon] = useState(false);
  const deleteCoupon = (discountId) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      imageWidth: 100,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(handleDeleteDiscount({ discountId, courseId }));
      }
    });
  };
  const updateCoupon = (values) => {
    dispatch(
      handleUpdateDiscount({ courseId, discountId: discount.id, values })
    );
    setShowUpdateCoupon(false);
  };
  return (
    <>
      {!showUpdateCoupon && (
        <div className="flex items-center justify-between gap-2 w-[290px] border border-gray-300 rounded p-2 my-2 group">
          <div className="flex items-center gap-2">
            <span className="font-bold text-grayA6">{discount.code}</span>
            <IconPen
              className="opacity-0 invisible group-hover:opacity-100 group-hover:visible"
              size={15}
              onClick={() => setShowUpdateCoupon(true)}
            ></IconPen>
            <IconTrash
              className="opacity-0 invisible group-hover:opacity-100 group-hover:visible"
              size={15}
              onClick={() => deleteCoupon(discount.id)}
            ></IconTrash>
          </div>
          <CoursePrice
            price={discount.price.toLocaleString("en-US")}
          ></CoursePrice>
        </div>
      )}
      {showUpdateCoupon && (
        <ManagePromotionEdit
          submitForm={updateCoupon}
          btnTitle="Update Coupon"
          values={discount}
          onClickClose={() => setShowUpdateCoupon(false)}
        ></ManagePromotionEdit>
      )}
    </>
  );
};

export default ManagePromotionItem;
