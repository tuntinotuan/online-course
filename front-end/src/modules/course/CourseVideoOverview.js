import React from "react";
import Button from "../../components/button/Button";
import {
  IconCode,
  IconCursor,
  IconDevice,
  IconDocument,
  IconDownload,
  IconFilm,
  IconTrophy,
} from "../../components/icon";
import CourseVideo from "./CourseVideo";
import { useDispatch, useSelector } from "react-redux";
import CoursePrice from "../../components/course/CoursePrice";
import { handleAddToCart } from "../../redux-toolkit/cart/cartHandlerThunk";
import { useParams } from "react-router-dom";
import LoadingSpine from "../../components/loading/LoadingSpine";

const CourseVideoOverview = ({ offset }) => {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const { course } = useSelector((state) => state.course);
  const { myCart, myCartLocal, loadingAdd } = useSelector(
    (state) => state.cart
  );
  const { courses } = myCart;
  let pointScrollFixed = offset > 299;
  const scrollbarHeight = document.body.scrollHeight;
  let pointScrollSticky = offset > scrollbarHeight - 999;
  const intoCart = (courses || myCartLocal)?.some((item) => {
    return item.id === Number(courseId);
  });
  const addToCart = () => {
    dispatch(handleAddToCart(courseId));
  };
  return (
    <section
      className={`${
        pointScrollFixed
          ? `${
              pointScrollSticky
                ? "absolute mt-auto bottom-0"
                : "fixed top-4 z-[49]"
            } max-w-[350px]`
          : `-translate-y-1/3`
      } bg-white dark:bg-darkMain border border-white dark:border-primaryBlack shadow-lg`}
    >
      <CourseVideo className={pointScrollFixed ? "hidden" : ""}></CourseVideo>
      <div className="p-5">
        <CoursePrice
          className="text-3xl mb-3"
          price={
            course?.current_price?.toLocaleString("en-US") ||
            course?.original_price?.toLocaleString("en-US")
          }
        ></CoursePrice>
        {course?.current_price && (
          <CoursePrice
            className="text-xl font-normal line-through mb-3"
            price={
              course?.original_price?.toLocaleString("en-US") || "1,799,000"
            }
          ></CoursePrice>
        )}
        <Button
          className="flex items-center justify-center bg-purpleTextA4 font-bold text-white mb-2"
          square="py-3"
          to={intoCart && "/cart"}
          full
          borderNone
          onClick={intoCart ? () => {} : addToCart}
        >
          {loadingAdd && (
            <LoadingSpine size="22px" borderSize="2px"></LoadingSpine>
          )}
          {!loadingAdd && (intoCart ? "Go to cart" : "Add to cart")}
        </Button>
        <Button
          className="font-bold"
          square="py-3"
          full
          to={`/cart/checkout?payment-now=${courseId}`}
        >
          Buy now
        </Button>
        <p className="text-xs text-center mt-3 opacity-80">
          30-Day Money-Back Guarantee
        </p>
        <h3 className="text-[15px] font-bold mt-5 mb-3">
          This course includes:
        </h3>
        <div className="flex items-center gap-4 mt-1">
          <IconFilm size={16}></IconFilm>
          <p>21 hours on-demand video</p>
        </div>
        <div className="flex items-center gap-4 mt-1">
          <IconCode size={16}></IconCode>
          <p>7 coding exercises</p>
        </div>
        <div className="flex items-center gap-4 mt-1">
          <IconDocument size={16}></IconDocument>
          <p>3 articles</p>
        </div>
        <div className="flex items-center gap-4 mt-1">
          <IconDownload size={17}></IconDownload>
          <p>4 downloadable resources</p>
        </div>
        <div className="flex items-center gap-4 mt-1">
          <IconDevice size={18}></IconDevice>
          <p>Access on mobile and TV</p>
        </div>
        <div className="flex items-center gap-4 mt-1">
          <IconCursor size={18}></IconCursor>
          <p>Full lifetime access</p>
        </div>
        <div className="flex items-center gap-4 mt-1">
          <IconTrophy size={16}></IconTrophy>
          <p>Certificate of completion</p>
        </div>
        <div className="flex items-center justify-between text-sm font-bold mt-3">
          <p className="border border-transparent border-b-current hover:text-primaryBg cursor-pointer">
            Share
          </p>
          <p className="border border-transparent border-b-current hover:text-primaryBg cursor-pointer">
            Gift this course
          </p>
          <p className="border border-transparent border-b-current hover:text-primaryBg cursor-pointer">
            Apply Coupon
          </p>
        </div>
      </div>
      <div className="border border-transparent border-t-slate-200 dark:border-t-primaryBlack mt-4 p-5">
        <h2 className="text-xl font-bold">Training 5 or more people?</h2>
        <p className="my-2">
          Get your team access to 19,000+ top Udemy courses anytime, anywhere.
        </p>
        <Button className="font-bold" full>
          Try Udemy Business
        </Button>
      </div>
    </section>
  );
};

export default CourseVideoOverview;
