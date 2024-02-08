import { treaty } from "@elysiajs/eden";
import type { App } from "../../backend/app/app";

export const backend = treaty<App>(
  location.hostname === "localhost"
    ? "http://localhost:41682"
    : location.origin.replace(/:\/\/([^.]+)/, "://$1-backend")
);
