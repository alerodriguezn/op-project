import Image from "next/image";
import Link from "next/link";
import React from "react";

interface MovieCardProps {
  title: string;
  imageUrl: string;
  id: number;
}

const MovieCard = ({ title, imageUrl,id }: MovieCardProps) => {
  return (

      <Link href={`/movies/${id}`} 
      
      className="bg-zinc-800 rounded-lg shadow-lg flex flex-col items-center justify-center p-4 hover:scale-105 transition-all">
        <Image
          src={imageUrl}
          alt={title}
          className="rounded-lg w-full object-cover object-center"
          width={260}
          height={385}
        />
        <h2 className="text-xl font-semibold text-white pt-2">{title}</h2>
      </Link>
    
  );
};

export default MovieCard;
