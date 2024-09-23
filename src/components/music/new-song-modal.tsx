"use client";

import { useState } from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { createSong } from "@/actions/create-song";

export default function NewSongModal() {
  const [isOpen, setIsOpen] = useState(false);

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const onSubmit = async (formData: FormData) => {
    const title = formData.get("title") as string;
    const artist = formData.get("artist") as string;
    const album = (formData.get("album") as string) || null;
    const genre = formData.get("genre") as string;
    const imageUrl = (formData.get("imageUrl") as string) || null;
    const duration = Number(formData.get("duration"));
    const url = formData.get("url") as string;

    try {
      await createSong({
        title,
        artist,
        album,
        genre,
        imageUrl,
        duration,
        url,
      });

      close();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <Button
        onClick={open}
        className="rounded-md bg-purple-900 py-2 px-4 mt-2 text-sm font-medium text-white focus:outline-none data-[hover]:bg-slate-700 data-[focus]:outline-1 data-[focus]:outline-white"
      >
        Add New Song
      </Button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl bg-white/5 p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle
                as="h3"
                className="text-base/7 font-medium text-white"
              >
                Add New Song
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-white/50">
                Add a new song to the database.
              </p>

              <form action={onSubmit}>
                <div className="mt-4">
                  <label
                    htmlFor="title"
                    className="block text-sm/6 text-white/50"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id="title"
                    name="title"
                    className="mt-1 block w-full rounded-md bg-white/10 border-transparent focus:border-white/20 focus:ring-0 text-white/90"
                  />
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="artist"
                    className="block text-sm/6 text-white/50"
                  >
                    Artist
                  </label>
                  <input
                    type="text"
                    id="artist"
                    name="artist"
                    className="mt-1 block w-full rounded-md bg-white/10 border-transparent focus:border-white/20 focus:ring-0 text-white/90"
                  />
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="album"
                    className="block text-sm/6 text-white/50"
                  >
                    Album
                  </label>
                  <input
                    type="text"
                    id="album"
                    name="album"
                    className="mt-1 block w-full rounded-md bg-white/10 border-transparent focus:border-white/20 focus:ring-0 text-white/90"
                  />
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="genre"
                    className="block text-sm/6 text-white/50"
                  >
                    Genre
                  </label>
                  <input
                    type="text"
                    id="genre"
                    name="genre"
                    className="mt-1 block w-full rounded-md bg-white/10 border-transparent focus:border-white/20 focus:ring-0 text-white/90"
                  />
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="duration"
                    className="block text-sm/6 text-white/50"
                  >
                    Duration
                  </label>
                  <input
                    type="text"
                    id="duration"
                    name="duration"
                    className="mt-1 block w-full rounded-md bg-white/10 border-transparent focus:border-white/20 focus:ring-0 text-white/90"
                  />
                </div>

                <div className="mt-4">
                  <label
                    htmlFor="url"
                    className="block text-sm/6 text-white/50"
                  >
                    Url
                  </label>
                  <input
                    type="text"
                    id="url"
                    name="url"
                    className="mt-1 block w-full rounded-md bg-white/10 border-transparent focus:border-white/20 focus:ring-0 text-white/90"
                  />
                </div>
                <div className="mt-4">
                  <label
                    htmlFor="imageUrl"
                    className="block text-sm/6 text-white/50"
                  >
                    Image Url
                  </label>
                  <input
                    type="text"
                    id="imageUrl"
                    name="imageUrl"
                    className="mt-1 block w-full rounded-md bg-white/10 border-transparent focus:border-white/20 focus:ring-0 text-white/90"
                  />
                </div>

                <div className="mt-4 flex justify-between">
                  <Button
                    className="inline-flex items-center gap-2 rounded-md bg-red-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                    onClick={close}
                  >
                    Cancel
                  </Button>

                  <Button
                    className="inline-flex items-center gap-2 rounded-md bg-purple-700 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                    type="submit"
                  >
                    Save
                  </Button>
                </div>
              </form>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
