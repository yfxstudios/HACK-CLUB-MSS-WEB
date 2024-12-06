import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { products } from "../../products";

import { DistanceMatrixService, useJsApiLoader } from "@react-google-maps/api";
import { postRequest } from "../../utils/postRequest";

export const Route = createFileRoute("/store/")({
  component: RouteComponent,
});

function RouteComponent() {
  const [showModal, setShowModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const [calculating, setCalculating] = useState(false);

  const [address, setAddress] = useState("");
  const [destination, setDestination] = useState("");

  const [distance, setDistance] = useState(0);
  const [error, setError] = useState("");
  const [cost, setCost] = useState(0);

  const [phone, setPhone] = useState("");

  const { isLoading } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDCb1AoXq9XFI1aBOqDDT-oSWmM7-ySw1w",
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const clickHandler = (id) => {
    setShowModal(!showModal);
    setSelectedProduct(products.find((product) => product.id === id));
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setAddress(
      e.target[3].value +
        " " +
        e.target[4].value +
        " " +
        e.target[5].value +
        " " +
        e.target[6].value
    );
    setCalculating(true);
  };

  const phoneNumberFormatter = (e) => {
    const input = e.target.value;
    const formatted = formatPhoneNumber(input);
    return formatted;
  };

  const formatPhoneNumber = (input) => {
    if (!input) return input;
    const phoneNumber = input.replace(/[^\d]/g, "");
    const phoneNumberLength = phoneNumber.length;
    if (phoneNumberLength < 4) return phoneNumber;
    if (phoneNumberLength < 7) {
      return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3)}`;
    }
    return `(${phoneNumber.slice(0, 3)}) ${phoneNumber.slice(3, 6)}-${phoneNumber.slice(6, 10)}`;
  };

  return (
    <div className="w-screen bg-night py-16 flex justify-center">
      {error != "" && (
        <div className="bg-red-500 fixed text-white p-4 rounded-lg text-center bottom-4 right-4 z-10">
          {error}
        </div>
      )}

      {showModal && (
        <>
          <div
            className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-50 flex justify-center items-center"
            onClick={clickHandler}
          />
          <div className="fixed flex justify-center items-center">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h2 className="text-2xl text-night w-full">
                Book Now -{" "}
                <span className="font-bold">{selectedProduct.name}</span>
              </h2>
              <p className="text-[#999999] mt-4">
                Price varies by distance.{" "}
                {`($${selectedProduct.priceMin} - ${selectedProduct.priceMax})`}
              </p>
              <form
                className="flex flex-col gap-4 mt-4 max-w-[90vw]"
                onSubmit={submitHandler}
              >
                <div className="flex flex-row gap-2 w-full">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="border border-night p-2 rounded-lg w-full"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="border border-night p-2 rounded-lg w-full"
                    required
                  />
                </div>

                <input
                  type="email"
                  placeholder="Email"
                  className="border border-night p-2 rounded-lg"
                  required
                />
                <input
                  type="tel"
                  placeholder="Phone"
                  className="border border-night p-2 rounded-lg"
                  value={phone}
                  onChange={(e) => setPhone(phoneNumberFormatter(e))}
                  required
                />
                <input
                  type="text"
                  placeholder="Address"
                  className="border border-night p-2 rounded-lg"
                  required
                />
                <input
                  type="text"
                  placeholder="City"
                  className="border border-night p-2 rounded-lg"
                  required
                />
                <div className="flex flex-row gap-2 w-full">
                  <input
                    type="text"
                    placeholder="State"
                    className="border border-night p-2 rounded-lg w-full"
                    required
                  />
                  <input
                    type="text"
                    placeholder="Zip"
                    className="border border-night p-2 rounded-lg w-full"
                    required
                  />
                </div>
                <button
                  className="bg-night text-white px-4 py-2 rounded-lg"
                  type="submit"
                >
                  Checkout
                </button>
              </form>
            </div>
          </div>
        </>
      )}

      {calculating && (
        <DistanceMatrixService
          options={{
            destinations: [address],
            origins: ["450 Glass Lane, Modesto CA 95356"],
            travelMode: "DRIVING",
            // Imperial system
            unitSystem: 1,
            durationInTraffic: false,
            avoidHighways: false,
            avoidTolls: true,
          }}
          callback={async (response) => {
            if (response.rows[0].elements[0].status !== "OK") {
              console.error("Error: ", response.rows[0].elements[0].status);
              setCalculating(false);
              return;
            }

            setDestination(response.destinationAddresses[0]);
            // dispatch(
            //   setUser({
            //     ...userStore,
            //     addressLine1: response.destinationAddresses[0],
            //   })
            // );

            // if (response.rows[0].elements[0].distance.value > 96000) {
            //   setDistance("60+ miles");
            //   setCost(0);
            //   setCalculating(false);
            //   setError(
            //     "For sites at a travel distance of 60+ miles, please contact us for a quote."
            //   );
            //   return;
            // } else {
            //   setError("");
            // }

            setDistance(response.rows[0].elements[0].distance.text);
            setCalculating(false);

            const baseCost = products[selectedProduct.id].priceMin;
            const highCost = products[selectedProduct.id].priceMax;
            // baseCost * a = highCost
            const a = highCost / baseCost;

            // depending on distance, calculate cost, keep in price range
            const distance = response.rows[0].elements[0].distance.value / 1000;
            let cost = baseCost + distance * a;
            if (cost > highCost) {
              cost = highCost;
            }
            setCost(Math.ceil(cost / 10) * 10);

            console.log("Distance: ", response.rows[0].elements[0].distance);
            console.log("Duration: ", response.rows[0].elements[0].duration);
            console.log("Cost: ", cost);

            setShowModal(false);

            const api = await postRequest("/api/shop", {
              name: selectedProduct.name,
              price: cost,
              destination: response.destinationAddresses[0],
            });

            window.location.href = api.url;
          }}
        />
      )}

      <div className="max-w-[1400px] px-4">
        <h1 className="text-4xl text-white text-center">Store</h1>
        <p className="text-[#999999] text-center mt-4">
          Price varies by distance.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {products.map((product) => (
            <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col justify-between">
              <div className="flex flex-col items-center">
                <h2 className="text-2xl text-night">{product.name}</h2>
                <p className="text-night mt-4">{product.description}</p>
              </div>
              <div className="flex justify-between items-center mt-4">
                <p className="text-night mt-4">
                  ${product.priceMin}-{product.priceMax}
                </p>
                <button
                  className="bg-night text-white px-4 py-2 rounded-lg flex flex-row items-center gap-3"
                  onClick={() => clickHandler(product.id)}
                >
                  Book Now
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M14 2C14 1.44772 13.5523 1 13 1C12.4477 1 12 1.44772 12 2V8.58579L9.70711 6.29289C9.31658 5.90237 8.68342 5.90237 8.29289 6.29289C7.90237 6.68342 7.90237 7.31658 8.29289 7.70711L12.2929 11.7071C12.6834 12.0976 13.3166 12.0976 13.7071 11.7071L17.7071 7.70711C18.0976 7.31658 18.0976 6.68342 17.7071 6.29289C17.3166 5.90237 16.6834 5.90237 16.2929 6.29289L14 8.58579V2ZM1 3C1 2.44772 1.44772 2 2 2H2.47241C3.82526 2 5.01074 2.90547 5.3667 4.21065L5.78295 5.73688L7.7638 13H18.236L20.2152 5.73709C20.3604 5.20423 20.9101 4.88998 21.4429 5.03518C21.9758 5.18038 22.29 5.73006 22.1448 6.26291L20.1657 13.5258C19.9285 14.3962 19.1381 15 18.236 15H8V16C8 16.5523 8.44772 17 9 17H16.5H18C18.5523 17 19 17.4477 19 18C19 18.212 18.934 18.4086 18.8215 18.5704C18.9366 18.8578 19 19.1715 19 19.5C19 20.8807 17.8807 22 16.5 22C15.1193 22 14 20.8807 14 19.5C14 19.3288 14.0172 19.1616 14.05 19H10.95C10.9828 19.1616 11 19.3288 11 19.5C11 20.8807 9.88071 22 8.5 22C7.11929 22 6 20.8807 6 19.5C6 18.863 6.23824 18.2816 6.63048 17.8402C6.23533 17.3321 6 16.6935 6 16V14.1339L3.85342 6.26312L3.43717 4.73688C3.31852 4.30182 2.92336 4 2.47241 4H2C1.44772 4 1 3.55228 1 3ZM16 19.5C16 19.2239 16.2239 19 16.5 19C16.7761 19 17 19.2239 17 19.5C17 19.7761 16.7761 20 16.5 20C16.2239 20 16 19.7761 16 19.5ZM8 19.5C8 19.2239 8.22386 19 8.5 19C8.77614 19 9 19.2239 9 19.5C9 19.7761 8.77614 20 8.5 20C8.22386 20 8 19.7761 8 19.5Z"
                      fill="currentColor"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}

          <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col justify-between">
            <div className="flex flex-col items-center">
              <h2 className="text-2xl text-night">Consultation</h2>
              <p className="text-night mt-4">
                Service includes: A consultation for other custom work.
              </p>
            </div>
            <div className="flex justify-between items-center mt-4">
              <p className="text-night mt-4">$500+</p>
              <button
                className="bg-night text-white px-4 py-2 rounded-lg flex flex-row items-center gap-3"
                onClick={clickHandler}
              >
                Book Now
                <svg
                  width="20px"
                  height="20px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14 2C14 1.44772 13.5523 1 13 1C12.4477 1 12 1.44772 12 2V8.58579L9.70711 6.29289C9.31658 5.90237 8.68342 5.90237 8.29289 6.29289C7.90237 6.68342 7.90237 7.31658 8.29289 7.70711L12.2929 11.7071C12.6834 12.0976 13.3166 12.0976 13.7071 11.7071L17.7071 7.70711C18.0976 7.31658 18.0976 6.68342 17.7071 6.29289C17.3166 5.90237 16.6834 5.90237 16.2929 6.29289L14 8.58579V2ZM1 3C1 2.44772 1.44772 2 2 2H2.47241C3.82526 2 5.01074 2.90547 5.3667 4.21065L5.78295 5.73688L7.7638 13H18.236L20.2152 5.73709C20.3604 5.20423 20.9101 4.88998 21.4429 5.03518C21.9758 5.18038 22.29 5.73006 22.1448 6.26291L20.1657 13.5258C19.9285 14.3962 19.1381 15 18.236 15H8V16C8 16.5523 8.44772 17 9 17H16.5H18C18.5523 17 19 17.4477 19 18C19 18.212 18.934 18.4086 18.8215 18.5704C18.9366 18.8578 19 19.1715 19 19.5C19 20.8807 17.8807 22 16.5 22C15.1193 22 14 20.8807 14 19.5C14 19.3288 14.0172 19.1616 14.05 19H10.95C10.9828 19.1616 11 19.3288 11 19.5C11 20.8807 9.88071 22 8.5 22C7.11929 22 6 20.8807 6 19.5C6 18.863 6.23824 18.2816 6.63048 17.8402C6.23533 17.3321 6 16.6935 6 16V14.1339L3.85342 6.26312L3.43717 4.73688C3.31852 4.30182 2.92336 4 2.47241 4H2C1.44772 4 1 3.55228 1 3ZM16 19.5C16 19.2239 16.2239 19 16.5 19C16.7761 19 17 19.2239 17 19.5C17 19.7761 16.7761 20 16.5 20C16.2239 20 16 19.7761 16 19.5ZM8 19.5C8 19.2239 8.22386 19 8.5 19C8.77614 19 9 19.2239 9 19.5C9 19.7761 8.77614 20 8.5 20C8.22386 20 8 19.7761 8 19.5Z"
                    fill="currentColor"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
