import { Link, createFileRoute, notFound } from "@tanstack/react-router";
import type { DogBreed } from "@/lib/models";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { BreedDetail } from "@/components/breed-detail";

import { getBreedById } from "@/lib/server-actions";

export const Route = createFileRoute("/breeds/$id")({
  component: Page,
  loader: async ({ params: { id } }) => {
    const breed = await getBreedById({data: id});
    return breed;
  },
});

function Page() {
  const breed = Route.useLoaderData();

  if (!breed) {
    notFound();
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1">
        <div className="mx-auto max-w-4xl px-4 py-8">
          {/* Breadcrumbs */}
          <nav aria-label="Навигация" className="mb-6">
            <ol className="flex items-center gap-2 text-sm">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary"
                >
                  Главная
                </Link>
              </li>

              <BreadcrumbArrow />

              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-primary"
                >
                  Породы
                </Link>
              </li>

              <BreadcrumbArrow />

              <li>
                <span className="font-medium">{breed?.breed}</span>
              </li>
            </ol>
          </nav>

          <BreedDetail breed={breed as DogBreed} />

          {/* Back link */}
          <div className="mt-8">
            <Link
              to="/"
              className="text-primary inline-flex items-center gap-2 hover:underline"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="h-4 w-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                />
              </svg>
              Вернуться к списку пород
            </Link>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function BreadcrumbArrow() {
  return (
    <li>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="text-muted-foreground h-4 w-4"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </li>
  );
}
