import React, { useEffect } from "react";
import CourseCard from "../components/course/CourseCard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { handleGetSingleAuthor } from "../redux-toolkit/author/authorHandlerThunk";
import { ButtonUserAvatar } from "../components/button";
import { strapiPathBE } from "../utils/constants";
import { totalReviews, totalStudents } from "../utils/processing-array";

const UserDetailsPage = () => {
  const dispatch = useDispatch();
  const { authorSingle } = useSelector((state) => state.author);
  const { authorId } = useParams();
  useEffect(() => {
    dispatch(handleGetSingleAuthor(authorId));
  }, [authorId, dispatch]);
  useEffect(() => {
    document.body.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);
  return (
    <section className="page-container-user-details flex justify-between gap-16 mt-12 mb-20">
      <div className={`w-2/3`}>
        <h3 className="font-bold text-grayA6">INSTRUCTOR</h3>
        <h1 className="text-4xl font-bold">{authorSingle.username}</h1>
        <h4 className="font-bold my-3">Business Planning Expert</h4>
        <div className="flex items-center gap-5 mb-10">
          <div>
            <h4 className="font-bold text-grayA6 mb-1">Total students</h4>
            <h2 className="text-2xl font-bold">
              {totalStudents(authorSingle?.courses).toLocaleString("en-US")}
            </h2>
          </div>
          <div>
            <h4 className="font-bold text-grayA6 mb-1">Reviews</h4>
            <h2 className="text-2xl font-bold">
              {totalReviews(authorSingle?.courses) || "379"}
            </h2>
          </div>
        </div>
        <h2 className="text-xl font-bold mb-4">About me</h2>
        <span className="text-base mb-5">
          Tim Berry is the founder of Palo Alto Software, makers of the top
          selling business plan software in the world. He is also the founder of
          Bplans.com, co-founder of Borland International, author of several
          best-selling books on business planning, and has a Stanford MBA.
        </span>
        <h2 className="text-xl font-bold my-4">{`My courses (${authorSingle?.courses?.length})`}</h2>
        <div className={`grid grid-cols-2 gap-4`}>
          {authorSingle?.courses?.map((items) => (
            <CourseCard
              id={items.id}
              img={items?.overview_image?.url}
              title={items?.title}
              instructor={items?.user}
              currentPrice={items?.current_price}
              originalPrice={items?.original_price}
              reviews={items?.reviews}
              bestSeller={items?.best_seller}
              blockTooltip
              imageHeight="h-[165px]"
            ></CourseCard>
          ))}
        </div>
      </div>
      <div className="flex-auto">
        <ButtonUserAvatar
          avatar={
            authorSingle?.avatar &&
            `${strapiPathBE}${authorSingle?.avatar?.url}`
          }
          shortName={authorSingle.username}
          size={200}
        ></ButtonUserAvatar>
      </div>
    </section>
  );
};

export default UserDetailsPage;
