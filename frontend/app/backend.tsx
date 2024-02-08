import { treaty } from "@elysiajs/eden";
import type { App } from "../../backend/app/app";

export const backend = treaty<App>(
  typeof location !== "undefined" && location.hostname !== "localhost"
    ? location.origin.replace(/:\/\/([^.]+)/, "://$1-backend")
    : "http://localhost:41682"
);
