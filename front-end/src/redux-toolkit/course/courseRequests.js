import { strapi } from "../../utils/strapi-config";

export function requestGetCourseData(topic) {
  return strapi.find("courses", {
    filters: {
      $or: [
        {
          topic: {
            name: {
              $contains: topic || "Unity",
            },
          },
        },
        {
          topic: {
            industry: {
              name: {
                $contains: topic,
              },
            },
          },
        },
      ],
    },
    populate: {
      overview_image: {
        populate: "*",
      },
      user: {
        populate: "*",
      },
      reviews: {
        populate: "*",
      },
      topic: {
        populate: "*",
      },
    },
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
      reviews: {
        populate: ["user.avatar"],
      },
      topic: {
        populate: ["industry.category"],
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
export function requestUpdateTotalReviewsCourse(
  currentCourseId,
  newStar,
  amountReview
) {
  return strapi.update("courses", currentCourseId, {
    star: newStar,
    total_reviews: amountReview,
  });
}
