import { createFileRoute, Link } from "@tanstack/react-router";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

export const Route = createFileRoute("/pool-heating/photos/")({
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
          INSTALLATION PHOTOS
        </h1>
      </div>
      <div className="w-screen flex justify-center bg-night">
        <div className="w-screen flex flex-col items-center gap-4 max-w-[800px] xl:max-w-[1200px] text-center py-8">
          <p className="text-lg px-4">
            Here is a small selection of work we&apos;ve done over the years
          </p>

          {/* Carousel */}
          <Carousel
            showArrows={true}
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            infiniteLoop={true}
            autoPlay={true}
            interval={2000}
            transitionTime={500}
            swipeable={true}
            emulateTouch={true}
            stopOnHover={true}
            centerMode={true}
            centerSlidePercentage={100 / 3}
            className="w-full"
          >
            <div>
              <img
                src="../carousel/1.jpg"
                alt="Solar Panel Installation"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src="../carousel/2.jpg"
                alt="Solar Panel Installation"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src="../carousel/3.jpg"
                alt="Solar Panel Installation"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src="../carousel/4.jpg"
                alt="Solar Panel Installation"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src="../carousel/5.jpg"
                alt="Solar Panel Installation"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src="../carousel/6.jpg"
                alt="Solar Panel Installation"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src="../carousel/7.jpg"
                alt="Solar Panel Installation"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src="../carousel/8.jpg"
                alt="Solar Panel Installation"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src="../carousel/9.jpg"
                alt="Solar Panel Installation"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src="../carousel/10.jpg"
                alt="Solar Panel Installation"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src="../carousel/11.jpg"
                alt="Solar Panel Installation"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src="../carousel/12.jpg"
                alt="Solar Panel Installation"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src="../carousel/13.jpg"
                alt="Solar Panel Installation"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src="../carousel/14.jpg"
                alt="Solar Panel Installation"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src="../carousel/15.jpg"
                alt="Solar Panel Installation"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src="../carousel/16.jpg"
                alt="Solar Panel Installation"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src="../carousel/17.jpg"
                alt="Solar Panel Installation"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src="../carousel/18.jpg"
                alt="Solar Panel Installation"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src="../carousel/19.jpg"
                alt="Solar Panel Installation"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <img
                src="../carousel/20.jpg"
                alt="Solar Panel Installation"
                className="w-full h-full object-cover"
              />
            </div>
          </Carousel>

          <div className="w-full flex flex-col md:flex-row gap-4">
            <Link to="/pool-heating/how-it-works" className="w-full">
              <button className="w-full bg-jasmine text-black p-4 text-xl font-semibold rounded-full">
                How It Works
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

export default RouteComponent;
