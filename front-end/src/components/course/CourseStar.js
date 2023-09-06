import React from "react";
import { styled } from "@mui/material/styles";
import Rating from "@mui/material/Rating";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import StarOutlineRoundedIcon from "@mui/icons-material/StarOutlineRounded";
const StyledRating = styled(Rating)(({ secondary }) => ({
  "& .MuiRating-iconFilled": {
    color: secondary ? "#F69C08" : "#B4690E",
  },
  "& .MuiRating-iconHover": {
    color: secondary ? "#F69C08" : "#B4690E",
  },
  "& .MuiRating-iconEmpty": {
    color: secondary ? "#F69C08" : "#B4690E",
  },
}));
const CourseStar = ({
  rating,
  readOnly = false,
  size = 18,
  secondary = false,
  onChange = () => {},
  onChangeActive = () => {},
}) => {
  const options = {
    value: rating,
    readOnly: readOnly,
    precision: 0.5,
  };
  return (
    <StyledRating
      name="half-rating"
      onChange={onChange}
      onChangeActive={onChangeActive}
      secondary={secondary}
      icon={<StarRoundedIcon fontSize="inherit" />}
      emptyIcon={<StarOutlineRoundedIcon fontSize="inherit" />}
      sx={{
        fontSize: size,
      }}
      {...options}
    ></StyledRating>
  );
};

export default CourseStar;
