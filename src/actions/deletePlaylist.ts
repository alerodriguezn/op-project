"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const deletePlaylist = async (playlistId: number) => {
  try {
    const playlist = await prisma.playlist.delete({
      where: {
        id: Number(playlistId),
      },
    });

    revalidatePath("/library/playlists");

    return playlist;
  } catch (error) {
    console.log(error);
  }
};
