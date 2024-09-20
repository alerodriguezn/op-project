"use server";
import { prisma } from "@/lib/prisma";

export const removeSongFromPlaylist = async (songId: number, playlistId: number) => {
  try {
    await prisma.playlist.update({
      where: { id: playlistId },
      data: {
        songs: {
          disconnect: { id: songId },
        },
      },
    });
    console.log(`Canción con id ${songId} eliminada de la playlist ${playlistId}.`);
  } catch (error) {
    console.error("Error eliminando canción de la playlist", error);
  }
};
