import { prisma } from "../lib/prisma";
import { initialData } from "./seed";

async function main() {
  
  await prisma.song.deleteMany();
  await prisma.movie.deleteMany();
  await prisma.playlist.deleteMany();
  await prisma.library.deleteMany();

  const { songs, library, playList } = initialData;

  await prisma.song.createMany({
    data: songs,
  });

  await prisma.library.createMany({
    data: library,
  });

  await prisma.playlist.createMany({
    data: playList,
  });

  console.log("Data seeded.");
}

(() => {
  if (process.env.NODE_ENV === "production") return;
  main();
})();
