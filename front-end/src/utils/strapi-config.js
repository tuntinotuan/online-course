import Strapi from "strapi-sdk-js";
import { strapiPathBE } from "./constants";
// Strapi Setup
export const strapi = new Strapi({
  url: strapiPathBE,
  prefix: "/api",
  store: {
    key: "strapi_jwt",
    useLocalStorage: true,
    cookieOptions: { path: "/" },
  },
  axiosOptions: {},
});
