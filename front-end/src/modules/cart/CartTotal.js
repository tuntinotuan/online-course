import React, { useEffect } from "react";
import Button from "../../components/button/Button";
import CoursePrice from "../../components/course/CoursePrice";
import {
  totalCourseOriginnalPrice,
  totalCoursePrice,
  totalDiscountPriceForCoupon,
} from "../../utils/processing-number";
import { useDispatch, useSelector } from "react-redux";
import { toggleShowPopupSignUp } from "../../redux-toolkit/globalSlice";
import { useForm } from "react-hook-form";
import { Input } from "../../components/input";
import { IconClose } from "../../components/icon";
import { handleCheckCouponOfDiscount } from "../../redux-toolkit/discount/discountHandlerThunk";
import LoadingSpin from "../../components/loading/LoadingSpin";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  setErrorCoupon,
  setListDiscount,
} from "../../redux-toolkit/discount/discountSlice";

const schema = yup.object({
  coupon: yup
    .string()
    .min(
      4,
      "The coupon code entered is not valid for this course. Perhaps you used the wrong coupon code?"
    )
    .required(
      "The coupon code entered is not valid for this course. Perhaps you used the wrong coupon code?"
    ),
});

const CartTotal = ({ data }) => {
  const dispatch = useDispatch();
  const { jwt } = useSelector((state) => state.auth);
  const { myCart } = useSelector((state) => state.cart);
  const { loadingIsApply, errorCoupon, listDiscount } = useSelector(
    (state) => state.discount
  );
  const {
    control,
    handleSubmit,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
  });
  const discountForCoupon = totalDiscountPriceForCoupon(listDiscount);
  const total = totalCoursePrice(data) - discountForCoupon;
  const originalTotal = totalCourseOriginnalPrice(data || []);
  const discount = originalTotal - total;
  const discountOnPercentage = (discount / originalTotal) * 100;
  const watchCoupon = watch("coupon");
  useEffect(() => {
    dispatch(setErrorCoupon(""));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchCoupon]);
  // useEffect(() => {
  //   listDiscount?.length > 0 && dispatch(setListDiscount(null));
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [myCart]);
  const applyForCoupon = (values) => {
    dispatch(handleCheckCouponOfDiscount(values));
    reset({ coupon: "" });
  };
  const clickRemoveDiscount = (discountId) => {
    const newListDiscount = listDiscount.filter(
      (discount) => discount.id !== discountId
    );
    dispatch(setListDiscount(newListDiscount));
  };
  return (
    <div className="flex-1">
      <div className="pb-4 mb-4 border border-transparent border-b-gray-200 dark:border-b-primaryBlack">
        <div className="font-bold mb-2">
          <p className="text-base text-grayA6 dark:text-darkTextCB mb-2">
            Total:
          </p>
          <CoursePrice
            price={total.toLocaleString("en-US")}
            className="text-4xl"
          ></CoursePrice>
          {discount > 0 && (
            <CoursePrice
              price={originalTotal.toLocaleString("en-US")}
              className="text-base font-normal text-grayA6 line-through"
            ></CoursePrice>
          )}
          {discountForCoupon > 0 && (
            <>
              <p className="text-xs">Discount by coupon:</p>
              {listDiscount.map((discount) => (
                <CoursePrice
                  price={discount.price.toLocaleString("en-US")}
                  className="text-xs font-normal text-grayA6"
                  minus
                ></CoursePrice>
              ))}
            </>
          )}
          {discount > 0 && (
            <span className="text-base font-normal">
              {discountOnPercentage.toFixed()}% off
            </span>
          )}
        </div>
        <Button
          className="bg-purpleTextA4 py-3 text-white text-base font-bold"
          borderNone
          full
          onClick={() => (!jwt ? dispatch(toggleShowPopupSignUp(true)) : {})}
          to={jwt ? "checkout" : false}
        >
          Checkout
        </Button>
      </div>
      <div>
        <h2 className="text-base font-bold">Promotions</h2>
        {listDiscount?.map((discount) => (
          <div className="flex items-center gap-2 my-2">
            <IconClose
              size={20}
              onClick={() => clickRemoveDiscount(discount.id)}
            ></IconClose>
            <span className="text-grayA6">
              <span className="font-bold uppercase">{discount.code}</span> is
              applied
            </span>
          </div>
        ))}
        <form onSubmit={handleSubmit(applyForCoupon)} className="flex">
          <Input
            size={20}
            name="coupon"
            className="!border-r-transparent"
            control={control}
            placeholder="Enter Coupon"
          ></Input>
          <Button
            type="submit"
            className="flex items-center justify-center !h-auto w-[90px] text-base text-white bg-purpleTextA4 font-bold !py-1"
            borderNone
            disabled={loadingIsApply}
          >
            {loadingIsApply && (
              <LoadingSpin size="22px" borderSize="1px"></LoadingSpin>
            )}
            {!loadingIsApply && "Apply"}
          </Button>
        </form>
        <span className="text-xs text-red-700">
          {errors?.coupon?.message || errorCoupon}
        </span>
      </div>
    </div>
  );
};

export default CartTotal;
