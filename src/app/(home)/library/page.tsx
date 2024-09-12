import { getPlaylistsByUser } from "@/actions/get-playlists-by-user";
import { auth } from "@/auth.config";


export default async function LibraryPage() {

    const session = await auth();

    const playlists = await getPlaylistsByUser(session!.user.id);

    console.log(playlists![0].songs);

    return (
    <div>
      <h1>Hola</h1>
    </div>
  );
}