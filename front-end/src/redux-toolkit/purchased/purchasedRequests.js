import { strapi } from "../../utils/strapi-config";

export function requestGetMyPurchasedCourses(purchasedId) {
  return strapi.findOne("purchased-courses", purchasedId, {
    populate: ["courses.overview_image", "courses.user"],
  });
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
