import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";

export const app = new Elysia({ prefix: "/api" })
  .use(cors())
  .get("/", () => "haiyaa")
  .get("/greeting", () => ({ message: "yo!" }))
  .compile();

export type App = typeof app;
