import { createServerFn } from "@tanstack/react-start";
import z from "zod";
import { db } from "@/db";

export const getBreeds = createServerFn().handler(async () => {
  try {
    const breeds = await db.breed.findMany({
      orderBy: {
        breed: "asc",
      },
    });

    return breeds;
  } catch (error) {
    console.error("Error fetching breeds:", error);
    throw new Error("Failed to fetch breeds");
  }
});

export const getBreedById = createServerFn()
  .inputValidator(z.string())
  .handler(async ({ data }) => {
    try {
      const breed = await db.breed.findFirst({
        where: {
          id: { equals: Number(data) },
        },
      });

      return breed;
    } catch (error) {
      console.error("Error fetching breeds:", error);
      throw new Error("Failed to fetch breeds");
    }
  });
