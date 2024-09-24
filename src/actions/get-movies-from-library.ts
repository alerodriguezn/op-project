"use server";
import { prisma } from "@/lib/prisma";

export const getMoviesFromLibrary = async (userId: string) => {
  try {
    const movies = await prisma.library.findUnique({
      where: {
        userId: userId,
      },
      include: {
        movies: {
          include: {
            movie: true,
          },
        },
      },
    });

    const allMovies = movies?.movies.map(libraryMovie => libraryMovie.movie);

    if (!allMovies) {
      throw new Error("No se encontraron películas en la biblioteca");
    }

    return allMovies

  } catch (error) {
    console.error("Error obteniendo películas de la biblioteca", error);
  }
};
