import { strapi } from "../../utils/strapi-config";

export function requestGetSingleLearnOnline(courseId) {
  return strapi.findOne("courses", courseId, {
    populate: {
      overview_image: {
        populate: "*",
      },
      video_intro: {
        populate: "*",
      },
      video_lists: {
        populate: ["video_courses.video", "video_courses.preview_image"],
      },
      user: {
        populate: "*",
      },
      reviews: {
        populate: ["user.avatar"],
      },
    },
    // populate: ["overview_image", "user.courses"],
  });
}
