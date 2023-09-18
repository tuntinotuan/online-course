import axios from "axios";
import { strapi } from "../../utils/strapi-config";
import { strapiPathBE } from "../../utils/constants";

export function requestLogin({ email, password }) {
  console.log("email, password", email, password);
  return strapi.login(
    { identifier: email, password: password },
    {
      populate: "*",
      fields: ["avatar"],
    }
  );
}
export function requestLoginWithGoogleAccount(tokens) {
  return axios.get(`${strapiPathBE}/api/auth/google/callback${tokens}`);
}
export function requestLoginWithGithubAccount(tokens) {
  return axios.get(`${strapiPathBE}/api/auth/github/callback${tokens}`);
}
export function requestGetProfileOfGoogle(idToken) {
  return axios.get(
    `https://www.googleapis.com/oauth2/v1/userinfo?id_token=${idToken}`
  );
}
export function requestGetProfileOfGithub(accessToken) {
  return axios.get(`https://api.github.com/user`, {
    headers: {
      authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
  });
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
  return strapi.forgotPassword({ email: email });
}
export function requestResetPassword(code, password, passwordConfirmation) {
  return strapi.resetPassword({
    code: code,
    password: password,
    passwordConfirmation: passwordConfirmation,
  });
}

export function requestChangePassword({
  currentPassword,
  newPassword,
  reTypePassword,
}) {
  return strapi.changePassword({
    currentPassword: currentPassword,
    password: newPassword,
    passwordConfirmation: reTypePassword,
  });
}
