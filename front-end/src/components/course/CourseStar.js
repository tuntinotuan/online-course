import React from "react";
import Rating from "@mui/material/Rating";
import StarBorderIcon from "@mui/icons-material/StarBorder";

const CourseStar = ({ rating = 4.9, totalRating = 310905 }) => {
  const options = {
    value: rating,
    readOnly: true,
    precision: 0.5,
  };
  return (
    <div className="flex items-center gap-1">
      <h2 className="text-starColor font-bold">{rating}</h2>
      <Rating
        name="half-rating text-feedback size-small"
        size="small"
        emptyIcon={
          <StarBorderIcon style={{ opacity: 0.55 }} fontSize="inherit" />
        }
        {...options}
      />
      <span className="text-xs text-grayA6">({totalRating} ratings)</span>
    </div>
  );
};

export default CourseStar;
