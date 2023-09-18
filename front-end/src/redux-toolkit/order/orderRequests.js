import axios from "axios";
import { strapi } from "../../utils/strapi-config";
import { strapiPathBE } from "../../utils/constants";

export const makePaymentRequest = axios.create({
  baseURL: `${strapiPathBE}/api`,
  mode: "no-cors",
  headers: {
    Authorization:
      "bearer 894d73e6222de045f80c0607d16b78140bce069b165cd9870ee82eaabd55fa8971c7cd8060b8b5f483154b4533a260b4163eadc618c122d4ba510ec73f7fb7dfe4752fd08288a847530180aa43bc77788e37a062a695608a3f95fe5b9a80e41cc974183d24cf595b6b3aadd119750f9f5d2d04431681131080a09cf3cce9c67d",
  },
});

export function requestCreateOrder(courses, stripeId, userId) {
  return strapi.create("orders", {
    courses,
    stripeId,
    user: {
      connect: [{ id: userId }],
    },
  });
}
