"use server";
import { prisma } from "@/lib/prisma";

export const getMoviesFromLibrary = async (libraryId?: number, userId?: string) => {
  try {
    const library = await prisma.library.findFirst({
      where: {
        OR: [{ id: libraryId }, { userId: userId }],
      },
      include: { movies: true },
    });

    return library?.movies || [];
  } catch (error) {
    console.error("Error obteniendo películas de la biblioteca", error);
  }
};
