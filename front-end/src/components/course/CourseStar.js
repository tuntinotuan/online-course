import React from "react";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
const StyledRating = styled(Rating)({
  "& .MuiRating-iconFilled": {
    color: "#B4690E",
  },
  "& .MuiRating-iconHover": {
    color: "#ff3d47",
  },
  "& .MuiRating-iconEmpty": {
    color: "#B4690E",
  },
});
const CourseStar = ({ rating, readOnly = false }) => {
  const options = {
    value: rating,
    readOnly: readOnly,
    precision: 0.5,
  };
  return (
    <StyledRating
      size="small"
      name="half-rating"
      icon={<StarRoundedIcon fontSize="inherit" />}
      emptyIcon={<StarOutlineRoundedIcon fontSize="inherit" />}
      {...options}
    ></StyledRating>
  );
};

export default CourseStar;
