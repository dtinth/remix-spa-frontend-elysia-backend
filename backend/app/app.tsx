import { Elysia, t } from "elysia";
import { cors } from "@elysiajs/cors";

export const app = new Elysia({ prefix: "/api" })
  .use(cors())
  .get("/", () => "haiyaa")
  .get("/greeting", () => ({ message: "yo!" }))
  .post("/greetMe", ({ body }) => ({ message: `hi, ${body.name}` }), {
    body: t.Object({ name: t.String() }),
  })
  .compile();

export type App = typeof app;
