import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/electricity/how-it-works/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="text-white flex flex-col items-center">
      <div className="w-screen h-[20vh] flex flex-col gap-2 items-center justify-center bg-night">
        <h1 className="text-4xl font-bold text-slate-50">
          HOW YOUR SOLAR WORKS
        </h1>
      </div>
      <div className="w-screen flex justify-center bg-night ">
        <div className="w-screen flex flex-col items-center gap-4 max-w-[800px] xl:max-w-[1200px] text-center py-2">
          <p className="text-lg px-4">
            Solar modules convert sunlight into moving electrons of direct
            current electricity (&quot;DC&quot; power) which then flow from the
            module to an inverter. The inverter converts the &quot;DC&quot;
            power to alternating current (&quot;AC&quot; power), so that it can
            be used to power your entire home&apos;s electrical systems,
            including lights, cooling systems, and appliances. Optional battery
            back-up allows you to store the solar electricity for later use. A
            net-energy meter keeps track of the all the power your solar system
            produces.
          </p>

          <div
            className="w-full h-[60vh]"
            style={{
              backgroundImage: "url('../solar-diagram.webp')",
              backgroundSize: "contain",
              filter: "invert(1)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
          <p className="text-sm mb-12">Courtesy LG Solar</p>


          <p className="text-[18px] px-4">
            If the PV system produces more electricity than the home or business
            owner needs, the extra kilowatts are fed into the utility grid. When
            your system is not producing more than your building needs, you will
            consume electricity from the grid as normal.
          </p>
          <p className="text-[18px] px-4">
            Your utility will bill you for the &quot;net&quot; consumption, or
            the difference between the electricity you have used from the
            utility and the solar electricity you have produced.
          </p>
          <p className="text-[18px] px-4">
            With solar PV, one size does not fit all - we&apos;ve thrown out the
            cookie cutters. Contact us today for your free energy analysis, and
            let us design a solar electric system uniquely suited to your needs
            and goals.
          </p>

          <Link to="/free-estimate" className="w-full">
            <button className="w-full bg-black text-jasmine p-4 my-10 text-xl font-semibold rounded-full">
              Schedule Free Estimate
            </button>
          </Link>

          <div className="w-full flex flex-col md:flex-row gap-4">
            <Link to="/electricity/" className="w-full">
              <button className="w-full bg-jasmine text-black p-4 text-xl font-semibold rounded-full">
                Overview
              </button>
            </Link>
            <Link to="/electricity/incentives" className="w-full">
              <button className="w-full bg-jasmine text-black p-4 text-xl font-semibold rounded-full">
                Incentives
              </button>
            </Link>
            <Link to="/electricity/photos" className="w-full">
              <button className="w-full bg-jasmine text-black p-4 text-xl font-semibold rounded-full">
                Installation Photos
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
