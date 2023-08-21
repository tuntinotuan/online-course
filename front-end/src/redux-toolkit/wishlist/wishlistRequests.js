import { strapi } from "../../utils/strapi-config";

export function requestGetMyWishlist(wishlistId) {
  return strapi.findOne("favorites", wishlistId, {
    populate: ["courses.overview_image", "courses.user"],
  });
}
export function requestCreateWishlist(userId, courseId) {
  console.log("input", userId, courseId);
  return strapi.create("favorites", {
    courses: {
      connect: [{ id: courseId }],
    },
    user: {
      connect: [{ id: userId }],
    },
  });
}
export function requestAddToWishlist(wishlistId, courseId) {
  console.log("input", wishlistId, courseId);
  return strapi.update("favorites", wishlistId, {
    courses: {
      connect: [{ id: courseId }],
    },
  });
}
export function requestRemoveItemFromWishlist(wishlistId, courseId) {
  console.log("input", wishlistId, courseId);
  return strapi.update("favorites", wishlistId, {
    courses: {
      disconnect: [{ id: courseId }],
    },
  });
}
