import { strapi } from "../../utils/strapi-config";

export function requestGetCourseData() {
  return strapi.find("courses", {
    populate: "*",
    // pagination: {
    //   page: 1,
    //   pageSize: 5,
    // },
  });
}
export function requestGetSingleCourse(courseId) {
  return strapi.findOne("courses", courseId, {
    populate: ["overview_image", "user.courses"],
  });
}
