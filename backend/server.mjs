import * as build from "./build/server/index.js";
import { createRequestHandler } from "@remix-run/express";
import express from "express";

express()
  .use(createRequestHandler({ build }))
  .listen(41682, () => {
    console.log(`Server listening on port 41682`);
  });
