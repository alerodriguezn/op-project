"use client";

import { IoSearchOutline } from "react-icons/io5";
import Link from "next/link";
import { RiMovieFill } from "react-icons/ri";
import { useUIStore } from "@/store/uiStore";

export const TopMenu = () => {
  const openSideMenu = useUIStore((state) => state.openSideMenu);

  return (
    <nav className="flex px-5 justify-between items-center w-full">
      <div>
        <Link href={"/"}>
          <span className={`antialiased font-bold flex items-center gap-1 `}>
            Streamify
            <RiMovieFill color="white" />
          </span>
        </Link>
      </div>
      <div className="hidden sm:block">
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-zinc-700"
          href={"/movies"}
        >
          Movies
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-zinc-700"
          href={"/music"}
        >
          Music
        </Link>
        <Link
          className="m-2 p-2 rounded-md transition-all hover:bg-zinc-700"
          href={"/library"}
        >
          Library
        </Link>
      </div>

      <div className="flex items-center">
        <Link href="/search" className="mx-2">
          <IoSearchOutline className="w-5 h-5" />
        </Link>

        <button
          className="m-2 p-2 rounded-md transition-all hover:bg-zinc-700 "
          onClick={() => openSideMenu()}
        >
          Menu
        </button>
      </div>
    </nav>
  );
};
