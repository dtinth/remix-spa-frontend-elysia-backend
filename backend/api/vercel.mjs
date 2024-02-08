import * as build from "./build/server/index.js";
import { createRequestHandler } from "@remix-run/express";
import express from "express";

export default express().use(createRequestHandler({ build }));
