"use server";
import { prisma } from "@/lib/prisma";

export const addMovieToLibrary = async (libraryId: number, movieId: number) => {
  try {
    await prisma.library.update({
      where: { id: libraryId },
      data: {
        movies: {
          connect: { id: movieId },
        },
      },
    });
    console.log(`Película con id ${movieId} añadida a la biblioteca ${libraryId}.`);
  } catch (error) {
    console.error("Error añadiendo película a la biblioteca", error);
  }
};
