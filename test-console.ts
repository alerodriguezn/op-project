import { prisma } from "@/lib/prisma";
import { deleteMovie } from "@/actions/delete-movie";
import { deleteSong } from "@/actions/delete-song";
import { removeSongFromPlaylist } from "@/actions/remove-song-from-playlist";
import { addMovieToLibrary } from "@/actions/add-movie-to-library";
import { getSongsFromPlaylist } from "@/actions/get-songs-from-playlist";
import { getMoviesFromLibrary } from "@/actions/get-movies-from-library";

// Función para insertar valores de prueba en la base de datos
async function insertTestData() {
    try {
        console.log("Insertando datos de prueba...");

        // Insertar película de prueba
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

        // Insertar canción de prueba
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

        // Crear una biblioteca de prueba
        const newLibrary = await prisma.library.create({
            data: {
                userId: "1",  // Asegúrate de usar un ID de usuario válido
            },
        });

        // Crear una playlist de prueba y asociarla con la biblioteca
        const newPlaylist = await prisma.playlist.create({
            data: {
                name: "Playlist de Prueba",
                userId: "1", // Asegúrate de usar un ID de usuario válido
                libraryId: newLibrary.id,  // Asocia la playlist con la biblioteca creada
                createdAt: new Date(),
                updatedAt: new Date(),
            },
        });

        // Añadir la canción a la playlist de prueba
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
        return undefined; // Retorna undefined en caso de error
    }
}


async function runTests() {
    try {
        // Insertar datos de prueba antes de ejecutar las pruebas
        const testData = await insertTestData();

        if (!testData) {
            console.error("Error: No se pudieron insertar los datos de prueba.");
            return;
        }

        const { newMovie, newSong, newPlaylist, newLibrary } = testData;

        // Prueba eliminar la película recién creada
        console.log("Probando eliminar película...");
        await deleteMovie(newMovie.id); // Usa el id de la nueva película
        console.log("Película eliminada exitosamente.");

        // Prueba eliminar la canción recién creada
        console.log("Probando eliminar canción...");
        await deleteSong(newSong.id); // Usa el id de la nueva canción
        console.log("Canción eliminada exitosamente.");

        // Prueba eliminar la canción de la playlist recién creada
        console.log("Probando eliminar canción de la playlist...");
        await removeSongFromPlaylist(newSong.id, newPlaylist.id); // Usa los ids de la nueva canción y playlist
        console.log("Canción eliminada de la playlist exitosamente.");

        // Prueba añadir la película recién creada a la biblioteca
        console.log("Probando añadir película a la biblioteca...");
        await addMovieToLibrary(newLibrary.id, newMovie.id); // Usa los ids de la nueva biblioteca y película
        console.log("Película añadida a la biblioteca exitosamente.");

        // Prueba obtener todas las canciones de la playlist recién creada
        console.log("Probando obtener canciones de la playlist...");
        const songs = await getSongsFromPlaylist(newPlaylist.id); // Usa el id de la nueva playlist
        console.log("Canciones obtenidas de la playlist:", songs);

        // Prueba obtener películas de la biblioteca recién creada
        console.log("Probando obtener películas de la biblioteca...");
        const movies = await getMoviesFromLibrary(newLibrary.id); // Usa el id de la nueva biblioteca
        console.log("Películas obtenidas de la biblioteca:", movies);

    } catch (error) {
        console.error("Error durante la prueba:", error);
    }
}

runTests();

