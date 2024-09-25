"use client";

import { removeMovieFromLibrary } from "@/actions/remove-movie-from-library";

interface Props {
  movieId: number;
  userId: string;
}

export const DeleteMovieButton = ({ 
    movieId, 
    userId
 }: Props) => {
  const deleteAction = removeMovieFromLibrary.bind(null, movieId, userId);

  return (
    <form action={deleteAction}>
      <button className="bg-red-700 rounded-lg p-2 font-bold" type="submit">
        Delete
      </button>
    </form>
  );
};
