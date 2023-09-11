export function processingSearchArray(arr, keyword) {
  if (keyword === "") return arr;
  let newArr = [];
  const process = arr?.filter((item) =>
    item.title.toLowerCase().includes(keyword.toLowerCase())
  );
  newArr = process;
  return newArr;
}

export function processQuantityOfLectures(arrLectures) {
  let amount = 0;
  arrLectures.forEach((item) => (amount += item?.video_courses?.length));
  return amount;
}

export function processAllVideoPreview(arrSections) {
  let newArr = [];
  arrSections?.forEach((section) =>
    section?.video_courses?.forEach(
      (lecture) => lecture?.preview && newArr.push(lecture)
    )
  );
  return newArr;
}

export function totalStudents(arrCourses) {
  let total = 0;
  arrCourses?.forEach((course) => (total += course?.purchased_courses?.length));
  return total;
}
export function totalReviews(arrCourses) {
  let total = 0;
  arrCourses?.forEach((course) => (total += course?.reviews?.length));
  return total;
}
