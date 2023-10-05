import { strapi } from "../../utils/strapi-config";

export function requestCheckCouponOfDiscount(coupon, arrCourseId) {
  return strapi.find("discounts", {
    filters: {
      $and: [
        {
          code: {
            $eq: coupon,
          },
        },
        {
          course: {
            id: {
              $eq: arrCourseId,
            },
          },
        },
      ],
    },
  });
}
export function requestGetDiscountOfCourse(courseId) {
  return strapi.find("discounts", {
    filters: {
      course: {
        id: {
          $eq: Number(courseId),
        },
      },
    },
  });
}
export function requestCreateDiscount(values) {
  return strapi.create("discounts", { ...values, code: values.coupon });
}
export function requestDiscountConnectWithCourse(discountId, courseId) {
  return strapi.update("discounts", discountId, {
    course: {
      connect: [{ id: courseId }],
    },
  });
}
export function requestUpdateDiscount(discountId, values) {
  return strapi.update("discounts", discountId, {
    ...values,
    code: values.coupon,
  });
}
export function requestDeleteDiscount(discountId) {
  return strapi.delete("discounts", discountId);
}
