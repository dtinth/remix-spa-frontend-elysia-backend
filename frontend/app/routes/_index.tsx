import type { MetaFunction } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { backend } from "~/backend";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const clientLoader = async () => {
  const response = await backend.api.greeting.get();
  return response.data!;
};

export default function Index() {
  const data = useLoaderData<typeof clientLoader>();
  return (
    <div>
      <h1>{data.message}</h1>
    </div>
  );
}
