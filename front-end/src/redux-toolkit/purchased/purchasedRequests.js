import { strapi } from "../../utils/strapi-config";

export function requestGetMyPurchasedCourses(
  purchasedId,
  page,
  nonPagination = true
) {
  return strapi.find("courses", {
    filters: {
      purchased_courses: {
        id: {
          $eq: purchasedId,
        },
      },
    },
    populate: "*",
    pagination: nonPagination
      ? {
          page: page || 1,
          pageSize: 8,
        }
      : {},
  });
  // return strapi.findOne("purchased-courses", purchasedId, {
  //   populate: ["courses.overview_image", "courses.user"],
  // });
}
export function requestCreatePurchasedCourses(userId, listCourseId) {
  return strapi.create("purchased-courses", {
    user: {
      connect: [{ id: userId }],
    },
    courses: {
      connect: listCourseId,
    },
  });
}
export function requestUpdatePurchasedCourses(purchasedCourseId, listCourseId) {
  return strapi.update("purchased-courses", purchasedCourseId, {
    courses: {
      connect: listCourseId,
    },
  });
}
export function requestFindPurchasedCourses(arrId) {
  if (!arrId.length > 0) return [];
  return strapi.find("purchased-courses", {
    filters: {
      id: {
        $eq: arrId,
      },
    },
    populate: {
      user: {
        populate: ["avatar"],
      },
    },
  });
}
