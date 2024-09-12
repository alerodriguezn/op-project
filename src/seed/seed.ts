import { Library, Playlist } from "@prisma/client";

interface SeedSong {
  title: string;
  artist: string;
  album: string;
  genre: string;
  url: string;
  imageUrl: string;
  duration: number;
}

interface SeedMovie {
  title: string;
  description: string;
  sinopsis: string;
  genre: string;
  url: string;
  duration: number;
  rating: number;
  releaseDate: Date;
}

interface SeedData {
  songs: SeedSong[];
  movies: SeedMovie[];
  playList: Playlist[];
  library: Library[];
}

export const initialData: SeedData = {
  songs: [
    {
      title: "The Nights",
      artist: "Avicii",
      album: "The Nights/Days",
      genre: "Pop",
      imageUrl:
        "https://i.scdn.co/image/ab67616d00001e020ae4f4d42e4a09f3a29f64ad",
      url: "https://opproject.blob.core.windows.net/blobmultimedia/Avicii%20-%20The%20Nights.mp3",
      duration: 180,
    },
    {
      title: "Yellow",
      artist: "Coldplay",
      album: "Parachutes",
      genre: "Rock",
      imageUrl:
        "https://i.scdn.co/image/ab67616d00001e029164bafe9aaa168d93f4816a",
      url: "https://opproject.blob.core.windows.net/blobmultimedia/Coldplay%20-%20Yellow.mp3",
      duration: 200,
    },
    {
      title: "Believer",
      artist: "Imagine Dragons",
      album: "Evolve",
      genre: "Pop",
      imageUrl:
        "https://i.scdn.co/image/ab67616d00001e025675e83f707f1d7271e5cf8a",
      url: "https://opproject.blob.core.windows.net/blobmultimedia/Imagine%20Dragons%20-%20Believer.mp3",
      duration: 220,
    },
    {
      title: "Beautiful Girls",
      artist: "Sean Kingston",
      album: "Single",
      genre: "Pop",
      imageUrl:
        "https://i.scdn.co/image/ab67616d00001e026a45d20e414fbc456ecea553",
      url: "https://opproject.blob.core.windows.net/blobmultimedia/Sean%20Kingston%20-%20Beautiful%20Girls.mp3",
      duration: 240,
    },
  ],
  library: [
    {
      id: 1,
      userId: "cm0u8n8j600005uk5lsrhyxog",
    },
  ],
  movies: [],
  playList: [
    {
      id: 1,
      name: "My Playlist",
      userId: "cm0u8n8j600005uk5lsrhyxog",
      libraryId: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ],
};
