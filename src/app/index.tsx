import { Suspense } from "react";
import { createFileRoute } from "@tanstack/react-router";
import type { DogBreed } from "@/lib/models";
import { Header } from "@/components/header";
import { BreedSelector } from "@/components/breed-selector";
import { Footer } from "@/components/footer";
import { BreedSelectorSkeleton } from "@/components/breed-selector-skeleton";
import { getBreeds } from "@/lib/server-actions";

export const Route = createFileRoute("/")({
  component: Page,
  loader: async () => {
    const breeds = await getBreeds();
    return breeds;
  },
});

function Page() {
  const breeds = Route.useLoaderData()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1">
        <Suspense fallback={<BreedSelectorSkeleton />}>
          <BreedSelector breeds={breeds as Array<DogBreed>} />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
