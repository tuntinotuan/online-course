import { strapi } from "../../utils/strapi-config";

export function requestGetCourseData() {
  return strapi.find("courses", {
    populate: "*",
    // pagination: {
    //   page: 1,
    //   pageSize: 5,
    // },
  });
}

export function requestGetSingleCourse(courseId) {
  return strapi.findOne("courses", courseId, {
    populate: {
      overview_image: {
        populate: "*",
      },
      video_lists: {
        populate: ["video_courses.video", "video_courses.preview_image"],
      },
      user: {
        populate: "*",
      },
      video_intro: {
        populate: "*",
      },
    },
    // populate: ["overview_image", "user.courses"],
  });
}

export function requestSearchCourse(filter) {
  const { keyword, sortBy, rating } = filter;
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
  });
}
