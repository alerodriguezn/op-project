"use client";
import { useEffect, useState } from "react";
import { deleteSong } from "@/actions/delete-song";
import { auth } from "@/auth.config";
import { Session } from "next-auth";  // Importar el tipo Session

interface SongCardProps {
  song: { id: number; title: string; artist: string };
}

export const SongCard = ({ song }: SongCardProps) => {
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
      await deleteSong(song.id);  // Eliminar canción
      console.log(`Canción ${song.title} eliminada.`);
    } catch (error) {
      console.error("Error eliminando la canción:", error);
    }
  };

  return (
    <div>
      <h3>{song.title} - {song.artist}</h3>
      {session?.user?.role === "admin" && (  // Mostrar botón solo si es admin
        <button onClick={handleDelete}>Eliminar Canción</button>
      )}
    </div>
  );
};
