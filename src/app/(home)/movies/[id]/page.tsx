import Image from "next/image";
import { getMovieInfo } from "@/actions/get-movie-info";
import { Play } from "lucide-react";

interface Props {
  params: {
    id: string;
  };
}

export default async function MoviePage({ params }: Props) {
  const movie = await getMovieInfo(params.id);

  //TODO: Implement the UI for this page
  if (!movie) {
    return <div>Loading...</div>;
  }
  return (
    <div className=" mx-auto w-3/4 flex justify-center mt-4">
      <div className="w-[70%] flex gap-8">
        <Image
          src={movie.imageUrl || "placeholder.svg"}
          alt="Movie Card"
          width={260}
          height={385}
          className="rounded-lg"
        />

        <div className="flex flex-col ">
          <h2 className="font-bold text-3xl antialiased">{movie.title}</h2>

          <p className="text-md text-slate-300 mt-4  ">{movie.description}</p>

          {/* Rating with stars */}
          <div className="flex items-center gap-2 mt-4">
            <p className="text-lg font-semibold">Rating:</p>
            <div className="flex items-center gap-1">
              {Array.from({ length: Math.floor(movie.rating!) }).map((_, i) => (
                <span key={i}>⭐</span>
              ))}
            </div>
          </div>

          <p className="text-lg font-semibold mt-4 ">Genre: {movie.genre} </p>

          {/* Sinopsis */}
          <p className="text-md mt-4 text-slate-300">
            <span className="text-amber-500 text-lg font-bold">Sinopsis: </span>
            {movie.sinopsis}
          </p>

            {/* Add to Library and Play Movie */}
            <div className="flex gap-4 mt-4">
                <button className="bg-green-800 text-white py-2 px-4 rounded-lg font-bold">
                    Add to Library
                </button>
                <button className="bg-blue-800 text-white py-2 px-4 rounded-lg font-bold flex items-center gap-2">
                    <Play size={20} />
                    Play
                </button>
            </div>
         
         
        </div>
      </div>
    </div>
  );
}
