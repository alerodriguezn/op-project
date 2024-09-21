"use server";
import { prisma } from "@/lib/prisma";

export const getSongsFromPlaylist = async (playlistId: number) => {
  try {
    const playlist = await prisma.playlist.findUnique({
      where: { id: playlistId },
      include: { songs: true },  // Incluir canciones
    });

    return playlist?.songs || [];
  } catch (error) {
    console.error("Error obteniendo canciones de la playlist", error);
  }
};
