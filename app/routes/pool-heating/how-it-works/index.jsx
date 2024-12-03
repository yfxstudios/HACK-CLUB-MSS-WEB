import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/pool-heating/how-it-works/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="text-white flex flex-col items-center">
      <div className="w-screen h-[20vh] flex flex-col gap-2 items-center justify-center bg-night">
        <h1 className="text-4xl font-bold text-slate-50">
          HOW SOLAR POOL HEATING WORKS
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
              backgroundImage: "url('../howitworks.png')",
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />
          <p className="text-sm mb-12">Courtesy Heliocol</p>

          <Link to="/free-estimate" className="w-full">
            <button className="w-full bg-black text-jasmine p-4 my-10 text-xl font-semibold rounded-full">
              Schedule Free Estimate
            </button>
          </Link>

          <div className="w-full flex flex-col md:flex-row gap-4">
            <Link to="/pool-heating/" className="w-full">
              <button className="w-full bg-jasmine text-black p-4 text-xl font-semibold rounded-full">
                Overview
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
