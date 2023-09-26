import { strapi } from "../../utils/strapi-config";

export function requestSearchCourse(filter) {
  const { keyword, sortBy, rating, searchPage } = filter;
  return strapi.find("courses", {
    filters: {
      $or: [
        {
          title: {
            $contains: keyword,
          },
        },
        {
          user: {
            username: { $contains: keyword },
          },
        },
      ],
      $and: rating
        ? [
            {
              star: {
                $gte: rating,
              },
            },
            {
              star: {
                $lte: 5,
              },
            },
          ]
        : [{}],
    },
    sort: [sortBy],
    populate: "*",
    pagination: {
      page: searchPage || 1,
      pageSize: 5,
    },
  });
}
