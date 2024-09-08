-- CreateTable
CREATE TABLE "Library" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "Library_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LibraryMovie" (
    "id" SERIAL NOT NULL,
    "libraryId" INTEGER NOT NULL,
    "movieId" INTEGER NOT NULL,

    CONSTRAINT "LibraryMovie_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LibrarySong" (
    "id" SERIAL NOT NULL,
    "libraryId" INTEGER NOT NULL,
    "songId" INTEGER NOT NULL,

    CONSTRAINT "LibrarySong_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Library" ADD CONSTRAINT "Library_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryMovie" ADD CONSTRAINT "LibraryMovie_libraryId_fkey" FOREIGN KEY ("libraryId") REFERENCES "Library"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibraryMovie" ADD CONSTRAINT "LibraryMovie_movieId_fkey" FOREIGN KEY ("movieId") REFERENCES "Movie"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibrarySong" ADD CONSTRAINT "LibrarySong_libraryId_fkey" FOREIGN KEY ("libraryId") REFERENCES "Library"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LibrarySong" ADD CONSTRAINT "LibrarySong_songId_fkey" FOREIGN KEY ("songId") REFERENCES "Song"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
