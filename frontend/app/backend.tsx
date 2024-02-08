import { treaty } from "@elysiajs/eden";
import type { App } from "../../backend/app/app";

export const backend = treaty<App>("http://localhost:41682");
