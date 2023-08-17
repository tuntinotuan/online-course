import { strapi } from "../../utils/strapi-config";

export function requestGetUserData(userId) {
  return strapi.findOne("users", userId, {
    populate: "*",
  });
}
export function requestUpdateUserProfile(userId, data) {
  const { fullname, address, phone, birthday } = data;
  console.log("data", data);
  return strapi.update("users", userId, {
    data: {
      username: fullname,
      address: address,
      phonenumber: phone,
      birthday: birthday,
    },
  });
}
