import type { MetaFunction } from "@remix-run/node";
import {
  Await,
  ClientActionFunctionArgs,
  Form,
  defer,
  json,
  useActionData,
  useLoaderData,
} from "@remix-run/react";
import { backend } from "~/backend";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export const clientLoader = async () => {
  const response = backend.api.greeting.get();
  return defer({
    backendMessagePromise: response.then((r) => r.data!.message),
  });
};

export const clientAction = async (args: ClientActionFunctionArgs) => {
  const formData = await args.request.formData();
  const name = formData.get("name") as string;
  const response = await backend.api.greetMe.post({ name });
  return json(response.data!);
};

export default function Index() {
  const data = useLoaderData<typeof clientLoader>();
  const actionData = useActionData<typeof clientAction>();
  return (
    <div>
      <h1>
        Message from backend:{" "}
        <Await resolve={data.backendMessagePromise}>
          {(backendMessage) => backendMessage}
        </Await>
      </h1>
      {actionData && <h2>{actionData.message}</h2>}
      <Form method="POST">
        <input type="text" name="name" placeholder="Name" />{" "}
        <button type="submit">Greet me</button>
      </Form>
    </div>
  );
}
