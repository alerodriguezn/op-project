import React from 'react';

interface MovieCardProps {
  title: string;
  imageUrl: string;
}

const MovieCard = ({ title, imageUrl }: MovieCardProps) => {
  return (
    imageUrl = "https://image.tmdb.org/t/p/w300_and_h300_bestv2/aQnbNiadeGzGSjWLaXyeNxpAUIx.jpg", //Esta dando problemas el imageUrl original esta obteniendo el link del video y no de la imagen
    <div className="bg-white rounded-lg shadow-lg flex flex-col items-center justify-center p-4">
      <img 
        src={imageUrl} 
        alt={title} 
        className="rounded-lg w-full object-cover"
      />
      <h2 className="text-xl font-semibold text-black pt-2">{title}</h2>
    </div>
  );
};

export default MovieCard;
