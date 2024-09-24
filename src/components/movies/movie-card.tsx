import Image from "next/image";
import React from "react";

interface MovieCardProps {
  title: string;
  imageUrl: string;
}

const MovieCard = ({ title, imageUrl }: MovieCardProps) => {
  return (

      <div className="bg-zinc-800 rounded-lg shadow-lg flex flex-col items-center justify-center p-4">
        <Image
          src={imageUrl}
          alt={title}
          className="rounded-lg w-full object-cover object-center"
          width={260}
          height={385}
        />
        <h2 className="text-xl font-semibold text-white pt-2">{title}</h2>
      </div>
    
  );
};

export default MovieCard;
