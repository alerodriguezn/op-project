"use client";

import { addMovieToLibrary } from "@/actions/add-movie-to-library";

interface Props {
  movieId: number;
  userId: string;
}

export const AddMovieToLibraryButton = ({userId, movieId }: Props) => {

  const addMovie = addMovieToLibrary.bind(null, userId, movieId);

  return (
    <form action={addMovie}>
      <button className="bg-green-700 rounded-lg p-2 font-bold" type="submit">
        Add to Library
      </button>
    </form>
  );
};
