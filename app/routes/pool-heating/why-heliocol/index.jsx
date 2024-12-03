import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/pool-heating/why-heliocol/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="text-white flex flex-col items-center">
      <div className="w-screen h-[20vh] flex flex-col gap-2 items-center justify-center bg-night">
        <h1 className="text-4xl font-bold text-slate-50">WHY HELIOCOL?</h1>
      </div>
      <div className="w-screen flex justify-center bg-night ">
        <div className="w-screen flex flex-col items-center gap-4 max-w-[800px] xl:max-w-[1200px] text-center py-2">
          <ul className="text-lg px-4 text-left flex flex-col gap-4 list-disc">
            <li>
              Heliocol’s patented Individual Tube Design™, coupling system and
              unique overmolding process provide the ultimate in simplicity,
              durability and effectiveness.
            </li>
            <li>
              All Heliocol collectors and parts are covered 100% for twelve
              years -- the best warranty in the business, afforded by over 30
              years of experience and over 2 million collectors installed.
            </li>
            <li>
              Heliocol is the leader in solar pool heating technology and is the
              only solar pool collector to achieve the prestigious ISO 9001:2000
              certification.
            </li>
            <li>
              Heliocol collectors were chosen to heat the pools at the Summer
              Olympic Games in Atlanta, Athens and Beijing.
            </li>
          </ul>

          <div className="w-full h-[60vh]">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/1DhQPv_37Lc"
              title="Heliocol Solar Pool Heating"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          <p className="text-sm mb-12">
            For more information, visit{" "}
            <Link
              to="https://www.magen-ecoenergy.com/heliocol/"
              target="_blank"
              className="text-jasmine underline"
            >
              Heliocol&apos;s website
            </Link>
          </p>

          <Link to="/free-estimate" className="w-full">
            <button className="w-full bg-black text-jasmine p-4 my-10 text-xl font-semibold rounded-full">
              Schedule Free Estimate
            </button>
          </Link>

          <div className="w-full flex flex-col md:flex-row gap-4">
            <Link to="/pool-heating/how-it-works" className="w-full">
              <button className="w-full bg-jasmine text-black p-4 text-xl font-semibold rounded-full">
                How It Works
              </button>
            </Link>
            <Link to="/pool-heating/photos" className="w-full">
              <button className="w-full bg-jasmine text-black p-4 text-xl font-semibold rounded-full">
                Installation Photos
              </button>
            </Link>
          </div>

          <div className="w-full flex flex-col items-center md:flex-row gap-4 my-8">
            <div
              className="w-full h-[60px]"
              style={{
                backgroundImage: "url('../logos/pentair.png')",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
            <div
              className="w-full h-[40px]"
              style={{
                backgroundImage: "url('../logos/heliocol.png')",
                filter: "brightness(0) invert(1)",
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
