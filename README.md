# Remix SPA frontend + Elysia backend

Demonstration of a web project with:

- **Monorepo with Turborepo.** This lets a developer work on both the frontend and backend simply by running `pnpm dev`.

- **Separated frontend and backend.** The frontend can be deployed to any static file server, and the backend can be deployed to any server that supports Remix/Elysia.

- **Frontend: Remix (SPA mode).** A single-page app with client-side routing, built with Remix. Since Remix has a built-in solution for client-side queries (via [clientLoader](https://remix.run/docs/en/main/route/client-loader)) and mutations (via [clientAction](https://remix.run/docs/en/main/route/client-action)), no need for `useEffect` or data fetching libraries like React Query ([unless really needed](https://remix.run/docs/en/main/discussion/state-management#understanding-state-management-in-react)). By going 100% client-side, we can avoid all the headaches associated with server-side rendering (SSR). No more hydration mismatches!

- **Backend: Elysia on Remix.** Server-side code is built with Elysia which comes with built-in type validation and end-to-end type safety. An Elysia app is mounted on a server-side Remix app (which provides hot module reloading during development and bundling for production).

- **Testing: Playwright.** [Black-box testing](https://www.youtube.com/watch?v=vbIWSwz8NxQ) lets us ensure the application works as expected while being agnostic to the implementation details. This lets us refactor the code without breaking the tests.

> [!WARNING]
>
> This project uses several stuff that, as of writing in 2024-02-09, are still in beta or unstable:
>
> - [Elysia 1.0 beta](https://github.com/elysiajs/elysia/pull/465)
> - [Remix Vite](https://remix.run/docs/en/main/future/vite)
> - [Remix SPA mode](https://remix.run/docs/en/main/future/spa-mode)
>
> I have a bit of hunch that this could be one of my preferred stacks[^prefer] once they are stable, but for now, this is just a proof of concept. We'll see how it goes.

[^prefer]: I’m only talking about the cases where I want to build a web application where its frontend and backend are completely separated, in which the frontend is completely static and rendered on the client-side, and the backend is written in the same language as the frontend (which gives us the possibility of having E2E type safety without code generation). In other cases, I would likely opt for different stacks.
