import { createFileRoute, redirect } from "@tanstack/react-router";

export const Route = createFileRoute("/why-us")({
  beforeLoad: () => {
    throw redirect({ to: "/why" });
  },
});
