"use client";

import { deletePlaylist } from "@/actions/deletePlaylist";

interface Props {
  playlistId: number;
}

export const DeletePlaylistButton = ({ playlistId }: Props) => {
  const deleteAction = deletePlaylist.bind(null, playlistId);

  return (
    <form action={deleteAction}>
      <button className="bg-red-700 rounded-lg p-2" type="submit">
        Delete
      </button>
    </form>
  );
};
