import { vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  plugins: [
    remix({
      future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
      },
      routes(defineRoutes:any) {
        return defineRoutes((route: any) => {
          route("/", "home/route.tsx", { index: true });
          route("headers", "headers/layout.tsx", () => {
            route("hugs", "headers/hugs.tsx", { index: true });
            route("php", "headers/php.tsx", { index: true });
            route("nginx", "headers/nginx.tsx", { index: true });
            route("python", "headers/python.tsx", { index: true });
            // route("trending", "concerts/trending.tsx");
            // route(":city", "concerts/city.tsx");
          });
        });
      },
    }),
    tsconfigPaths(),
  ],
});
