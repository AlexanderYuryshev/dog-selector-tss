import {
  HeadContent,
  Outlet,
  Scripts,
  createRootRoute,
} from "@tanstack/react-router";
import appCss from "./globals.css?url";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      {
        name: "viewport",
        content: "width=device-width, initial-scale=1",
      },
      { title: "ЛапаМатч - Найдите Идеальную Породу Собаки" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: 'icon', href: '/icon.ico'}
    ],
  }),
  component: RootLayout,
});

function RootLayout() {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Outlet />
        <Scripts />
      </body>
    </html>
  );
}
