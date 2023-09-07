import { strapi } from "../../utils/strapi-config";

export function requestGetMySingleReview(userId, courseId) {
  return strapi.find("reviews", {
    filters: {
      $and: [
        {
          user: {
            id: {
              $eq: userId,
            },
          },
        },
        {
          course: {
            id: {
              $eq: courseId,
            },
          },
        },
      ],
    },
    // populate: "*",
  });
}

export function requestUpdateCurrentReview(mySingleReview, value, content) {
  return strapi.update("reviews", mySingleReview.id, {
    rating: value,
    content: content,
  });
}

export function requestCreateReview(
  currentReviewId,
  currentUserId,
  value,
  content
) {
  return strapi.create("reviews", {
    course: {
      connect: [{ id: currentReviewId }],
    },
    user: {
      connect: [{ id: currentUserId }],
    },
    rating: value,
    content: content,
  });
}
