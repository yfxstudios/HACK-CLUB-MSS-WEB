// app/routes/index.tsx
import * as fs from "node:fs";
import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { createServerFn } from "@tanstack/start";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";

import "../styles.css";

export const Route = createFileRoute("/")({
  component: Home,
});

function Home() {
  const main = useRef(null);
  const sun = useRef(null);

  const logo = useRef(null);
  const hero = useRef(null);
  const heroImg = useRef(null);
  const heroText = useRef(null);
  const contentText = useRef(null);

  const logos = useRef(null);

  const testimony = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: hero.current,
        start: "-1 top",
        end: "bottom top",
        scrub: 1,
        pin: true,
      },
    });

    const heroTl = gsap.timeline({
      scrollTrigger: {
        trigger: hero.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
      },
    });

    const sunTl = gsap.timeline({
      scrollTrigger: {
        trigger: main.current,
        start: "top top",
        end: "bottom top",
        scrub: true,
        pin: true,
      },
    });

    sunTl.set(sun.current, {
      width: "100vw",
      height: "100vw",
      translateY: "85vh",
      borderRadius: "50%",
      backgroundColor: "#F9C516",
      filter: "blur(100px)",
    });

    sunTl.to(sun.current, {
      width: "75px",
      height: "75px",
      translateY: "-50%",
      borderRadius: "50%",
      filter: "blur(0px)",
    });

    heroTl.to(heroImg.current, { scale: 1.1 });

    tl.to(logo.current, {
      opacity: 0,
    }).to(heroText.current, {
      opacity: 1,
    });

    tl.add(heroTl, 0);

    const splitContentText = new SplitType(contentText.current, {
      types: "chars, words",
    });

    const contentTl = gsap.timeline({
      scrollTrigger: {
        trigger: contentText.current,
        start: "top center",
        end: "center+=200 center",
        scrub: 1,
      },
    });

    contentTl.from(splitContentText.chars, {
      opacity: 0.2,
      stagger: 0.05,
    });

    const splitTestimony = new SplitType(testimony.current, {
      types: "chars, words",
    });

    const testimonyTl = gsap.timeline({
      scrollTrigger: {
        trigger: testimony.current,
        start: "top bottom",
        end: "center center",
        scrub: 1,
      },
    });

    testimonyTl.from(splitTestimony.chars, {
      opacity: 0.2,
      stagger: 0.05,
    });

    const logosTl = gsap.timeline({
      scrollTrigger: {
        trigger: logos.current,
        start: "top bottom",
        end: "bottom+=300 top",
        scrub: 1,
      },

      // ease: "power1.inOut",
    });

    logosTl.to(logos.current, {
      x: 200 * -5.5,
    });

    return () => {
      tl.kill();
      sunTl.kill();
      heroTl.kill();
      contentTl.kill();
      testimonyTl.kill();
      logosTl.kill();
    };
  }, []);

  return (
    <div className="bg-oxford-blue w-screen" data-scroll-container>
      <div
        className="h-screen w-screen relative flex justify-center items-center overflow-hidden"
        ref={hero}
      >
        <div
          className="flex justify-center items-center h-screen absolute w-screen"
          style={{
            backgroundImage: "url('assets/header.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          ref={heroImg}
        />
        <div
          className="h-full w-full flex justify-center items-center relative"
          style={{
            background:
              "linear-gradient(180deg, hsla(225, 54%, 14%, 1), hsla(225, 54%, 14%, .5), hsla(225, 54%, 14%, 1))",
          }}
        >
          <div
            className="w-full h-[100px] sm:h-[150px] xl:h-[300px] flex justify-center items-center -mt-32"
            style={{
              backgroundImage: "url('logo-white.png')",
              backgroundSize: "contain",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
            }}
            ref={logo}
          />
          <h1
            className="text-[#F5F5F5] font-bold text-[50px] leading-[70px] sm:text-[60px] xl:text-[95px] text-center
              absolute top-1/2 transform -translate-y-1/2"
            style={{ opacity: 0 }}
            ref={heroText}
          >
            Purely Solar Since 1977
          </h1>
        </div>
      </div>

      <div
        className="w-screen h-screen overflow-x-hidden bg-[#F5F5F5] relative"
        ref={main}
      >
        <div className="w-full h-full flex flex-col justify-center items-center gap-2 text-[#18181A] ">
          <div className=" text-[80px]  xl:text-[130px] font-semibold leading-[90px] xl:leading-[140px] flex flex-row items-center gap-6 z-10 text-center px-4 ">
            Harness the power {window.innerWidth > 1280 && <br />}
            of the Sun.
          </div>

          <p className="text-[#18181A] text-[18px] font-normal w-[50%] text-center leading-6 z-10">
            Solar energy is the most abundant energy source on earth. It&apos;s
            free, clean, and renewable. With solar, you can reduce your
            electricity bills, protect yourself from rising utility rates, and
            reduce your carbon footprint. Solar is a smart investment that pays.
          </p>
        </div>
        <div
          className="w-[75px] h-[75px] absolute bottom-1/2 translate-y-1/2 xl:bottom-[10px] left-[50%] translate-x-[-50%] bg-[#F9C516] z-0 rounded-full blur-[0px]"
          ref={sun}
        />
      </div>

      <div className="flex justify-center items-center min-h-screen w-screen text-white">
        <div className="max-w-[1400px] px-16">
          <h1
            className="text-3xl md:text-6xl tracking-tight pt-64 font-light"
            ref={contentText}
          >
            <span className="font-bold">No cost. No obligation.</span> One of
            our experts will analyze your site, budget, and energy needs, and
            develop a precise analysis of how best to design your solar system.
            You&apos;ll get a quote, incentive information, and discover how
            soon your system will{" "}
            <span className="text-jasmine">pay for itself.</span>
          </h1>
        </div>
      </div>

      {/* Horizontal scrolling logos */}
      <p className="text-center text-[#f2f2f2] text-2xl my-16">
        Our Products & Partners:
      </p>
      <div
        className="flex flex-row gap-16 w-[3200px] lg:w-[250vw] items-center text-white overflow-x-hidden"
        ref={logos}
      >
        <div
          className="h-[60px] w-full"
          style={{
            backgroundImage: "url('logos/solaredge.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="h-[60px] w-full"
          style={{
            backgroundImage: "url('logos/fronius.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="h-[60px] w-full"
          style={{
            backgroundImage: "url('logos/heliocol.png')",
            filter: "brightness(0) invert(1)",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="h-[60px] w-full"
          style={{
            backgroundImage: "url('logos/LG.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="h-[60px] w-full"
          style={{
            backgroundImage: "url('logos/pentair.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="h-[60px] w-full"
          style={{
            backgroundImage: "url('logos/enphase.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="h-[60px] w-full"
          style={{
            backgroundImage: "url('logos/sma.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="h-[60px] w-full"
          style={{
            backgroundImage: "url('logos/qcells.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />

        <div
          className="h-[60px] w-full"
          style={{
            backgroundImage: "url('logos/solaredge.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="h-[60px] w-full"
          style={{
            backgroundImage: "url('logos/fronius.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="h-[60px] w-full"
          style={{
            backgroundImage: "url('logos/heliocol.png')",
            filter: "brightness(0) invert(1)",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="h-[60px] w-full"
          style={{
            backgroundImage: "url('logos/LG.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="h-[60px] w-full"
          style={{
            backgroundImage: "url('logos/pentair.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="h-[60px] w-full"
          style={{
            backgroundImage: "url('logos/enphase.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="h-[60px] w-full"
          style={{
            backgroundImage: "url('logos/sma.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div
          className="h-[60px] w-full"
          style={{
            backgroundImage: "url('logos/qcells.png')",
            backgroundSize: "contain",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
      </div>

      <div className="flex justify-center min-h-screen w-screen text-white mt-[350px]">
        <div className="max-w-[1400px] relative">
          <h1 className="text-5xl md:text-7xl tracking-tight z-10 text-center px-10">
            Solar is easy with
            <br />
            <span className="text-jasmine font-medium"> Mid-State Solar.</span>
          </h1>
          <div className="w-full mt-16 flex flex-col items-center justify-center gap-6 md:flex-row md:items-start">
            <div
              className="md:w-1/2 w-full h-full flex justify-center items-center flex-col gap-6 rounded-md bg-white
               text-black"
            >
              <div
                className="w-full h-[500px] rounded-t-sm"
                style={{
                  backgroundImage: "url('assets/electricity.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <div className="w-full flex flex-col items-center px-4 pb-8 gap-2">
                <h2 className="text-2xl font-semibold">ELECTRICITY</h2>
                <p className="text-[16px] text-center">
                  Power your home or business with clean, silent, renewable
                  technology.{" "}
                  <span className="text-steel-blue font-medium">
                    Enjoy independence from rising utility rates.
                  </span>
                </p>
              </div>
            </div>

            <div
              className="md:w-1/2 w-full h-full flex justify-center items-center flex-col gap-6 bg-white rounded-b-md
               text-black"
            >
              <div
                className="w-full h-[500px] rounded-t-sm"
                style={{
                  backgroundImage: "url('header.jpg')",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              />
              <div className="w-full flex flex-col items-center px-4 pb-8 gap-2">
                <h2 className="text-2xl font-semibold">POOL HEATING</h2>
                <p className="text-[16px] text-center">
                  Extent your swimming season with efficient solar heating.{" "}
                  <span className="text-steel-blue font-medium">
                    Swim longer. Swim comfortably.
                  </span>
                </p>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className="w-screen h-screen"
        style={{
          backgroundImage: "url('home-transformed.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="flex flex-col justify-center items-center py-32 w-screen text-white">
        <div className="max-w-[1750px] px-16">
          <h1
            className="text-3xl sm:text-4xl lg:text-7xl z-10 font-bold text-left"
            ref={testimony}
          >
            “I couldn&apos;t be happier with the system and the entire team from
            Mid-State Solar. One of my favorite parts of the day is when I go
            outside and watch my meter run backwards!”
          </h1>
          <p className="text-xl md:text-2xl text-left mt-8 text-[#f2f2f2]">
            Emma L. - Mid-State Solar Customer{" "}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-64 justify-center items-center w-screen text-white py-32 bg-night">
        <div className="max-w-[1400px] px-16">
          <h1 className="text-5xl md:text-7xl text-center font-bold">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl text-center mt-8 text-[#f2f2f2]">
            Mid-State Solar was established in 1977 and has specialized in solar
            energy since its founding. Under the same family ownership,
            we&apos;ve provided innovative solutions for solar thermal and solar
            electric (PV) applications to thousands of satisfied customers for
            over 45 years. Styles and products may have changed through the
            decades, but one thing remains the same: our dedication to those we
            serve.
            <br />
            <br />
            Whether large or small - residential, ag, or commercial - we strive
            for excellence on every job and work closely with you to create a
            solar energy system uniquely designed for your setting and goals.
          </p>
        </div>

        <div className="flex flex-col max-w-[1400px] px-16 mt-16 gap-16">
          <h1 className="text-5xl md:text-7xl text-center font-bold">
            Our Services
          </h1>
          <div className="w-full flex flex-col items-center justify-center gap-6 md:flex-row md:items-start">
            <div className="md:w-1/2 w-full h-full flex justify-center items-center flex-col gap-6 text-white">
              <div className="w-full flex flex-col items-center px-4 pb-8 gap-2">
                <h2 className="text-2xl font-semibold">ELECTRICITY</h2>
                <p className="text-[16px] text-center">
                  {" "}
                  Lowering your monthly utility bill - reducing your footprint.
                  With solar electricity you can achieve both. Solar electricity
                  (PV) provides clean, efficient, renewable energy independence
                  while protecting you from rising electricity costs. And a 30%
                  federal tax credit makes it more affordable than ever to start
                  generating your own electricity using the sun&apos;s free
                  energy.
                </p>
              </div>
            </div>

            <div className="md:w-1/2 w-full h-full flex justify-center items-center flex-col gap-6 text-white">
              <div className="w-full flex flex-col items-center px-4 pb-8 gap-2">
                <h2 className="text-2xl font-semibold">POOL HEATING</h2>
                <p className="text-[16px] text-center">
                  Your pool is a place for fun, exercise and relaxation – when
                  the water&apos;s warm enough. You can enjoy your pool for
                  months longer each year with reliable, efficient heat using
                  the world&apos;s most abundant fuel source – the sun&apos;s
                  free energy.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center w-screen text-white py-32 bg-night">
        <div className="max-w-[1400px] px-16 flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl text-center font-bold">
            {" "}
            Go solar for $0 down!
          </h1>
          <Link to="/free-estimate" className="w-full justify-center flex">
            <button className="bg-jasmine text-night text-2xl font-bold px-8 py-4 mt-8 rounded-full">
              Schedule an Analysis
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
