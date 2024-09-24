"use server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth.config";  // Validar si es admin

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
  const session = await auth();

  if (session?.user.role !== "admin") {
    throw new Error("No tienes permisos para realizar esta acción");
  }

  try {
    await prisma.movie.create({
      data,
    });
    console.log("Película creada:", data.title);
  } catch (error) {
    console.error("Error creando película", error);
  }
};
