import axios from "axios";
import { strapi } from "../../utils/strapi-config";
import { strapiPathBE } from "../../utils/constants";

const requestCommon = [
  { deleted: { $eq: false } },
  { status: { $eq: "public" } },
];

export function requestGetMyCourses(userId, page, search) {
  return strapi.find("courses", {
    filters: {
      $and: [
        {
          user: {
            id: {
              $eq: userId,
            },
          },
        },
        {
          deleted: {
            $eq: false,
          },
        },
      ],
      title: {
        $contains: search,
      },
    },
    populate: "*",
    pagination: page && {
      page: page || 1,
      pageSize: 5,
    },
  });
}
export function requestGetTopicOfCourse(topic, filter, page) {
  return strapi.find("courses", {
    filters: {
      $or: [
        {
          topic: {
            name: {
              $contains: topic || "Unity",
            },
          },
        },
        {
          topic: {
            industry: {
              name: {
                $contains: topic,
              },
            },
          },
        },
        {
          topic: {
            industry: {
              category: {
                name: {
                  $contains: topic,
                },
              },
            },
          },
        },
      ],
    },
    sort: [filter],
    populate: {
      overview_image: {
        populate: "*",
      },
      user: {
        populate: "*",
      },
      reviews: {
        populate: "*",
      },
      topic: {
        populate: "*",
      },
    },
    pagination: {
      page: page || 1,
      pageSize: 5,
    },
  });
}
export function requestGetAllCourses(page, deleted = false) {
  return strapi.find("courses", {
    filters: {
      $and: !deleted ? requestCommon : [],
      deleted: deleted
        ? {
            $eq: deleted,
          }
        : {},
    },
    populate: "*",
    pagination: {
      page: page || 1,
      pageSize: 5,
    },
  });
}
export function requestGetSingleCourse(courseId) {
  return strapi.findOne("courses", courseId, {
    populate: {
      overview_image: {
        populate: "*",
      },
      video_lists: {
        populate: ["video_courses.video", "video_courses.preview_image"],
      },
      user: {
        populate: "*",
      },
      video_intro: {
        populate: "*",
      },
      reviews: {
        populate: ["user.avatar"],
      },
      topic: {
        populate: ["industry.category"],
      },
    },
    // populate: ["overview_image", "user.courses"],
  });
}
export function requestSearchCourse(filter) {
  const { keyword, sortBy, rating, searchPage } = filter;
  return strapi.find("courses", {
    filters: {
      $or: [
        {
          title: {
            $contains: keyword,
          },
        },
        {
          user: {
            username: { $contains: keyword },
          },
        },
      ],
      $and: rating
        ? [
            {
              star: {
                $gte: rating,
              },
            },
            {
              star: {
                $lte: 5,
              },
            },
          ]
        : [{}],
    },
    sort: [sortBy],
    populate: "*",
    pagination: {
      page: searchPage || 1,
      pageSize: 5,
    },
  });
}
export function requestUpdateTotalReviewsCourse(
  currentCourseId,
  newStar,
  amountReview
) {
  return strapi.update("courses", currentCourseId, {
    star: newStar,
    total_reviews: amountReview,
  });
}
export function requestDeleteAndRestoreCourse(courseId, deleted = true) {
  return strapi.update("courses", courseId, {
    deleted,
  });
}
export function requestUpdateCourse(
  courseId,
  values,
  dataOverviewImage,
  dataUploadVideo
) {
  console.log(`id = ${courseId}, values =`, values);
  const { newVideoIntroId, urlChosenVideo } = dataUploadVideo;
  if (dataOverviewImage) {
    console.log("this update image");
    const formData = new FormData();
    formData.append("files", dataOverviewImage, dataOverviewImage?.name);
    formData.append("ref", "api::course.course");
    formData.append("refId", courseId);
    formData.append("field", "overview_image");
    axios.post(`${strapiPathBE}/api/upload`, formData);
  }
  if (values?.topicId) {
    console.log("this update topic");
    strapi.update("courses", courseId, {
      topic: {
        connect: [{ id: values?.topicId }],
      },
    });
  }
  if (urlChosenVideo) {
    strapi.update("courses", courseId, {
      video_intro: {
        connect: [{ id: newVideoIntroId }],
      },
    });
  }
  const newValues = {
    title: values.title,
    subtitle: values.subTitle,
    description: values.description,
    current_price: values.currentPrice,
    original_price: values.originalPrice,
    status: values.status,
  };
  return strapi.update("courses", courseId, newValues);
}
export function requestCreateCourse(values) {
  const { title } = values;
  return strapi.create("courses", {
    title,
  });
}
export function requestCourseUpdateConnect(courseId, connectId) {
  return strapi.update("courses", courseId, {
    user: connectId?.userId
      ? {
          connect: [{ id: connectId?.userId }],
        }
      : {},
    video_lists: connectId?.sectionId
      ? {
          connect: [{ id: connectId?.sectionId }],
        }
      : {},
  });
}
export function requestCreateVideoIntro() {
  return strapi.create("video-intros", {});
}
export function requestUpdatePricingCourse(courseId, values) {
  console.log("values", values);
  const newValues = {
    current_price: values.currentPrice || null,
    original_price: values.originalPrice,
  };
  return strapi.update("courses", courseId, newValues);
}
export function requestUpdateVideoIntro(videoIntroId, dataOverviewImage) {
  const formData = new FormData();
  formData.append("files", dataOverviewImage, dataOverviewImage?.name);
  formData.append("ref", "api::video-intro.video-intro");
  formData.append("refId", videoIntroId);
  formData.append("field", "video");
  return axios.post(`${strapiPathBE}/api/upload`, formData);
}
