import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/contact-us/")({
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
          Contact Us
        </h1>
      </div>
      <div className="w-screen flex justify-center bg-night">
        <div className="w-screen flex flex-col items-center gap-4 max-w-[800px] xl:max-w-[1200px] text-center py-8">
          {/* Carousel */}
          <p className="text-[48px] px-4">Page removed for security reasons.</p>
        </div>
      </div>
    </div>
  );
}
