"use server";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const createPlaylist = async (name: string, userId: string) => {
  try {


    const userLibrary = await prisma.library.findUnique({
      where: {
        userId,
      },
    });

    if (!userLibrary) {
      throw new Error("User library not found");
    }

    const playlist = await prisma.playlist.create({
      data: {
        name,
        user: {
          connect: {
            id: userId,
          },
        },
        library: {
          connect: {
            id: userLibrary.id,
          },
        },
      },
    });

    revalidatePath("/library/playlists");

    return playlist;
  } catch (error) {
    console.log(error);
  }
};
