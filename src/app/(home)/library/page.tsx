import { getPlaylistsByUser } from "@/actions/get-playlists-by-user";
import { auth } from "@/auth.config";
import { Clapperboard, Headphones, Library } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

export default async function LibraryPage() {
  const session = await auth();

  const user = session?.user;

  if (!user) {
    redirect("/");
  }

  const playlists = await getPlaylistsByUser(session!.user.id);
  

  console.log(playlists![0].songs);

  return (
    <div className="w-1/2 flex flex-col mx-auto gap-6">
      <h2 className="text-2xl font-bold antialiased flex items-center gap-2">
        <Library />
        Your Library
      </h2>

      <Link href={"/library/playlists"} className="relative flex justify-center items-center h-[200px] bg-cover bg-center rounded-lg hover:scale-105 transition-all ">
        <span className="flex justify-center items-center gap-2 z-10">
          <Headphones size={40} />
          <p className="text-3xl font-bold">My Playlists</p>
        </span>
        <div className="absolute inset-0 bg-[url('/imgs/music.jpg')] bg-cover bg-center opacity-60 rounded-lg"></div>
      </Link>

      <Link href={"/library/movies"} className="relative flex justify-center items-center h-[200px] bg-cover bg-center rounded-lg hover:scale-105 transition-all ">
        <span className="flex justify-center items-center gap-2 z-10">
          <Clapperboard size={40} />
          <p className="text-3xl font-bold">My Movies</p>
        </span>
        <div className="absolute inset-0 bg-[url('/imgs/movies.jpg')] bg-cover bg-center opacity-60 rounded-lg"></div>
      </Link>
    </div>
  );
}
