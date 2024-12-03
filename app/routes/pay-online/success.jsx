import {
  createFileRoute,
  useRouterState,
  useSearch,
} from "@tanstack/react-router";

export const Route = createFileRoute("/pay-online/success")({
  component: RouteComponent,
});

function RouteComponent() {
  const { total } = Route.useSearch();

  return (
    <div className="min-h-[70vh] flex flex-col items-center pt-52 bg-night text-white">
      <h1>Payment Successful</h1>
      <h2>
        Thank you, your payment of <span className="font-bold">${total}</span>{" "}
        was successful
      </h2>
      <p>A receipt has not been sent to your email</p>
    </div>
  );
}
