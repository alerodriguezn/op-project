

export interface Song {
    title: string;
    artist: string;
    album: string | null;
    genre: string;
    url: string;
    imageUrl: string | null;
    duration: number;
}