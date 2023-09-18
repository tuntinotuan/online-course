import { strapi } from "../../utils/strapi-config";

export function requestGetMyCart(cartId) {
  return strapi.findOne("carts", cartId, {
    populate: ["courses.overview_image", "courses.user", "courses.reviews"],
  });
}
export function requestCreateCart(userId, courseId) {
  return strapi.create("carts", {
    courses: {
      connect: [{ id: courseId }],
    },
    user: {
      connect: [{ id: userId }],
    },
  });
}
export function requestAddToCart(cartId, courseId) {
  return strapi.update("carts", cartId, {
    courses: {
      connect: [{ id: courseId }],
    },
  });
}
export function requestRemoveItemFromCart(cartId, courseId) {
  console.log("input", cartId, courseId);
  return strapi.update("carts", cartId, {
    courses: {
      disconnect: [{ id: courseId }],
    },
  });
}
export function requestUpdateMyCartLocalToMyCart(cartId, courseId) {
  return strapi.update("carts", cartId, {
    courses: {
      connect: courseId,
    },
  });
}
export function requestRemoveNumerousItemsFromCart(cartId, courseId) {
  return strapi.update("carts", cartId, {
    courses: {
      disconnect: courseId,
    },
  });
}
