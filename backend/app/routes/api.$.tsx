import { ActionFunctionArgs, LoaderFunctionArgs } from "@remix-run/node";
import { app } from "../app";

export function loader(args: LoaderFunctionArgs) {
  return app.fetch(args.request);
}

export function action(args: ActionFunctionArgs) {
  return app.fetch(args.request);
}
