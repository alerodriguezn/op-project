"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const removeMovieFromLibrary = async (
  movieId: number,
  userId: string
) => {
  try {
    const library = await prisma.library.findFirst({
      where: {
        userId,
      },
    });

    if (!library) {
      throw new Error("Library not found");
    }

    await prisma.libraryMovie.deleteMany({
      where: {
        libraryId: library.id,
        movieId: movieId,
      },
    });

    revalidatePath(`/library/movies`); 

    return;
    
  } catch (error) {
    console.error(error);
    throw new Error("Error removing movie from library");
  }
};
