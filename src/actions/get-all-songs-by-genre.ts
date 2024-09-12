"use server";

import { prisma } from "@/lib/prisma";

export const getAllSongsByGenre = async (genre: string) => {
  try {
    const songs = await prisma.song.findMany({
      where: {
        genre: genre,
      },
    });

    return songs;
  } catch (error) {
    console.error(error);
  }
};
