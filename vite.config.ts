// vite.config.ts
import { defineConfig } from "vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import viteReact from "@vitejs/plugin-react";
import viteTsConfigPaths from "vite-tsconfig-paths";
import tailwindcss from "@tailwindcss/vite";
import { nitro } from "nitro/vite";

export default defineConfig({
  plugins: [
    tailwindcss(),
    // Enables Vite to resolve imports using path aliases.
    viteTsConfigPaths({
      projects: ["./tsconfig.json"],
    }),
    tanstackStart({
      srcDirectory: "src", // This is the default
      router: {
        // Specifies the directory TanStack Router uses for your routes.
        routesDirectory: "app", // Defaults to "routes", relative to srcDirectory
      },
    }),
    viteReact(),
    nitro(),
  ],
});
// import { defineConfig } from "vite";
// import { devtools } from "@tanstack/devtools-vite";
// import { tanstackStart } from "@tanstack/react-start/plugin/vite";
// import viteReact from "@vitejs/plugin-react";
// import viteTsConfigPaths from "vite-tsconfig-paths";
// import tailwindcss from "@tailwindcss/vite";
// import { nitro } from "nitro/vite";
// import contentCollections from "@content-collections/vite";

// const config = defineConfig({
//   plugins: [
//     devtools(),
//     nitro(),
//     contentCollections(),
//     // this is the plugin that enables path aliases
//     viteTsConfigPaths({
//       projects: ["./tsconfig.json"],
//     }),
//     tailwindcss(),
//     tanstackStart(),
//     viteReact(),
//   ],
// });

// export default config;
