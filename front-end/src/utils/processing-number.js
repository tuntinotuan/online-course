export function totalCoursePrice(arrData) {
  if (!arrData)
    throw new Error("totalCoursePrice must be have a arrData param");
  let total = 0;
  arrData.forEach((item) => {
    total += item.current_price || item.original_price;
  });
  return total;
}

export function totalCourseOriginnalPrice(arrData) {
  if (!arrData)
    throw new Error("totalCourseOriginnalPrice must be have a arrData param");
  let total = 0;
  arrData.forEach((item) => {
    total += item.original_price;
  });
  return total;
}
