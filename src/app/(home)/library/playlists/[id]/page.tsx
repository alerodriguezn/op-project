"use client";

import { getSongsFromPlaylist } from "@/actions/get-songs-from-playlist";
import { usePlayerStore } from "@/store/playerStore";
import { Song } from "@prisma/client";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
    params: {
        id: string;
    };
}


export default function PlaylistPage({ params }: Props) {

  const { id } = params;

  const [playlist, setPlaylist] = useState<{ id: string; songs: Song[] } | null>(null)
  const { setIsPlaying, setCurrentMusic } = usePlayerStore(state => state)

  useEffect(() => {
    async function fetchPlaylist() {
      const fetchedSongs = await getSongsFromPlaylist(Number(id))
      if (fetchedSongs) {
        setPlaylist({ id, songs: fetchedSongs })
      }
    }
    fetchPlaylist()
  }, [id])

  if (!playlist) {
    return <div>Loading...</div>
  }

    
  const playSong = (song: Song, fromPlaylist: boolean) => {
    setCurrentMusic({ song, songs: fromPlaylist ? playlist.songs : [song] })
    setIsPlaying(true)
  }

  return (
    <div className="w-3/4 mx-auto">
      <table className="w-full text-xs">
        <thead className="sticky top-0 bg-[#0A0A0A] z-10 border-b border-[#282828]">
          <tr className="text-left text-gray-400">
            <th className="py-2 px-2 font-medium">Title</th>
            <th className="py-2 px-2 font-medium hidden sm:table-cell">
              Artist
            </th>
            <th className="py-2 px-2 font-medium hidden md:table-cell">
              Album
            </th>
            <th className="py-2 px-2 font-medium">Duration</th>
          </tr>
        </thead>
        <tbody className="mt-[1px]">
          {playlist.songs.map((track) => (
            <tr
              key={track.id}
              className={`group cursor-pointer hover:bg-[#1A1A1A] focus-within:bg-[#1A1A1A] focus-within:outline-none focus-within:ring-[0.5px] focus-within:ring-gray-400 select-none`}
              tabIndex={0}
              onClick={() => playSong(track, true)}
            >
              <td className="py-1 px-2">
                <div className="flex items-center">
                  <Image
                    src={track.imageUrl || "/placeholder.svg"}
                    alt={`${track.album} cover`}
                    width={40}
                    height={40}
                    className="size-4 mr-2 object-cover"
                  />
                  <div className="font-medium truncate max-w-[180px] sm:max-w-[200px] text-[#d1d5db]">
                    {track.title}
                    <span className="sm:hidden text-gray-400 ml-1">
                      • {track.artist}
                    </span>
                  </div>
                </div>
              </td>
              <td className="py-1 px-2 hidden sm:table-cell text-[#d1d5db]">
                {track.artist}
              </td>
              <td className="py-1 px-2 hidden md:table-cell text-[#d1d5db]">
                {track.album}
              </td>
              <td className="py-1 px-2 tabular-nums text-[#d1d5db]">
                {new Date(track.duration * 1000).toISOString().substr(14, 5)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
