import React from "react";
import { Button, ButtonHeart, ButtonStatusTag } from "../button";
import CourseSumary from "./CourseSumary";
import ReactDOM from "react-dom";
import { SpecialArrow, SpecialTextWithCheckIcon } from "../special";
import { Link } from "react-router-dom";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { handleAddToCart } from "../../redux-toolkit/cart/cartHandlerThunk";
import {
  handleAddToWishlist,
  handleRemoveItemFromWishlist,
} from "../../redux-toolkit/wishlist/wishlistHandlerThunk";
import LoadingSpine from "../loading/LoadingSpine";
const targetCourse = [
  "Master Machine Learning on Python & R",
  "Have a great intuition of many Machine Learning models. What is your name, What's up Bro?",
  "Make accurate predictions",
];
const CourseTooltip = ({
  courseId,
  title,
  subtitle,
  updatedAt,
  bestSeller,
  hovered,
  coords,
  coordinateMiddle = false,
  onMouseOver = () => {},
  onMouseOut = () => {},
}) => {
  const dispatch = useDispatch();
  const { myCart, loadingAdd } = useSelector((state) => state.cart);
  const { courses } = myCart;
  const { myWishlist } = useSelector((state) => state.wishlist);
  console.log("coords", coords);
  const intoCart = courses?.some((item) => {
    return item.id === courseId;
  });
  const intoWishlist = myWishlist.courses?.some((item) => {
    return item.id === courseId;
  });
  const addToCart = () => {
    dispatch(handleAddToCart(courseId));
  };
  const addToWishlist = () => {
    dispatch(handleAddToWishlist(courseId));
  };
  const removeFromWishList = () => {
    dispatch(handleRemoveItemFromWishlist(courseId));
  };
  return ReactDOM.createPortal(
    <div
      className={`absolute bg-white w-[340px] h-auto border border-gray-300 p-6 transition-all duration-200 ${
        hovered
          ? "opacity-100 visible scale-100"
          : "opacity-0 invisible scale-90"
      } ${coordinateMiddle ? "-translate-x-1/2" : "-translate-y-1/2"} z-50`}
      style={
        coords && {
          top: coordinateMiddle
            ? coords?.y > window.innerHeight / 2
              ? coords.top - 290 + 5 + window.scrollY
              : coords.bottom + 5 + window.scrollY
            : coords.top + coords.height / 2 + window.scrollY,
          left: coordinateMiddle
            ? coords?.left + coords.width / 2
            : coords?.x > window.innerWidth / 2
            ? coords?.x - 340 - 20
            : coords?.x + coords.width + 20,
        }
      }
      onMouseOver={onMouseOver}
      onMouseOut={onMouseOut}
    >
      <Link
        to={`/course/${courseId}`}
        className="text-lg course-title font-bold transition-all hover:text-purpleText56 cursor-pointer"
      >
        {title}
      </Link>
      <div className="flex items-center gap-2">
        {bestSeller && (
          <ButtonStatusTag className="bg-tagYellow">Bestseller</ButtonStatusTag>
        )}
        {updatedAt && (
          <span className="text-xs text-greenText1E">
            Updated{" "}
            <p className="inline font-bold">
              {moment(updatedAt).format("MMMM YYYY") || "June 2023"}
            </p>
          </span>
        )}
      </div>
      <CourseSumary className="my-2"></CourseSumary>
      <p>{subtitle}</p>
      <div className="my-3">
        {targetCourse.map((item) => (
          <SpecialTextWithCheckIcon
            text={item}
            key={item}
          ></SpecialTextWithCheckIcon>
        ))}
      </div>
      <div className="flex items-center justify-between">
        <Button
          className="flex items-center justify-center w-[230px] bg-purpleTextA4 text-white text-lg font-bold py-4"
          borderNone
          to={intoCart && "/cart"}
          onClick={addToCart}
        >
          {loadingAdd && (
            <LoadingSpine size="28px" borderSize="2px"></LoadingSpine>
          )}
          {!loadingAdd && (intoCart ? "Go to cart" : "Add to cart")}
        </Button>
        <ButtonHeart
          courseId={courseId}
          onClick={!intoWishlist ? addToWishlist : removeFromWishList}
          contain={intoWishlist}
        ></ButtonHeart>
      </div>
      <div
        className={`cover-space absolute w-5 h-full bg-transparent ${
          coordinateMiddle
            ? coords?.y > window.innerHeight / 2
              ? "top-full left-0 w-full !h-5"
              : "bottom-full left-0 w-full !h-5"
            : coords?.x > window.innerWidth / 2
            ? "left-full top-0"
            : "right-full top-0"
        }`}
      ></div>
      <SpecialArrow
        coords={coords}
        coordinateMiddle={coordinateMiddle}
      ></SpecialArrow>
    </div>,
    document.querySelector("body")
  );
};

export default CourseTooltip;
