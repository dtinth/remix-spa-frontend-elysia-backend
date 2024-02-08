import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { ReactNode } from "react";

/**
 * Renders a Remix skeleton with the app's content.
 */
function RemixSkeleton(props: { children?: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        {props.children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

/**
 * Rendered after the SPA has been loaded.
 */
export default function App() {
  return (
    <RemixSkeleton>
      <Outlet />
    </RemixSkeleton>
  );
}

/**
 * Rendered while the app is loading.
 */
export function HydrateFallback() {
  return <RemixSkeleton>App is loading…</RemixSkeleton>;
}
