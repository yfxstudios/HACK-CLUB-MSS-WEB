// app/routes/__root.tsx
import {
  Link,
  Outlet,
  ScrollRestoration,
  createRootRoute,
} from "@tanstack/react-router";
import { Meta, Scripts } from "@tanstack/start";
import { useState, type ReactNode } from "react";

import globalStyle from "../styles.css?url";

import fontsourceInter200 from "@fontsource/inter/200.css?url";
import fontsourceInter300 from "@fontsource/inter/300.css?url";
import fontsourceInter400 from "@fontsource/inter/400.css?url";
import fontsourceInter500 from "@fontsource/inter/500.css?url";
import fontsourceInter600 from "@fontsource/inter/600.css?url";
import fontsourceInter700 from "@fontsource/inter/700.css?url";
import fontsourceInter800 from "@fontsource/inter/800.css?url";

import ReactLenis from "lenis/react";

// import "dotenv/config";

let css = ``;

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: "utf-8",
      },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1, minimum-scale=1",
      },
      {
        title: "Mid-State Solar | HC",
      },
    ],
    links: [
      {
        rel: "icon",
        href: "/favicon.ico",
      },
      {
        rel: "stylesheet",
        href: fontsourceInter200,
      },
      {
        rel: "stylesheet",
        href: fontsourceInter300,
      },
      {
        rel: "stylesheet",
        href: fontsourceInter400,
      },
      {
        rel: "stylesheet",
        href: fontsourceInter500,
      },
      {
        rel: "stylesheet",
        href: fontsourceInter600,
      },
      {
        rel: "stylesheet",
        href: fontsourceInter700,
      },
      {
        rel: "stylesheet",
        href: fontsourceInter800,
      },
      {
        rel: "stylesheet",
        href: globalStyle,
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: () => {
    return (
      <div className="flex flex-col justify-center items-center min-h-screen bg-[#ffefc4] text-[#333]relative z-10 p-2">
        <div className="flex justify-center mb-8">
          <div className="w-32 h-32 bg-[#ffc107] rounded-full">
            <div
              className="w-32 h-32 bg-[#ffc107] rounded-full animate-pulse"
              style={{ boxShadow: "0 0 100px rgba(255, 193, 7, 1)" }}
            ></div>
          </div>
        </div>
        <div className="text-center z-1">
          <h1 className="text-8xl mb-4">404</h1>
          <p className="text-2xl mb-6">Oops! This page is off the grid.</p>
          <Link
            to="/"
            className="p-2 bg-[#ffc107] text-[#333] rounded-md transition-all duration-300 hover:bg-[#ffb300]"
          >
            Return to Home
          </Link>
        </div>
      </div>
    );
  },
});

function RootComponent() {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  return (
    <RootDocument>
      <ReactLenis root>
        <div className="min-h-screen bg-[#202021] w-screen overflow-x-hidden">
          <div className="flex justify-center items-center w-screen bg-[#202021]">
            <div className="flex justify-center lg:justify-between items-center p-8 gap-16 relative w-full">
              <Link to="/">
                <img
                  src="assets/logo.png"
                  alt="Mid-State Solar"
                  className="w-[32px]
                      hover:brightness-75 transition-all duration-200
                    "
                />
              </Link>
              <div className="hidden gap-8 items-center lg:flex">
                <Link
                  to="/"
                  className="text-[white] hover:text-gray-400 rounded-md transition-all duration-200 [&.active]:text-jasmine"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-[white] hover:text-gray-400 rounded-md transition-all duration-200 [&.active]:text-jasmine"
                >
                  About Us
                </Link>
                <Link
                  to="/electricity"
                  className="text-[white] hover:text-gray-400 rounded-md transition-all duration-200 [&.active]:text-jasmine"
                >
                  Electricity
                </Link>
                <Link
                  to="/pool-heating"
                  className="text-[white] hover:text-gray-400 rounded-md transition-all duration-200 [&.active]:text-jasmine"
                >
                  Pool Heating
                </Link>
                <Link
                  to="/contact-us"
                  className="text-[white] hover:text-gray-400 rounded-md transition-all duration-200 [&.active]:text-jasmine"
                >
                  Contact Us
                </Link>

                <Link
                  to="/free-estimate"
                  className="text-[white] hover:text-gray-400 rounded-md transition-all duration-200 [&.active]:text-jasmine"
                >
                  Free Estimate
                </Link>
                <Link
                  to="/pay-online"
                  className="text-[white] hover:text-gray-400 rounded-md transition-all duration-200 [&.active]:text-jasmine"
                >
                  Pay a Bill
                </Link>
              </div>
              <div className="absolute right-8 top-[50%] -translate-y-1/2 lg:hidden">
                <button
                  className="text-white"
                  onClick={() => setMenuOpen(!menuOpen)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16m-7 6h7"
                    />
                  </svg>
                </button>
              </div>

              <div
                className={`${
                  menuOpen ? "block" : "hidden"
                } absolute flex flex-col gap-8 top-16 right-8 bg-[#202021] p-4 rounded-md shadow-lg z-50`}
              >
                <Link
                  to="/"
                  className="text-[white] hover:text-gray-400 rounded-md transition-all duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="text-[white] hover:text-gray-400 rounded-md transition-all duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  About Us
                </Link>
                <Link
                  to="/electricity"
                  className="text-[white] hover:text-gray-400 rounded-md transition-all duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  Electricity
                </Link>
                <Link
                  to="/pool-heating"
                  className="text-[white] hover:text-gray-400 rounded-md transition-all duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  Pool Heating
                </Link>
                <Link
                  to="/contact-us"
                  className="text-[white] hover:text-gray-400 rounded-md transition-all duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact Us
                </Link>
                <Link
                  to="/free-estimate"
                  className="text-[white] hover:text-gray-400 rounded-md transition-all duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  Free Estimate
                </Link>
                <Link
                  to="/pay-online"
                  className="text-[white] hover:text-gray-400 rounded-md transition-all duration-200"
                  onClick={() => setMenuOpen(false)}
                >
                  Pay a Bill
                </Link>
              </div>
            </div>
          </div>

          <Outlet />
          <div className="flex flex-col justify-center items-center w-screen text-white py-32 bg-[#202021]">
            <div className="max-w-[1400px] px-16">
              <div className="flex flex-col xl:flex-row gap-16 text-xl md:text-2xl text-center mt-8 text-[#f2f2f2]">
                <Link
                  to="/"
                  className="hover:text-jasmine transition-all duration-300"
                >
                  Home
                </Link>
                <Link
                  to="/about"
                  className="hover:text-jasmine transition-all duration-300"
                >
                  About Us
                </Link>
                <Link
                  to="/electricity"
                  className="hover:text-jasmine transition-all duration-300"
                >
                  {" "}
                  Electricity
                </Link>
                <Link
                  to="/pool-heating"
                  className="hover:text-jasmine transition-all duration-300"
                >
                  Pool Heating
                </Link>{" "}
                <Link
                  to="/contact-us"
                  className="hover:text-jasmine transition-all duration-300"
                >
                  Contact Us
                </Link>{" "}
                <Link
                  to="/free-estimate"
                  className="hover:text-jasmine transition-all duration-300"
                >
                  Free Estimate
                </Link>
                <Link
                  to="/pay-online"
                  className="hover:text-jasmine transition-all duration-300"
                >
                  Pay a Bill
                </Link>
              </div>
            </div>
            <p className="text-[12px] mt-8">
              © 2024 Mid-State Solar. All Rights Reserved.
            </p>
          </div>
        </div>
      </ReactLenis>
    </RootDocument>
  );
}

function RootDocument({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html>
      <head>
        <Meta />
      </head>
      <body
        style={{
          width: "100vw",
          overflowX: "hidden",
        }}
      >
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
