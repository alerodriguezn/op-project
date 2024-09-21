import { getAllSongs } from "@/actions/get-all-songs";
import { CardSongAdmin } from "@/components/music/card-song-admin";
import NewSongModal from '@/components/music/new-song-modal';

export default async function AdminPage() {
  const songs = await getAllSongs();

  return (
    <div className="w-3/4 flex mt-4 gap-4 ">
      <section className="w-1/2 ">
        <h2 className="font-bold text-xl">All Songs</h2>

        <NewSongModal/>

        <div className="flex flex-col gap-2 mt-4">
          {songs ? (
            songs.map((song) => <CardSongAdmin key={song.id} song={song} />)
          ) : (
            <p>No songs added</p>
          )}
        </div>
      </section>

      <section className="w-1/2 ">
        <h2>All Movies</h2>
      </section>
    </div>
  );
}
