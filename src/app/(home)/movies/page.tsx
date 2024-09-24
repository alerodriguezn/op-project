import React from 'react';
import GridMovies from '../../../components/movies/grid-movies';

export default function MoviesPage() {
  return (
    <div className="bg-#0a0a0a-900 min-h-screen text-white">
      <h1 className="text-center text-4xl font-bold my-8">Movies</h1>
      <div className="container mx-auto px-4">
        <GridMovies />
      </div>
    </div>
  );
}
