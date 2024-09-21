"use client";
import { removeSongFromPlaylist } from "@/actions/remove-song-from-playlist";

interface PlaylistProps {
  playlist: { id: number; name: string; songs: { id: number; title: string }[] };
}

export const Playlist = ({ playlist }: PlaylistProps) => {
  const handleRemoveSong = async (songId: number) => {
    try {
      await removeSongFromPlaylist(songId, playlist.id);
      console.log(`Canción ${songId} eliminada de la playlist ${playlist.name}.`);
    } catch (error) {
      console.error("Error eliminando la canción de la playlist:", error);
    }
  };

  return (
    <div>
      <h3>{playlist.name}</h3>
      <ul>
        {playlist.songs.map((song) => (
          <li key={song.id}>
            {song.title}
            <button onClick={() => handleRemoveSong(song.id)}>Eliminar de la Playlist</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
