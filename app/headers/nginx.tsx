import { useLoaderData, HeadersFunction } from "@remix-run/react";
import { json } from "@remix-run/node";

export async function loader() {
    return json([
        {id:"2", name: "Ryan", date: new Date() },{id:"1", name: "Ryan2", date: new Date() }
    ]);
}

export const headers: HeadersFunction = () => {
    const headers = new Headers();
    headers.append("X-Powered-By", "Nginx");
    return headers
  };

export default function Nginx() {
  const data = useLoaderData<typeof loader>();
  return (
    <figure class="bg-slate-100 white">
    {/* <img class="w-24 h-24 rounded-full" src="/sarah-dayan.jpg" alt="" width="384" height="512"> */}
    <div class="pt-6 space-y-4">
      <blockquote>
        <p class="text-lg">Im Nginx</p>
      </blockquote>
      <figcaption>
        <div>Sandhani Shaik</div>
      </figcaption>
    </div>
  </figure>
  )
}