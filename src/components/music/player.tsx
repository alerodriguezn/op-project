"use client";

import { useEffect, useRef, useState } from "react";
import { usePlayerStore } from "@/store/playerStore";
import Image from "next/image";

import { SkipBack, SkipForward } from "lucide-react";
import { Play as LucidePlay, Pause as LucidePause } from "lucide-react";

export const Player = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [progress, setProgress] = useState(0);
  const { setCurrentMusic, currentMusic, isPlaying, setIsPlaying } =
    usePlayerStore((state) => state);

  useEffect(() => {
    if (audioRef.current) {
      isPlaying ? audioRef.current.play() : audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = currentMusic.song.url;
    }
  }, [currentMusic]);

  const playNext = () => {
    const currentIndex = currentMusic.songs.findIndex(
      (song) => song.id === currentMusic.song.id
    );
    if (currentIndex < currentMusic.songs.length - 1) {
      setCurrentMusic({
        song: currentMusic.songs[currentIndex + 1],
        songs: currentMusic.songs,
      });
    }
  };

  const playPrevious = () => {
    const currentIndex = currentMusic.songs.findIndex(
      (song) => song.id === currentMusic.song.id
    );
    if (currentIndex > 0) {
      setCurrentMusic({
        song: currentMusic.songs[currentIndex - 1],
        songs: currentMusic.songs,
      });
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      const progress =
        (audioRef.current.currentTime / audioRef.current.duration) * 100;
      setProgress(progress);
    }
  };

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-0 left-0 w-full bg-blue-600 text-white text-center p-4 flex justify-center">
   
      {currentMusic.song.title ? (
        <>
          <div className="space-y-2 flex justify-center items-center w-full">
            <div className="flex items-center w-1/2 gap-8">
              <h3 className="text-lg font-semibold flex items-center gap-2 ">
                <Image
                  src={currentMusic.song.imageUrl || "/imgs/placeholder.svg"}
                  width={30}
                  height={30}
                  alt="Album Image"
                  className="rounded"
                />
                {currentMusic.song.title
                  ? `${currentMusic.song.title} - ${currentMusic.song.artist}`
                  : "No song selected"}
              </h3>
              <div className="flex space-x-2">
                <button
                  onClick={playPrevious}
                  disabled={
                    !currentMusic.song.id || currentMusic.songs.length === 1
                  }
                >
                  <SkipBack className="h-4 w-4" />
                </button>
                <button
                  onClick={togglePlayPause}
                  disabled={!currentMusic.song.id}
                >
                  {isPlaying ? (
                    <LucidePause
                      className="h-4 w-4"
                      onClick={() => setIsPlaying(false)}
                    />
                  ) : (
                    <LucidePlay
                      className="h-4 w-4"
                      onClick={() => setIsPlaying(true)}
                    />
                  )}
                </button>
                <button
                  onClick={playNext}
                  disabled={
                    !currentMusic.song.id || currentMusic.songs.length === 1
                  }
                >
                  <SkipForward className="h-4 w-4" />
                </button>
              </div>

              <ProgressBar
                value={progress}
                onChange={(newValue) => {
                  if (audioRef.current) {
                    audioRef.current.currentTime =
                      (newValue / 100) * audioRef.current.duration;
                  }
                }}
              />
            </div>
          </div>

          <audio
            ref={audioRef}
            autoPlay
            src={currentMusic.song.url}
            onEnded={playNext}
            onTimeUpdate={handleTimeUpdate}
          />
        </>
      ) : (
        <p className="text-md font-bold">🎉 Welcome to Streamify! </p>
      )}
    </div>
  );
};

export const Pause = () => (
  <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16">
    <path d="M2.7 1a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7H2.7zm8 0a.7.7 0 0 0-.7.7v12.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V1.7a.7.7 0 0 0-.7-.7h-2.6z"></path>
  </svg>
);

export const Play = () => (
  <svg role="img" height="16" width="16" aria-hidden="true" viewBox="0 0 16 16">
    <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
  </svg>
);

interface ProgressBarProps {
  value: number;
  onChange: (newValue: number) => void;
  min?: number;
  max?: number;
}

const ProgressBar = ({
  value,
  onChange,
  min = 0,
  max = 100,
}: ProgressBarProps) => {
  const [isDragging, setIsDragging] = useState(false);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(true);
    updateValue(event);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (event: MouseEvent) => {
    if (isDragging) {
      updateValue(event);
    }
  };

  const updateValue = (
    event: MouseEvent | React.MouseEvent<HTMLDivElement>
  ) => {
    if (sliderRef.current) {
      const rect = sliderRef.current.getBoundingClientRect();
      const percentage = (event.clientX - rect.left) / rect.width;
      const newValue = Math.min(
        Math.max(percentage * (max - min) + min, min),
        max
      );
      onChange(newValue);
    }
  };

  useEffect(() => {
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isDragging]);

  const percentage = ((value - min) / (max - min)) * 100;

  return (
    <div
      ref={sliderRef}
      className="relative h-2 bg-gray-200 rounded-full cursor-pointer w-1/2"
      onMouseDown={handleMouseDown}
      role="slider"
      aria-valuemin={min}
      aria-valuemax={max}
      aria-valuenow={value}
      tabIndex={0}
    >
      <div
        className="absolute h-full bg-blue-500 rounded-full"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};
