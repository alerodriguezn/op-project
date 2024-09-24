"use client";

import { useState } from "react";
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { createPlaylist } from "@/actions/create-playlist";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function NewPlaylistModal() {

  const [isOpen, setIsOpen] = useState(false);

  const router = useRouter();

  const { data: session } = useSession();

  if (!session?.user) {
    router.push("/");
  }

  function open() {
    setIsOpen(true);
  }

  function close() {
    setIsOpen(false);
  }

  const onSubmit = async (formData: FormData) => {
    const name = formData.get("name") as string;

    try {
      await createPlaylist(name, session!.user.id);

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
        New Playlist
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
                Create
              </DialogTitle>
              <p className="mt-2 text-sm/6 text-white/50">
                Create a new playlist
              </p>

              <form action={onSubmit}>
                <div className="mt-4">
                  <label
                    htmlFor="name"
                    className="block text-sm/6 text-white/50"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
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
