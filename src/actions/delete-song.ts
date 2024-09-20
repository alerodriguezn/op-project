"use server";
import { prisma } from "@/lib/prisma";
import { auth } from "@/auth.config";

export const deleteSong = async (songId: number) => {
  const session = await auth();

  if (session?.user.role !== "admin") {
    throw new Error("No tienes permisos para realizar esta acción");
  }

  try {
    await prisma.song.delete({
      where: { id: songId },
    });
    console.log(`Canción con id ${songId} eliminada.`);
  } catch (error) {
    console.error("Error eliminando canción", error);
  }
};
