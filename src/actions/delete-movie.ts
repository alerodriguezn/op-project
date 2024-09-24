"use server";
import { prisma } from "@/lib/prisma";

export const deleteMovie = async (movieId: number, userRole: string) => {


  if (userRole !== "admin") {
    throw new Error("No tienes permisos para realizar esta acción");
  }

  try {
    await prisma.movie.delete({
      where: { id: movieId },
    });
    console.log(`Película con id ${movieId} eliminada.`);
  } catch (error) {
    console.error("Error eliminando película", error);
  }
};
