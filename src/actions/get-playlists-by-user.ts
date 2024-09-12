"use server";

import { prisma } from "@/lib/prisma";

export const getPlaylistsByUser = async (userId: string) => {
  try {
    const playlists = await prisma.playlist.findMany({
      where: {
        userId: userId,
      },
      include: {
        songs: true,
      },
    });

    return playlists;
  } catch (error) {
    console.error(error);
  }
};
