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

export function requestGetAllTopics(query) {
  return strapi.find("topics", {
    filters: query
      ? {
          name: {
            $contains: query,
          },
        }
      : {},
    populate: "*",
    // pagination: {
    //   page: 1,
    //   pageSize: 5,
    // },
  });
}
