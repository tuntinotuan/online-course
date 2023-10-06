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
export function requestGetAllCategories(query) {
  return strapi.find("categories", {
    filters: query
      ? {
          name: {
            $contains: query,
          },
        }
      : {},
    populate: "*",
  });
}
export function requestGetSingleCategory(categoryId) {
  return strapi.findOne("categories", categoryId);
}
export function requestUpdateCategory(categoryId, values) {
  return strapi.update("categories", categoryId, {
    name: values.name,
  });
}
export function requestDeleteCategory(categoryId) {
  return strapi.delete("categories", categoryId);
}
export function requestGetAllIndustries(query) {
  return strapi.find("industries", {
    filters: query
      ? {
          name: {
            $contains: query,
          },
        }
      : {},
    populate: "*",
  });
}
export function requestGetSingleIndustry(industryId) {
  return strapi.findOne("industries", industryId);
}
export function requestUpdateIndustry(industryId, values) {
  return strapi.update("industries", industryId, {
    name: values.name,
  });
}
export function requestDeleteIndustry(industryId) {
  return strapi.delete("industries", industryId);
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
export function requestGetSingleTopic(topicId) {
  return strapi.findOne("topics", topicId);
}
export function requestUpdateTopic(topicId, values) {
  return strapi.update("topics", topicId, {
    name: values.name,
  });
}
export function requestDeleteTopic(topicId) {
  return strapi.delete("topics", topicId);
}
