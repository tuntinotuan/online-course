import React from "react";
import { CourseCardHasReview } from "../../components/course";
import { useSelector } from "react-redux";
import { Link, useSearchParams } from "react-router-dom";
import { Pagination } from "@mui/material";
import LoadingSpineQuarter from "../../components/loading/LoadingSpineQuarter";

const MyAllCourses = () => {
  const [param] = useSearchParams();
  const page = param.get("page");
  const [searchParams, setSearchParams] = useSearchParams();
  const { myPurchasedCourses, purchasedPagination, loadingPurchasedCourses } =
    useSelector((state) => state.purchased);
  const { pageCount } = purchasedPagination;
  const handleChangePage = (event, value) => {
    searchParams.set("page", value);
    setSearchParams(searchParams);
  };
  return (
    <div className="py-5">
      {loadingPurchasedCourses && (
        <div className="pt-28 pb-80">
          <LoadingSpineQuarter>loading</LoadingSpineQuarter>
        </div>
      )}
      {!loadingPurchasedCourses && myPurchasedCourses?.length > 0 ? (
        <div className="flex flex-col items-center">
          <div className="grid grid-cols-4 gap-4">
            {myPurchasedCourses?.map((course) => (
              <CourseCardHasReview
                data={course}
                page={page}
              ></CourseCardHasReview>
            ))}
          </div>
          <Pagination
            page={Number(page) || 1}
            count={pageCount}
            color="secondary"
            className="mt-5"
            onChange={handleChangePage}
          />
        </div>
      ) : (
        !loadingPurchasedCourses && (
          <div className="text-center mt-10 pb-40">
            <h1 className="text-lg font-bold">
              Start learning from over 210,000 courses today.
            </h1>
            <p className="text-base mt-4">
              When you purchase a course, it will appear here.{" "}
              <Link
                to="/"
                className="font-bold text-purpleText56 border border-transparent border-b-purpleText56"
              >
                Browse now.
              </Link>
            </p>
          </div>
        )
      )}
    </div>
  );
};

export default MyAllCourses;
