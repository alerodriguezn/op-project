"use server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth.config";

export const deleteMovie = async (movieId: number) => {
  const session = await auth();

  if (session?.user.role !== "admin") {
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
