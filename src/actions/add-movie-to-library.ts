"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const addMovieToLibrary = async (userId: string, movieId: number) => {
  try {
    const library = await prisma.library.findFirst({
      where: {
        userId: userId,
      },
    });

    if (!library) {
      throw new Error("Library not found");
    }

    //check if movie is already in library
    const movie = await prisma.libraryMovie.findFirst({
      where: {
        libraryId: library.id,
        movieId: movieId,
      },
    });

    if (movie) {
      throw new Error("Movie already in library");
    }

    await prisma.libraryMovie.create({
      data: {
        libraryId: library.id,
        movieId: movieId,
      },
    });

    revalidatePath(`/library/movies`);

  } catch (error) {
    console.error("Error añadiendo película a la biblioteca", error);
  }
};
