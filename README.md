# Remix SPA frontend + Elysia backend

Demonstration of a web project with:

- **Monorepo with Turborepo.** This lets a developer work on both the frontend and backend simply by running `pnpm dev`.

- **Separated frontend and backend.** The frontend can be deployed to any static file server, and the backend can be deployed to any server that supports Remix/Elysia.

- **Frontend: Remix (SPA mode).** A single-page app with client-side routing, built with Remix. Since Remix has a built-in solution for client-side queries (via [clientLoader](https://remix.run/docs/en/main/route/client-loader)) and mutations (via [clientAction](https://remix.run/docs/en/main/route/client-action)), no need for `useEffect` or data fetching libraries like React Query ([unless really needed](https://remix.run/docs/en/main/discussion/state-management#understanding-state-management-in-react)). By going 100% client-side, we can avoid all the headaches associated with server-side rendering (SSR). No more hydration mismatches!

- **Backend: Elysia on Remix.** Server-side code is built with Elysia which comes with built-in type validation and end-to-end type safety. An Elysia app is mounted on a server-side Remix app (which provides hot module reloading during development and bundling for production).

- **Testing: Playwright.**
