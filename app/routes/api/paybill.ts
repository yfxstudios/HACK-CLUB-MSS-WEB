import { redirect } from "@tanstack/react-router";
import { json } from "@tanstack/start";
import { createAPIFileRoute } from "@tanstack/start/api";

import Stripe from "stripe";

interface PayBillRequest {
  price: number;
  invoiceNumber: string;
}

export const APIRoute = createAPIFileRoute("/api/paybill")({
  POST: async ({ request }) => {
    try {
      const stripe = new Stripe(process.env.STRIPE_SECRET_KEY, {
        apiVersion: "2023-10-16",
      });

      const item = (await request.json()) as PayBillRequest;

      let orderAmount = item.price;

      if (item.price > 1500) {
        orderAmount = Math.round(item.price * 103) / 100;
      }

      const params = {
        mode: "payment",
        payment_method_types: ["card"],
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: "MSS Payment - Invoice #" + item.invoiceNumber,
              },
              unit_amount: Math.trunc(orderAmount * 100),
            },
            quantity: 1,
          },
        ],
        custom_fields: [
          {
            key: "memo",
            label: {
              type: "custom",
              custom: "Memo",
            },
            optional: true,
            type: "text",
          },
        ],
        phone_number_collection: {
          enabled: false,
        },
        success_url: `${request.headers.get("origin")}/pay-online/success?session_id={CHECKOUT_SESSION_ID}&price=${item.price}&invoiceNumber=${item.invoiceNumber}&total=${item.price}`,
        cancel_url: `${request.headers.get("origin")}/pay-online`,
        metadata: {
          invoiceNumber: item.invoiceNumber,
        },
      };

      const checkoutSession = await stripe.checkout.sessions.create(params);

      return json({ url: checkoutSession.url });
    } catch (error) {
      console.error(error);
      return new Response("An error occurred", { status: 500 });
    }
  },
});
