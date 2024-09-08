import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
  return (
    <div className="">
      <div className="flex justify-center">
        <div className="w-[45%] p-12 flex flex-col justify-center text-left">
          <h2 className="font-bold text-3xl">Enjoy your favorite movies and music.</h2>
          <p>Access a vast library of streaming content with our app.</p>
          <Link href={"/"} className="bg-indigo-700 rounded-md p-2 hover:bg-indigo-500 w-1/4 text-center font-bold mt-2">Get Start</Link>
        </div>
        <div className="w-[55%] rounded p-12 ">
          <Image
            src="/imgs/main-hero.jpg"
            alt="Hero Image"
            className="w-full h-full object-cover rounded-lg shadow-md"
            width={6000}
            height={4000}
            priority
          />
        </div>
      </div>
    </div>
  );
}