"use client";


import { signIn,signOut  } from "next-auth/react";
import { useUIStore } from "@/store/uiStore";
import clsx from "clsx";
import { useSession } from "next-auth/react";
import Link from "next/link";
import {
  IoCloseOutline,
  IoLibrary,
  // IoLogIn,
  IoLogInOutline,
  IoLogOutOutline,
  IoMusicalNotes,
  IoVideocamSharp,
} from "react-icons/io5";


export const Sidebar = () => {
  const isSideMenuOpen = useUIStore((state) => state.isSideMenuOpen);
  const closeMenu = useUIStore((state) => state.closeSideMenu);

  const { data: session } = useSession();

  const isAuthenticated = !!session?.user;

  // const isAdmin = session?.user.role === "admin";

  const handleLogin = async () => {
    signIn();
    closeMenu();
  }


  return (
    <div >
      {isSideMenuOpen && (
        <div className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30 " />
      )}

      {isSideMenuOpen && (
        <div
          className="fade-in fixed top-0 left-0 w-screen h-screen z-10 backdrop-filter backdrop-blur-sm"
          onClick={() => closeMenu()}
        />
      )}

      <nav
        className={clsx(
          "fixed p-5 right-0 top-0 w-[500px] h-screen bg-[#0a0a0a] z-20 shadow-2xl transform transition-all duration-300",
          {
            "translate-x-0": isSideMenuOpen,
            "translate-x-full": !isSideMenuOpen,
          }
        )}
      >
        <IoCloseOutline
          size={50}
          className="absolute top-5 right-5 cursor-pointer mb-2"
          onClick={() => closeMenu()}
        />

        {isAuthenticated && (
          <>
            <Link
              href={`/movies`}
              onClick={() => closeMenu()}
              className="flex items-center mt-10 p-2 hover:bg-gray-800 rounded transition-all"
            >
              <IoVideocamSharp size={30} />
              <span className="ml-3 text-xl">Movies</span>
            </Link>

            <Link
              href={`/music`}
              onClick={() => closeMenu()}
              className="flex items-center mt-10 p-2 hover:bg-gray-800 rounded transition-all"
            >
              <IoMusicalNotes size={30} />
              <span className="ml-3 text-xl">Music</span>
            </Link>
            <Link
              href={`/library`}
              onClick={() => closeMenu()}
              className="flex items-center mt-10 p-2 hover:bg-gray-800 rounded transition-all"
            >
              <IoLibrary  size={30} />
              <span className="ml-3 text-xl">Library</span>
            </Link>
          </>
        )}

        {isAuthenticated && (
          <button
            onClick={() => signOut()}
            className="flex w-full items-center mt-10 p-2 hover:bg-gray-800 rounded transition-all"
          >
            <IoLogOutOutline size={30} />
            <span className="ml-3 text-xl">Logout</span>
          </button>
        )}

        {!isAuthenticated && (
          <button
    
            onClick={() => handleLogin()}
            className="flex items-center mt-10 p-2 hover:bg-gray-800 rounded transition-all"
          >
            <IoLogInOutline size={30} />
            <span className="ml-3 text-xl">Login</span>
          </button>
        )}

        

        

        {/* {isAdmin && <AdminOptions />} */}
      </nav>
    </div>
  );
};