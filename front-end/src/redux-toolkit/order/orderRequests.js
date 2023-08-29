import { strapi } from "../../utils/strapi-config";

export function requestCreateOrder(courses) {
  console.log("courses", courses);
  return strapi.create("order", courses);
}
