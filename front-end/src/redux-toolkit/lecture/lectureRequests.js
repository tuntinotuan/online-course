import axios from "axios";
import { strapiPathBE } from "../../utils/constants";
import { strapi } from "../../utils/strapi-config";

export function requestCreateNewLecture(title) {
  return strapi.create("video-courses", { title });
}

export function requestUpdateTitleLecture(lectureId, title) {
  return strapi.update("video-courses", lectureId, { title });
}
export function requestUpdateVideoLecture(lectureId, dataVideo, isPreview) {
  if (dataVideo) {
    const formData = new FormData();
    formData.append("files", dataVideo, dataVideo?.name);
    formData.append("ref", "api::video-course.video-course");
    formData.append("refId", lectureId);
    formData.append("field", "video");
    axios.post(`${strapiPathBE}/api/upload`, formData);
  }
  return strapi.update("video-courses", lectureId, { preview: isPreview });
}

export function requestDeleteLecture(lectureId) {
  return strapi.delete("video-courses", lectureId);
}
