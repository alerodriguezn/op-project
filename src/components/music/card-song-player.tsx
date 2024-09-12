"use client";

import React from "react";
import Image from "next/image";
import { Playlist, Song } from "@prisma/client";
import { usePlayerStore } from "@/store/playerStore";
import { Pause, Play } from "@/components/music/player";
import { AddToPlayListButton } from "./add-to-playlist-button";

interface Props {
  song: Song;
  playlists: Playlist[] | undefined;
}

export const CardSongPlayer = ({ song, playlists }: Props) => {
  const { isPlaying, setIsPlaying, setCurrentMusic } = usePlayerStore(
    (state) => state
  );

  const handleClick = () => {
    if (isPlaying) {
      setIsPlaying(false);
      return;
    }
    setCurrentMusic({ song, songs: [song] });
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="bg-zinc-800 rounded-md p-2 flex items-center justify-between">
      <div className="flex justify-center items-center">
        <button
          onClick={handleClick}
          className="card-play-button rounded-full bg-green-500 p-4 hover:scale-105 transition hover:bg-green-400"
        >
          {isPlaying ? <Pause /> : <Play />}
        </button>
        <Image
          src={song.imageUrl || "/imgs/album-example.jpeg"}
          className="w-12 h-12 rounded-lg ml-2"
          alt={song.title}
          width={100}
          height={100}
        />
        <div className="flex flex-col ml-2">
          <h3 className="text-lg font-bold">{song.title}</h3>
          <p className="text-sm">{song.artist}</p>
        </div>
      </div>
      <div>
        <p>{song.album}</p>
      </div>

      <div className="font-light text-sm">
        {new Date(song.duration * 1000).toISOString().substr(14, 5)}
      </div>

      <div className="font-light text-sm">
        {new Date(song.createdAt).toDateString()}
      </div>
      <div>
        <AddToPlayListButton playlists={playlists} songId={song.id} />
      </div>
    </div>
  );
};
