import axios from "axios";
import { strapi } from "../../utils/strapi-config";

export function requestLogin({ email, password }) {
  return strapi.login(
    { identifier: email, password: password },
    {
      populate: "*",
      fields: ["avatar"],
    }
  );
}
export function requestLogout() {
  return strapi.logout();
}
export function requestRegister({ fullname, email, password }) {
  return strapi.register({
    username: fullname,
    email: email,
    password: password,
  });
}
export function requestForgotPassword({ email }) {
  console.log("emaill", email);
  return strapi.forgotPassword({ email: email });
  // return axios.post("http://localhost:1337/auth/forgot-password", {
  //   email: email,
  // });
  // return axios
  //   .post("http://localhost:1337/api/auth/forgot-password", {
  //     email: email, // user's email
  //   })
  //   .then((response) => {
  //     console.log("Your user received an email");
  //   })
  //   .catch((error) => {
  //     console.log("An error occurred:", error.response);
  //   });
}
