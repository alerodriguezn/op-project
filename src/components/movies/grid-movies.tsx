"use client";  // Agrega esta línea al principio del archivo

import React, { useEffect, useState } from 'react';
import MovieCard from './movie-card';
import { getAllMovies } from '@/actions/getAllMovies';

interface Movie {
  id: number;
  title: string;
  url: string;
  description: string;
  sinopsis: string;
  genre: string;
  duration: number;
  rating: number | null;
  releaseDate: Date;
  createdAt: Date;
  imageUrl: string | null;
  updatedAt: Date;
}

const GridMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchMovies = async () => {
      const data: Movie[] = await getAllMovies();
      setMovies(data);
    };
    
    fetchMovies();
  }, []);

  return (
    <div className="container mx-auto pb-12">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
        {movies.map((movie) => (
          <MovieCard 
            key={movie.id} 
            id={movie.id}
            title={movie.title} 
            imageUrl={movie.imageUrl || 'placeholder.svg'} //Aqui ese url esta mal, esta enviando el url del video. 
          />
        ))}
      </div>
    </div>
  );
};

export default GridMovies;
