import React from "react";
import { ButtonStatusTag } from "../button";
import CoursePrice from "./CoursePrice";
import Image from "../image/Image";
import CourseTooltip from "./CourseTooltip";
import useHover from "../../hooks/useHover";
import { Link, useSearchParams } from "react-router-dom";
import { strapiPathBE } from "../../utils/constants";
import { IconHeartSolid } from "../icon";
import { handleRemoveItemFromWishlist } from "../../redux-toolkit/wishlist/wishlistHandlerThunk";
import { useDispatch, useSelector } from "react-redux";
import { processingSearchArray } from "../../utils/processing-array";
import { setWishlistSearch } from "../../redux-toolkit/wishlist/wishlistSlice";
import CourseRating from "./CourseRating";

const CourseCard = ({
  id,
  img,
  title,
  subtitle,
  updatedAt,
  instructor,
  star,
  reviews,
  originalPrice,
  currentPrice,
  bestSeller = false,
  blockTooltip = false,
  iconHeart = false,
  imageHeight = "h-[135px]",
}) => {
  const dispatch = useDispatch();
  const { nodeRef, hovered, setHovered, coords } = useHover();
  const [params] = useSearchParams();
  const query = params.get("q-wishlist");
  const { myWishlist } = useSelector((state) => state.wishlist);
  const { courses } = myWishlist;
  const removeFromWishList = async () => {
    try {
      dispatch(handleRemoveItemFromWishlist(id));
      if (query) {
        const newWishlist = await processingSearchArray(courses, query);
        dispatch(setWishlistSearch(newWishlist));
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="relative">
      <Link
        to={`/course/${id}`}
        className="course-card relative h-full select-none -z-1 cursor-pointer group"
        ref={nodeRef}
      >
        <div className={`${imageHeight}`}>
          <Image
            url={`${strapiPathBE}${img}`}
            className="mb-2"
            isOverlay={hovered}
          ></Image>
        </div>
        <div>
          <h3
            className="text-base course-title font-bold line-clamp-2"
            title={title}
          >
            {title}
          </h3>
          <p className="course-instructer text-xs text-grayA6 truncate">
            {instructor?.username}
          </p>
          <CourseRating
            rating={star}
            totalRating={reviews?.length}
          ></CourseRating>
          <div className="flex items-center text-base gap-2 mb-2">
            <span className="font-bold">
              <CoursePrice
                price={(currentPrice || originalPrice).toLocaleString("en-US")}
              ></CoursePrice>
            </span>
            <span className="line-through">
              {currentPrice && (
                <CoursePrice
                  price={originalPrice.toLocaleString("en-US")}
                  className="font-normal text-grayA6"
                ></CoursePrice>
              )}
            </span>
          </div>
          {bestSeller && (
            <ButtonStatusTag className="bg-tagYellow">
              Bestseller
            </ButtonStatusTag>
          )}
        </div>
      </Link>
      {!blockTooltip && (
        <CourseTooltip
          courseId={id}
          title={title}
          subtitle={subtitle}
          updatedAt={updatedAt}
          bestSeller={bestSeller}
          hovered={hovered}
          onMouseOver={() => setHovered(true)}
          onMouseOut={() => setHovered(false)}
          coords={coords}
        ></CourseTooltip>
      )}
      {iconHeart && (
        <div className="absolute top-3 right-3 text-white">
          <IconHeartSolid
            size={29}
            className="drop-shadow-md cursor-pointer"
            onClick={removeFromWishList}
          ></IconHeartSolid>
        </div>
      )}
    </div>
  );
};

export default CourseCard;
