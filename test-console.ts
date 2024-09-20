import { prisma } from "@/lib/prisma";
import { deleteMovie } from "@/actions/delete-movie";
import { deleteSong } from "@/actions/delete-song";
import { removeSongFromPlaylist } from "@/actions/remove-song-from-playlist";
import { addMovieToLibrary } from "@/actions/add-movie-to-library";
import { getSongsFromPlaylist } from "@/actions/get-songs-from-playlist";
import { getMoviesFromLibrary } from "@/actions/get-movies-from-library";

async function insertTestData() {
    try {
        console.log("Insertando datos de prueba...");

        const newMovie = await prisma.movie.create({
            data: {
                title: "Película de Prueba",
                description: "Esta es una película de prueba para realizar las pruebas.",
                sinopsis: "Sinopsis de prueba",
                genre: "Acción",
                url: "http://url-falsa.com",
                duration: 120,
                releaseDate: new Date(),
            },
        });

        const newSong = await prisma.song.create({
            data: {
                title: "Canción de Prueba",
                artist: "Artista de Prueba",
                album: "Álbum de Prueba",
                genre: "Pop",
                url: "http://url-falsa-cancion.com",
                duration: 180,
                imageUrl: "http://url-falsa-imagen.com",
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        });

        const newLibrary = await prisma.library.create({
            data: {
                userId: "1",  
            },
        });

        const newPlaylist = await prisma.playlist.create({
            data: {
                name: "Playlist de Prueba",
                userId: "1", 
                libraryId: newLibrary.id, 
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        });

        await prisma.playlist.update({
            where: { id: newPlaylist.id },
            data: {
                songs: {
                    connect: { id: newSong.id },
                },
            },
        });

        console.log("Datos de prueba insertados exitosamente.");
        return { newMovie, newSong, newPlaylist, newLibrary };
    } catch (error) {
        console.error("Error insertando datos de prueba:", error);
        return undefined; 
    }
}


async function runTests() {
    try {
        const testData = await insertTestData();

        if (!testData) {
            console.error("Error: No se pudieron insertar los datos de prueba.");
            return;
        }

        const { newMovie, newSong, newPlaylist, newLibrary } = testData;

        console.log("Probando eliminar película...");
        await deleteMovie(newMovie.id); 
        console.log("Película eliminada exitosamente.");

        console.log("Probando eliminar canción...");
        await deleteSong(newSong.id); 
        console.log("Canción eliminada exitosamente.");

        console.log("Probando eliminar canción de la playlist...");
        await removeSongFromPlaylist(newSong.id, newPlaylist.id);
        console.log("Canción eliminada de la playlist exitosamente.");

        console.log("Probando añadir película a la biblioteca...");
        await addMovieToLibrary(newLibrary.id, newMovie.id); 
        console.log("Película añadida a la biblioteca exitosamente.");

        console.log("Probando obtener canciones de la playlist...");
        const songs = await getSongsFromPlaylist(newPlaylist.id); 
        console.log("Canciones obtenidas de la playlist:", songs);

        console.log("Probando obtener películas de la biblioteca...");
        const movies = await getMoviesFromLibrary(newLibrary.id);
        console.log("Películas obtenidas de la biblioteca:", movies);

    } catch (error) {
        console.error("Error durante la prueba:", error);
    }
}

runTests();

