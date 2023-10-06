import React, { useEffect, useState } from "react";
import InstructorManageHeading from "../../modules/instructor/manage/InstructorManageHeading";
import IconPlus from "../../components/icon/IconPlus";
import { Button } from "../../components/button";
import { useDispatch } from "react-redux";
import {
  handleCreateDiscount,
  handleGetDiscountOfCourse,
} from "../../redux-toolkit/discount/discountHandlerThunk";
import { useParams } from "react-router-dom";
import ManagePromotionList from "../../modules/instructor/manage/promotion/ManagePromotionList";
import ManagePromotionEdit from "../../modules/instructor/manage/promotion/ManagePromotionEdit";

const ManagePromotionsPage = () => {
  const dispatch = useDispatch();
  const { courseId } = useParams();
  const [showNewCoupon, setShowNewCoupon] = useState(false);
  useEffect(() => {
    dispatch(handleGetDiscountOfCourse({ courseId }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const createCoupon = (values) => {
    dispatch(handleCreateDiscount({ values, courseId }));
    setShowNewCoupon(false);
  };
  return (
    <>
      <InstructorManageHeading>Promotions</InstructorManageHeading>
      <div className="p-10">
        <h1 className="font-bold text-xl mb-2">Coupons</h1>
        <div className="border border-gray-300 p-5">
          <ManagePromotionList></ManagePromotionList>
          <Button
            className={`flex items-center gap-1 font-bold !py-1 `}
            onClick={() => setShowNewCoupon(!showNewCoupon)}
          >
            <IconPlus
              className={`transition-all duration-500 ${
                showNewCoupon ? "-rotate-[135deg]" : ""
              }`}
            ></IconPlus>
            Coupon Item
          </Button>
          {showNewCoupon && (
            <ManagePromotionEdit
              submitForm={createCoupon}
              btnTitle="Add Coupon"
              onClickClose={() => setShowNewCoupon(false)}
            ></ManagePromotionEdit>
          )}
        </div>
      </div>
    </>
  );
};

export default ManagePromotionsPage;
