import { strapi } from "../../utils/strapi-config";

export function requestGetCategories() {
  return strapi.find("categories", {
    populate: {
      industries: {
        populate: "topics",
      },
    },
  });
}
export function requestGetTopics(industryId) {
  return strapi.findOne("industries", industryId, {
    populate: "*",
  });
}
