import { getPlaylistsByUser } from "@/actions/get-playlists-by-user";
import { auth } from "@/auth.config";
import { ListMusic } from "lucide-react";

export default async function PlaylistsPage() {
  const session = await auth();

  // TODO: Implementar un middleware para verificar si el usuario está autenticado(Si no me da pereza).
  if (!session?.user) {
    return <p>Not authenticated</p>;
  }

  const playlists = await getPlaylistsByUser(session!.user.id);

  return (
    <div className="w-1/2 mx-auto">
      <h2 className="text-2xl font-bold antialiased">My Playlists</h2>

      <div className="mt-4">
        {playlists ? (
          <div>
            {playlists.map((playlist) => (
              <div
                key={playlist.id}
                className="flex justify-between items-center bg-white/10 p-4 rounded-lg"
              >
                <p className="text-lg font-bold flex items-center gap-2">
                  <ListMusic />
                  {playlist.name}
                </p>
                <p className="text-sm/6 text-white/50">
                  {playlist.songs.length} songs
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p>Try to create a new playlist </p>
        )}
      </div>
    </div>
  );
}
