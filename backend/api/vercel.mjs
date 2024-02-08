import * as build from "../build/server/index.js";
import { createRequestHandler } from "@remix-run/node";

export default createRequestHandler(build);
