import Image from "next/image"
import Link from "next/link"

// interface Props {
//     name: string;
//     // img: string;
// }

export const AlbumCard = () => {
  return (
    <div className='w-[300px] flex flex-col justify-center items-center bg-zinc-800 p-4 rounded-md gap-y-2'>
        <Image src={"/imgs/album-example.jpeg"} className="w-[200px] h-[200px]" alt="Album" width={300} height={300}/>
        <h3 className="text-lg font-bold text-center">The Days / Nights</h3>
        <Link href="" className="bg-indigo-600 p-1 hover:bg-green-800 font-bold rounded-md w-full text-center">Listen Now</Link>
    </div>
  )
}
