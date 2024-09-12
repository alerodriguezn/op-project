import { AlbumCard } from "@/components/music/album-card";
import { IoIosMusicalNote } from "react-icons/io";
import { GiGuitarBassHead } from "react-icons/gi"
import { PiMicrophoneStageBold } from "react-icons/pi";
import { BiSolidPiano } from "react-icons/bi";
import Link from "next/link";

export default function MusicPage() {
  return (
    <div className="flex flex-col items-center gap-4">
      <section className="w-1/2">
        <h2 className="text-2xl font-bold">Featured</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-4">
          <AlbumCard />
          <AlbumCard />
          <AlbumCard />
        </div>
      </section>
      <section className="w-1/2">
        <h2 className="text-2xl font-bold mb-2">Categories</h2>
        <div className="grid grid-cols-4 gap-2">
          <Link href={"/"} className=" flex flex-col justify-center items-center bg-zinc-800 p-4 rounded-md gap-y-2 hover:scale-105 transition-all hover:cursor-pointer">
            <IoIosMusicalNote size={35}/>
            <h3>Pop</h3>
          </Link>
          <Link href={"/music/genre/Rock"} className="flex flex-col justify-center items-center bg-zinc-800 p-4 rounded-md gap-y-2 hover:scale-105 transition-all hover:cursor-pointer">
            <GiGuitarBassHead size={35}/>
            <h3>Rock</h3>
          </Link>
          <Link href={"/music/genre/HipHop"} className="flex flex-col justify-center items-center bg-zinc-800 p-4 rounded-md gap-y-2 hover:scale-105 transition-all hover:cursor-pointer">
            <PiMicrophoneStageBold size={35}/>
            <h3>Hip Hop</h3>
          </Link>
          <div className="flex flex-col justify-center items-center bg-zinc-800 p-4 rounded-md gap-y-2 hover:scale-105 transition-all hover:cursor-pointer">
            <BiSolidPiano size={35}/>
            <h3>Classic</h3>
          </div>
        </div>
      </section>

      
    </div>
  );
}
