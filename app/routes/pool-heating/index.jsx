import { createFileRoute, Link } from "@tanstack/react-router";



export const Route = createFileRoute("/pool-heating/")({
  component: RouteComponent,
});


function RouteComponent() {
  return (
    <div className="text-white flex flex-col items-center">
      <div className="w-screen h-[20vh] flex flex-col gap-2 items-center justify-center bg-night">
        <h1 className="text-4xl font-extralight">
          Solar pool heating. Perfected.
        </h1>
      </div>
      <div className="w-screen flex justify-center bg-night">
        <div className="w-screen flex flex-col items-center gap-4 max-w-[800px] xl:max-w-[1200px] text-center py-2">
          <h1 className="text-3xl font-semibold text-cyan-500 mb-8">
            SWIMMING POOL HEATING
          </h1>
          <p className="text-lg px-4">
            Your pool is a place for fun, exercise and relaxation&mdash;when the
            water&rsquo;s warm enough. You can enjoy your pool for months longer
            each year with reliable, efficient heat using the world&rsquo;s most
            abundant fuel source&mdash;the sun&rsquo;s free energy.
          </p>
          <p className="text-lg px-4 ">
            Mid-State Solar chooses only the highest quality solar collectors to
            heat your pool. Heliocol, the world&rsquo;s leading manufacturer of
            solar pool heating collectors, has heated thousands of residential
            and commercial pools around the globe. And our record of excellence
            assures you that each step of your project, from analysis to
            installation, will be skillfully performed as promised.
          </p>

          <div
            className="w-screen h-[70vh] my-8"
            style={{
              backgroundImage: "url('header.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <p className="text-[18px] px-4">
            No cost. No obligation. No pressure. One of our experts will analyze
            your pool setting and design a cost-effective, worry-free solar
            heating system for your swimming pool.
          </p>
          <p className="text-[18px] px-4">
            We’ll give you facts, not hype, to show you how you can extend your
            swimming season up to twice as long each year.
          </p>
          <p className="text-[18px] px-4">
            Solar pool heating provides safe, clean energy without burning
            fossil fuels or polluting the air.
          </p>

          <div className="w-full flex flex-col md:flex-row gap-4 my-8 px-4">
            <Link to="/pool-heating/how-it-works" className="w-full">
              <button className="w-full bg-jasmine text-black p-4 text-xl font-semibold rounded-full">
                How It Works
              </button>
            </Link>
            <Link to="/pool-heating/why-heliocol" className="w-full">
              <button className="w-full bg-jasmine text-black p-4 text-xl font-semibold rounded-full">
                Why Heliocol?
              </button>
            </Link>
            <Link to="/pool-heating/photos" className="w-full">
              <button className="w-full bg-jasmine text-black p-4 text-xl font-semibold rounded-full">
                Installation Photos
              </button>
            </Link>
            <Link to="/free-estimate" className="w-full">
              <button className="w-full bg-jasmine text-black p-4 text-xl font-semibold rounded-full">
                Schedule Free Estimate
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
