import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/electricity/")({
  component: RouteComponent,
});

// Lowering your monthly utility bill – reducing your footprint. With solar electricity you can achieve both. Solar electricity (PV) provides clean, efficient, renewable energy independence while protecting you from rising electricity costs. And a 30% federal tax credit makes it more affordable than ever to start generating your own electricity using the sun’s free energy.

// Mid-State Solar offers both grid-tie and stand-alone PV systems for residential, commercial and agricultural use. With solar PV, one size does not fit all - we’ve thrown out the cookie cutters.

// Contact us today for your free energy analysis, and let us design a solar electric system uniquely suited to your needs and goals.

function RouteComponent() {
  return (
    <div className="text-white flex flex-col items-center">
      <div className="w-screen h-[20vh] flex flex-col gap-2 items-center justify-center bg-night">
        <h1 className="text-4xl font-extralight">
          Energy Independence. Naturally.
        </h1>
      </div>
      <div className="w-screen flex justify-center bg-night">
        <div className="w-screen flex flex-col items-center gap-4 max-w-[800px] xl:max-w-[1200px] text-center py-2">
          <h1 className="text-3xl font-semibold text-lime-500">ELECTRICITY</h1>
          <p className="text-lg px-4">
            No cost. No obligation. One of our experts will analyze your
            property, budget and energy needs, and develop a precise analysis of
            how best to design your solar system. You&rsquo;ll get a quote,
            incentive information, and discover how soon your system will pay
            for itself. Tax incentives are available for solar electricity and
            can reduce your system costs significantly.
          </p>

          <h1 className="text-3xl font-light mt-12">
            Solar is easy with Mid-State Solar.
          </h1>

          <div
            className="w-screen h-[70vh]"
            style={{
              backgroundImage: "url('home.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />

          <p className="text-[18px] px-4">
            Lowering your monthly utility bill&mdash;reducing your footprint.
            With solar electricity you can achieve both. Solar electricity (PV)
            provides clean, efficient, renewable energy independence while
            protecting you from rising electricity costs. And a 30% federal tax
            credit makes it more affordable than ever to start generating your
            own electricity using the sun&rsquo;s free energy.
          </p>
          <p className="text-[18px] px-4">
            Mid-State Solar offers both grid-tie and stand-alone PV systems for
            residential, commercial and agricultural use. With solar PV, one
            size does not fit all - we&rsquo;ve thrown out the cookie cutters.
          </p>
          <p className="text-[18px] px-4">
            <Link to="/contact-us" className="underline">
              Contact us
            </Link>{" "}
            today for your free energy analysis, and let us design a solar
            electric system uniquely suited to your needs and goals.
          </p>

          <div
            className="h-[200px] w-full my-8"
            style={{
              backgroundImage: "url('Assets_Platinum.webp')",
              backgroundSize: "contain",
              filter: "invert(1)",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
          />

          <div className="w-full flex flex-col md:flex-row gap-4">
            <Link to="/electricity/how-it-works" className="w-full">
              <button className="w-full bg-jasmine text-black p-4 text-xl font-semibold rounded-full">
                How It Works
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
            <Link to="/free-estimate" className="w-full">
              <button className="w-full bg-jasmine text-black p-4 text-xl font-semibold rounded-full">
                Schedule Free Estimate
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
