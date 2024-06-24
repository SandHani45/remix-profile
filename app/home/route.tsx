import type { MetaFunction } from "@remix-run/node";
import { json } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return [
    { title: "Tesco Remix Playground" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};
export async function loader() {
  return json([
      {id:"2", name: "Ryan", date: new Date() },{id:"1", name: "Ryan2", date: new Date() }
  ]);
}

export default function home() {
  return <>
    <div>Welcome Shaik</div>
  </>
}
