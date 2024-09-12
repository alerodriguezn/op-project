import { getAllSongsByGenre } from "@/actions/get-all-songs-by-genre";
import { getPlaylistsByUser } from "@/actions/get-playlists-by-user";
import { auth } from "@/auth.config";
import { CardSongPlayer } from "@/components/music/card-song-player";

interface Props {
  params: {
    name: string;
  };
}

export default async function GenrePage({ params }: Props) {
  const { name } = params;

  const session = await auth();

//   TODO: Delete that
  if (!session?.user.id) {
    return <div>Loading3...</div>;
  }

  const songs = await getAllSongsByGenre(name);
  const playlists = await getPlaylistsByUser(session.user.id);

  if (!songs) {
    return <div>Loading2...</div>;
  }

  return (
    <div className="w-full flex flex-col items-center ">
      <div className="w-1/2 ">
        <h2 className="text-2xl font-bold">{name} Music </h2>
        <div className="flex flex-col justify-center">
          {songs.map((song) => (
            <CardSongPlayer key={song.id} song={song} playlists={playlists} />
          ))}
        </div>
      </div>
    </div>
  );
}
