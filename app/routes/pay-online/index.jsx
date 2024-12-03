import { createFileRoute, useRouter } from "@tanstack/react-router";
import { postRequest } from "../../utils/postRequest";
import { useState } from "react";

export const Route = createFileRoute("/pay-online/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [loading, setLoading] = useState(false);
  const checkout = async (e) => {
    setLoading(true);
    e.preventDefault();
    const item = {
      price: document.getElementById("price").value,
      invoiceNumber: document.getElementById("invoiceNumber").value,
    };

    // Create a Checkout Session.onst
    const response = await postRequest("/api/paybill", item);

    if (response.statusCode === 500) {
      console.error(response.message);
      return;
    }

    if (response.statusCode === 400) {
      console.error(response.message);
      return;
    }

    // Redirect to Checkout.

    window.location.href = response.url; // const stripe = await getStripe();/ const { error } = await stripe
    //   .redirectToCheckout({/     // Make the id field from the Checkout Session creation API response
    //     // available to this file, so you can provide it as parameter here/     // instead of the {{CHECKOUT_SESSION_ID}} placeholder.
    //     sessionId: response.id,
    //   })
    //   .catch((err) => {
    //     console.log("ERROR ", err);
    //     setLoading(false);/     alert("An error occurred. Please try again.");
    //   });
    // If `redirectToCheckout` fails due to a browser or network
    // error, display the localized error message to your customer
    // using `error.message`.
    // console.warn(error.message);
  };

  return (
    <div className={{}}>
      <div className="min-h-[70vh] flex flex-col items-center justify-center bg-night text-white">
        <h1 className="text-4xl font-bold">MSS Payment Portal</h1>
        <div className="mt-4 p-4 rounded-lg">
          <h1 className="text-2xl font-bold">Payment Information</h1>
          <form className="mt-4 space-y-4 px-6" onSubmit={checkout}>
            <div>
              <label className="mt-4 font-light mb-2">
                Enter Invoice Number
              </label>
              <label className="input input-bordered flex items-center gap-2">
                <span className="text-white">#</span>
                <input
                  type="text"
                  className="grow text-lg p-2 rounded-lg text-black"
                  placeholder="Invoice Number"
                  id="invoiceNumber"
                  required
                />
              </label>
            </div>

            <div>
              <label className="font-light mb-2">
                Enter Amount you want to pay
              </label>

              <label className="input input-bordered flex items-center gap-2">
                <span className="text-white">$</span>
                <input
                  type="number"
                  className="grow text-lg p-2 rounded-lg text-black"
                  placeholder="000.00"
                  id="price"
                  step=".01"
                  required
                />
              </label>
            </div>

            <p className="text-lg text-gray-300">
              A 3% service fee applies to online payments over $1,500
            </p>

            {!loading ? (
              <button className="w-full text-lg bg-white rounded-xl p-2 text-[black] hover:text-jasmine hover:bg-black transition-colors duration-300">
                Pay Now
              </button>
            ) : (
              <button
                disabled
                className="w-full text-lg bg-gray-100 rounded-xl p-2 text-gray-400"
              >
                Loading...<span className="ml-4 loading"></span>
              </button>
            )}
            <p className="text-lg  text-gray-300 text-center">
              A receipt will be emailed to you
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
