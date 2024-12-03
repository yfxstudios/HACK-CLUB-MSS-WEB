import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/about/")({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="text-white flex flex-col items-center bg-white">
      <div className="w-screen h-[20vh] flex items-center justify-center bg-night">
        <h1 className="text-4xl font-bold">About</h1>
      </div>

      <div className="flex flex-col items-center justify-center max-w-[1400px] pt-4 px-4 text-black gap-4 text-center">
        <div
          className="h-[128px] sm:h-[256px] w-full mb-8"
          style={{
            backgroundImage: "url('full-logo.png')",
            backgroundSize: "contain",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        />
        <h1 className="text-xl font-bold">HISTORY & MANAGEMENT</h1>
        <p className="text-lg">
          Mid-State Solar was founded in Modesto in 1977 and has served
          California&rsquo;s Central Valley continuously under the same
          ownership since that time. For more than 45 years we&rsquo;ve
          specialized in solar energy systems: photovoltaic electric systems
          (off-grid systems since the mid-1980&rsquo;s, grid-tie systems since
          the mid-1990&rsquo;s), solar water heating systems (since the late
          1970&rsquo;s), and solar pool heating systems (since the late
          1970&rsquo;s).
        </p>
        <p className="text-lg">
          As a family-owned business, Mid-State Solar is committed to excellence
          in both business operation and workmanship. Thousands of satisfied
          customers throughout the northern San Joaquin Valley can attest to our
          honest, friendly approach and our attention to detail on the job. We
          are particularly proud of our impeccable reputation for excellent
          quality and customer satisfaction, as evidenced by over four decades
          of a clean CSLB record with no registered complaints or citations of
          any kind.
        </p>

        {/* 2x2 grid of pictures */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full px-2 md:w-1/2">
          <div
            className="h-[256px] w-full"
            style={{
              backgroundImage: "url('mssweb-12.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            className="h-[256px] w-full"
            style={{
              backgroundImage: "url('mssweb-41.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            className="h-[256px] w-full"
            style={{
              backgroundImage: "url('mssweb-50.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
          <div
            className="h-[256px] w-full"
            style={{
              backgroundImage: "url('mssweb-51.jpg')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </div>

        <div
          className="h-screen w-screen mt-16 relative"
          style={{
            backgroundImage: "url('exterior.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center p-2">
            <div className="max-w-[800px] flex flex-col gap-6">
              <h1 className="text-4xl font-bold text-white">
                Outstanding Service. Exceptional Reputation.
              </h1>
              <p className="text-lg text-white">
                Our mission can be stated quite simply&mdash;
                <span className="font-bold">
                  to provide every client with excellent quality solar thermal
                  and PV systems and service.
                </span>{" "}
                That&rsquo;s been our goal from the beginning, and it remains
                our goal today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
