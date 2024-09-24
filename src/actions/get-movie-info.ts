"use server";

import { prisma } from "@/lib/prisma";

export const getMovieInfo = async (id: string) => {
  try {
    const movie = await prisma.movie.findUnique({
      where: {
        id: parseInt(id),
      },
    });

    if (!movie) {
      throw new Error("Movie not found");
    }

    return movie;
  } catch (error) {
    console.error(error);
  }
};
