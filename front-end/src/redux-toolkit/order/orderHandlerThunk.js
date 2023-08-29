import { createAsyncThunk } from "@reduxjs/toolkit";
import { loadStripe } from "@stripe/stripe-js";
import { requestCreateOrder } from "./orderRequests";
import axios from "axios";
import { strapiPathBE } from "../../utils/constants";

const stripePromise = loadStripe(
  "pk_test_51MwSqkEqTHVX4ukZmvtphvtHggeYSSNWklI1cgHc010ZyWPC6Esr5fFt8DNMHHxJ4kLh9tGfH6oz8mDFsO6GwACJ00AMfFHWuv"
);

export const handlePayment = createAsyncThunk(
  "order/hanlePayment",
  async (data, ThunkAPI) => {
    try {
      const stripe = await stripePromise;
      // const response = await requestCreateOrder(data);
      const response = await axios.create(`${strapiPathBE}/order`, { data });
      console.log("response payment", response);
      await stripe.redirectToCheckout({
        sessionId: response.data.stripeSession.id,
      });
    } catch (error) {
      console.log("error", error);
    }
  }
);
