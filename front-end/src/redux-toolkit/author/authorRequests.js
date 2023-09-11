import { strapi } from "../../utils/strapi-config";

export function requestGetAuthorList() {
  return strapi.find("users", {
    filters: {
      role: {
        name: {
          $contains: "Author",
        },
      },
    },
    populate: {
      courses: {
        populate: ["overview_image", "user", "reviews", "purchased_courses"],
      },
      avatar: {
        populate: "*",
      },
      role: {
        populate: "*",
      },
    },
  });
}

export function requestGetSingleAuthor(authorId) {
  return strapi.findOne("users", authorId, {
    populate: {
      courses: {
        populate: ["overview_image", "user", "reviews", "purchased_courses"],
      },
      avatar: {
        populate: "*",
      },
    },
  });
}
