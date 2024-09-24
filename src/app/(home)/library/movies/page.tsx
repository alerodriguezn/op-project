import { getMoviesFromLibrary } from "@/actions/get-movies-from-library";
import { auth } from "@/auth.config";
import Image from "next/image";
import { Play } from "lucide-react";
import Link from "next/link";

export default async function LibraryMoviesPage() {
  const session = await auth();

  if (!session) {
    return <p>Debes iniciar sesión</p>;
  }

  const movies = await getMoviesFromLibrary(session.user.id);

  return (
    <div className="w-1/2 mx-auto">
      <h2 className="font-bold text-xl">My Movies</h2>

      <div className="flex flex-col gap-2 mt-4 w-full">
        {movies ? (
          movies.map((movie) => (
            <div key={movie.id} className="flex justify-between items-center gap-2 w-full bg-zinc-800 p-2 rounded-lg">
              <div className="flex items-center gap-2">
                <Image
                  src={movie.imageUrl || "placeholder.svg"}
                  alt={movie.title}
                  className="w-20 h-20 object-cover rounded-xl"
                  width={80}
                  height={80}
                />

                <h3 className="text-xl font-bold antialiased">{movie.title}</h3>
              </div>
              <div className="flex items-center gap-4">
                <Link href={"/"} className="bg-blue-800 text-white py-2 px-4 rounded-lg font-bold flex items-center gap-2">
                  <Play size={24} />
                  Play
                </Link>
                <button className="bg-red-800 text-white py-2 px-4 rounded-lg font-bold flex items-center gap-2">
                  Remove
                </button>

              </div>
            </div>
          ))
        ) : (
          <p>No hay películas en tu biblioteca</p>
        )}
      </div>
    </div>
  );
}
