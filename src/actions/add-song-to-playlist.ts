"use server";
import { prisma } from "@/lib/prisma";

export const addSongToPlaylist = async (songId: number, playlistId: number) => {
  try {
    const song = await prisma.song.findUnique({
      where: {
        id: songId,
      },
    });

    if (!song) {
      throw new Error("Song not found");
    }
    const playlist = await prisma.playlist.findFirst({
      where: {
        id: playlistId,
      },
    });

    if (!playlist) {
      throw new Error("Playlist not found");
    }

    const songInPlaylist = await prisma.playlist.findFirst({
      where: {
        id: playlistId,
        songs: {
          some: {
            id: songId,
          },
        },
      },
    });
    if (songInPlaylist) {
      throw new Error("Song already in playlist");
    }

    await prisma.playlist.update({
      where: {
        id: playlist.id,
      },
      data: {
        songs: {
          connect: {
            id: song.id,
          },
        },
      },
    });
  } catch (error) {
    console.error(error);
  }
};
