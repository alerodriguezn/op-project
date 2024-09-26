"use server";
import { prisma } from "@/lib/prisma";

export const createMovie = async (data: {
  title: string;
  description: string;
  sinopsis: string;  // Añadir la propiedad requerida
  genre: string;
  url: string;
  rating: number;
  imageUrl: string;
  duration: number;
  releaseDate: Date;
}) => {

  try {
    await prisma.movie.create({
      data,
    });
    console.log("Película creada:", data.title);
  } catch (error) {
    console.error("Error creando película", error);
  }
};
