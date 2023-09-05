("use strict");
// @ts-ignore
const stripe = require("stripe")(process.env.STRIPE_KEY);
/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;
module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { courses, userId } = ctx.request.body;
    console.log("$be", courses);
    try {
      const lineItems = await Promise.all(
        courses.map(async (course) => {
          const item = await strapi
            .service("api::course.course")
            .findOne(course.id);
          console.log("item--", item);
          return {
            price_data: {
              currency: "vnd",
              product_data: {
                name: item.title,
              },
              unit_amount: Math.round(
                item.current_price || item.original_price
              ),
            },
            quantity: 1,
          };
        })
      );
      console.log("lineItems", lineItems);
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        mode: "payment",
        line_items: lineItems,
        success_url: `${process.env.CLIENT_URL}?success=true`,
        cancel_url: `${process.env.CLIENT_URL}/cart/checkout`,
        shipping_address_collection: { allowed_countries: ["US"] },
      });
      await strapi.service("api::order.order").create({
        data: {
          courses,
          stripeId: session.id,
          user: {
            connect: [{ id: userId }],
          },
        },
      });
      console.log("session", session);
      const transaction = await stripe.checkout.sessions.retrieve(
        "cs_test_a1a3zLfwvOAbm4i1pEsWyCcWCEdjjeyITknXnF7qKvYJdG0hrK1mP7jyjQ"
      );
      console.log("transaction", transaction);
      return { stripeSession: session };
    } catch (error) {
      ctx.response.status = 500;
      return { error };
    }
  },
}));
