import axios from "axios";
import { strapi } from "../../utils/strapi-config";
import { strapiPathBE } from "../../utils/constants";

export function requestGetUserData(userId) {
  return strapi.findOne("users", userId, {
    populate: "*",
  });
}
export function requestFindEmail(email) {
  return strapi.find("users", {
    filters: {
      email: {
        $eq: email,
      },
    },
  });
}
export function requestUpdateUserProfile(userId, jwt, data) {
  const { fullname, address, phone, birthDay } = data;
  // return strapi.update("users", userId, {
  //   // data: {
  //   username: fullname,
  //   address: address,
  //   phonenumber: phone,
  //   birthday: birthDay,
  //   // },
  // });
  return axios.put(
    `${strapiPathBE}/api/users/${userId}`,
    {
      username: fullname,
      address: address,
      phonenumber: phone,
      birthday: birthDay,
    },
    {
      headers: {
        authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    }
  );
}
export function requestUpdateUrlGoogleAvatar({ jwt, userId, url }) {
  return axios.put(
    `${strapiPathBE}/api/users/${userId}`,
    {
      url_google_avatar: url,
    },
    {
      headers: {
        authorization: `Bearer ${jwt}`,
        "Content-Type": "application/json",
      },
    }
  );
}
export function requestUpdateUserAvatar(userId, jwt, data) {
  // console.log("input", userId, jwt, data);
  const formData = new FormData();
  formData.append("files", data, data?.name);
  formData.append("ref", "plugin::users-permissions.user");
  formData.append("refId", userId);
  formData.append("field", "avatar");
  // formData.forEach((value, key) => {
  //   console.log("key %s: value %s", key, value);
  // });
  return axios.post(`${strapiPathBE}/api/upload`, formData, {
    headers: {
      authorization: `Bearer ${jwt}`,
    },
  });
}
