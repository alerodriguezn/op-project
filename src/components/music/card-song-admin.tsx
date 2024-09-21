
import Image from "next/image";
import { Song } from "@prisma/client";


interface Props {
  song: Song;
}

export const CardSongAdmin = ({ song }: Props) => {
  return (
    <div className="grid grid-cols-6 border-2 justify-items-center items-center bg-zinc-900 border-slate-800 rounded-lg p-2">
      <Image src={song.imageUrl || "default"} alt="" width={25} height={25}  />
      <h3 className="truncate">{song.title}</h3>
      <p className="truncate">{song.album}</p>
      <p className="truncate">{song.artist}</p>
      <p className="truncate">{song.genre}</p>
      <button>❌</button>
    </div>
  );
};
