import Strapi from "strapi-sdk-js";
// Strapi Setup
const strapi = new Strapi({
  url: "http://localhost:1337",
  prefix: "/api",
  store: {
    key: "strapi_jwt",
    useLocalStorage: false,
    cookieOptions: { path: "/" },
  },
  axiosOptions: {},
});

export function requestTest() {
  return strapi.find("courses", {
    sort: "name:asc",
    populate: "*",
  });
}

export function requestLogin({ email, password }) {
  return strapi.login({ identifier: email, password: password });
}
