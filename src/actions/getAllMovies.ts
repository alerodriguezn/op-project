"use server";
import { prisma } from "@/lib/prisma";

export const getAllMovies = async () => {
  try {
    const movies = await prisma.movie.findMany();
    return movies;
  } catch (error) {
    console.error("Error obteniendo todas las películas", error);
    return [];
  }
};
