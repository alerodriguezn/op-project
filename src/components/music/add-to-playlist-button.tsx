"use client";

import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Playlist } from "@prisma/client";
import { addSongToPlaylist } from "@/actions/add-song-to-playlist";

interface Props {
  playlists: Playlist[] | undefined;
  songId: number;
}

export function AddToPlayListButton({ playlists, songId }: Props) {


  return (
    <div className="">
      <Menu>
        <MenuButton className="inline-flex items-center gap-2 rounded-md bg-gray-800 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-700 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white">
          Add to Playlist
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="w-52 origin-top-right rounded-xl border border-white/5 bg-zinc-700 p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          {playlists?.map((playlist) => (
            <MenuItem key={playlist.id}>
              <button onClick={() => addSongToPlaylist(songId, playlist.id)} >{playlist.name}</button>
            </MenuItem>
          ))}
        </MenuItems>
      </Menu>
    </div>
  );
}
