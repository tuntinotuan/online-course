import { strapi } from "../../utils/strapi-config";

export function requestGetSingleAuthor(authorId) {
  return strapi.findOne("users", authorId, {
    populate: {
      courses: {
        populate: ["overview_image", "user", "reviews"],
      },
      avatar: {
        populate: "*",
      },
    },
  });
}
