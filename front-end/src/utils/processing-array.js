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
