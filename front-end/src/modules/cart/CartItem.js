import React from "react";
import CourseSumary from "../../components/course/CourseSumary";
import CourseRating from "../../components/course/CourseRating";
import CoursePrice from "../../components/course/CoursePrice";
import { ButtonStatusTag } from "../../components/button";
import Image from "../../components/image/Image";
import { strapiPathBE } from "../../utils/constants";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { handleRemoveItemFromCart } from "../../redux-toolkit/cart/cartHandlerThunk";
import {
  handleAddToWishlist,
  handleMoveItemToCart,
  handleRemoveItemFromWishlist,
} from "../../redux-toolkit/wishlist/wishlistHandlerThunk";

const CartItems = ({
  id,
  img,
  title,
  instructor,
  rating,
  originalPrice,
  currentPrice,
  forWishlist = false,
}) => {
  const dispatch = useDispatch();
  const removeItem = () => {
    !forWishlist && dispatch(handleRemoveItemFromCart(id));
    forWishlist && dispatch(handleRemoveItemFromWishlist(id));
  };
  const moveItem = () => {
    if (!forWishlist) {
      dispatch(handleRemoveItemFromCart(id));
      dispatch(handleAddToWishlist(id));
    } else {
      dispatch(handleMoveItemToCart(id));
    }
  };
  return (
    <div className="flex items-start border border-transparent border-t-gray-200 dark:border-t-primaryBlack py-4">
      <Link to={`/course/${id}`} className="w-[120px]">
        <Image url={`${strapiPathBE}${img?.url}`}></Image>
      </Link>
      <div className="flex flex-col gap-1 mx-4">
        <Link
          to={`/course/${id}`}
          className="max-w-[400px] font-bold text-base line-clamp-2"
        >
          {title || "The Complete 2023 Web Development Bootcamp"}
        </Link>
        <h2 className="text-grayA6 text-xs">{instructor || "By Dr. Jason"}</h2>
        <div className="flex items-center gap-2">
          <ButtonStatusTag className="bg-tagYellow">Bestseller</ButtonStatusTag>
          <ButtonStatusTag className="bg-tagSky">
            Updated Recently
          </ButtonStatusTag>
          <CourseRating
            rating={rating}
            totalRating={rating?.length}
          ></CourseRating>
        </div>
        <CourseSumary></CourseSumary>
      </div>
      <div className="flex flex-col items-end gap-2 ml-auto">
        <button className="text-purpleText56" onClick={removeItem}>
          Remove
        </button>
        <button className="text-purpleText56" onClick={moveItem}>
          {forWishlist ? "Move to Cart" : "Move to Wishlist"}
        </button>
      </div>
      <div className="text-base ml-10">
        <CoursePrice
          className="text-purpleTextA4"
          price={(currentPrice || originalPrice)?.toLocaleString("en-US")}
          tag
        ></CoursePrice>
        {currentPrice && (
          <CoursePrice
            className="font-normal text-grayA6 line-through"
            price={originalPrice?.toLocaleString("en-US")}
          ></CoursePrice>
        )}
      </div>
    </div>
  );
};

export default CartItems;
