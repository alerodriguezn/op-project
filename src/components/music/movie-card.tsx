"use client";
import { useEffect, useState } from "react";
import { deleteMovie } from "@/actions/delete-movie";
import { auth } from "@/auth.config";
import { Session } from "next-auth";  // Importar el tipo Session

interface MovieCardProps {
  movie: { id: number; title: string; genre: string };
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const [session, setSession] = useState<Session | null>(null);  // Definir tipo correcto para session

  useEffect(() => {
    const fetchSession = async () => {
      const session = await auth();  // Esperar a obtener la sesión
      setSession(session);
    };

    fetchSession();
  }, []);

  const handleDelete = async () => {
    try {
      await deleteMovie(movie.id);  // Eliminar película
      console.log(`Película ${movie.title} eliminada.`);
    } catch (error) {
      console.error("Error eliminando la película:", error);
    }
  };

  return (
    <div>
      <h3>{movie.title} - {movie.genre}</h3>
      {session?.user?.role === "admin" && (  // Mostrar botón solo si es admin
        <button onClick={handleDelete}>Eliminar Película</button>
      )}
    </div>
  );
};
