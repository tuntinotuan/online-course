export function processingSearchArray(arr, keyword) {
  if (keyword === "") return arr;
  let newObj = [];
  const process = arr.filter((item) =>
    item.title.toLowerCase().includes(keyword)
  );
  newObj = process;
  return newObj;
}
