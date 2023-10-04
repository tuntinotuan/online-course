import { strapi } from "../../utils/strapi-config";

export function requestCreateNewSection(title) {
  return strapi.create("video-lists", { lesson: title });
}
export function requestSectionUpdateConnect(sectionId, connectId) {
  return strapi.update("video-lists", sectionId, {
    video_courses: connectId?.videoId
      ? {
          connect: [{ id: connectId?.videoId }],
        }
      : {},
  });
}
export function requestUpdateTitleSection(sectionId, title) {
  return strapi.update("video-lists", sectionId, { lesson: title });
}
export function requestDeleteSection(sectionId) {
  return strapi.delete("video-lists", sectionId);
}
