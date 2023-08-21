import React from "react";
import CourseSumary from "../../components/course/CourseSumary";
import CourseStar from "../../components/course/CourseStar";
import CoursePrice from "../../components/course/CoursePrice";
import { ButtonStatusTag } from "../../components/button";
import Image from "../../components/image/Image";
import { strapiPathBE } from "../../utils/constants";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleRemoveItemFromCart } from "../../redux-toolkit/cart/cartHandlerThunk";

const CartItems = ({ id, img, title, instructor, price }) => {
  const dispatch = useDispatch();
  const removeItemFromCart = () => {
    dispatch(handleRemoveItemFromCart(id));
  };
  return (
    <div className="flex items-start border border-transparent border-t-gray-200 py-4">
      <Link to={`/course/${id}`} className="w-[120px]">
        <Image url={`${strapiPathBE}${img?.url}`}></Image>
      </Link>
      <div className="flex flex-col gap-2 mx-4">
        <Link to={`/course/${id}`} className="font-bold text-base">
          {title || "The Complete 2023 Web Development Bootcamp"}
        </Link>
        <h2 className="text-grayA6 text-xs">{instructor || "By Dr. Jason"}</h2>
        <div className="flex items-center gap-2">
          <ButtonStatusTag className="bg-tagYellow">Bestseller</ButtonStatusTag>
          <ButtonStatusTag className="bg-tagSky">
            Updated Recently
          </ButtonStatusTag>
          <CourseStar></CourseStar>
        </div>
        <CourseSumary></CourseSumary>
      </div>
      <div className="flex flex-col items-end gap-2 mr-10 ml-auto">
        <button className="text-purpleText56" onClick={removeItemFromCart}>
          Remove
        </button>
        <button className="text-purpleText56">Save for Later</button>
      </div>
      <CoursePrice
        className="text-purpleTextA4 text-lg ml-auto"
        price={price?.toLocaleString("en-US")}
        tag
      ></CoursePrice>
    </div>
  );
};

export default CartItems;
