"use server";

import { prisma } from "@/lib/prisma";

export const getAllSongs = async () => {
  try {
    const songs = await prisma.song.findMany();
    return songs;
  } catch (error) {
    console.error(error);
  }
};
