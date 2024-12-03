import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/electricity/incentives/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="text-white flex flex-col items-center">
      <div
        className="w-screen h-[40vh] flex flex-col gap-2 items-center justify-center"
        style={{
          backgroundImage: "url('../assets/header.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <h1 className="text-4xl font-bold text-black bg-white bg-opacity-80 p-8">
          CURRENT INCENTIVES FOR SOLAR
        </h1>
      </div>
      <div className="w-screen flex justify-center bg-night">
        <div className="w-screen flex flex-col items-center gap-4 max-w-[800px] xl:max-w-[1200px] text-center py-8">
          <p className="text-lg px-4">
            The federal solar tax credit, also known as the investment tax
            credit (ITC), allows you to deduct 30 percent of the cost of
            installing a solar energy system from your federal taxes. The ITC
            applies to both residential and commercial systems, and there is no
            cap on its value. Thanks to the ITC, the average solar shopper saves
            thousands of dollars on the cost of going solar.
          </p>

          <Link
            to="https://www.energy.gov/eere/solar/homeowners-guide-federal-tax-credit-solar-photovoltaics"
            target="_blank"
            className="w-full"
          >
            <button className="w-full bg-black text-jasmine p-4 mt-10 text-xl font-semibold rounded-full">
              30% Federal Tax Credit (IRS)
            </button>
          </Link>

          <Link
            to="https://www.irs.gov/pub/irs-pdf/f5695.pdf"
            target="_blank"
            className="w-full"
          >
            <button className="w-full bg-black text-jasmine p-4 mb-10 text-xl font-semibold rounded-full">
              IRS Form 5695
            </button>
          </Link>

          <div className="w-full flex flex-col md:flex-row gap-4">
            <Link to="/electricity/how-it-works" className="w-full">
              <button className="w-full bg-jasmine text-black p-4 text-xl font-semibold rounded-full">
                How It Works
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
