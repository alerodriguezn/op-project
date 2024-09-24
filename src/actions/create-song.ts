"use server";

import { prisma } from "@/lib/prisma";
import { Song } from "@/interfaces/song";
import { revalidatePath } from "next/cache";


export const createSong = async (data: Song) => {
  try {
    const newSong = await prisma.song.create({
      data: {
        title: data.title,
        artist: data.artist,
        album: data.album,
        genre: data.genre,
        url: data.url,
        imageUrl: data.imageUrl,
        duration: data.duration,
      },
    });

    if (!newSong) {
      throw new Error("Song not created");
    }

    revalidatePath("/admin");

    return newSong;

  } catch (error) {
    console.error(error);
  }
};
