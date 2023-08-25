export function processingSearchArray(arr, keyword) {
  if (keyword === "") return arr;
  let newArr = [];
  const process = arr?.filter((item) =>
    item.title.toLowerCase().includes(keyword)
  );
  newArr = process;
  return newArr;
}
