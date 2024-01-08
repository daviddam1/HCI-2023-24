import Link from "next/link";
import destinations from "@/app/enum/destinationsData";
import { Header } from "@/app/components/header";
import { Button } from "@mui/material";
import Image from "next/image";

export default async function Destinations() {
  return (
    <main className="flex flex-col items-center p-10 bg-[#2A3C4B]">
      <Header />
      <div className="flex flex-col p-10">
        <form>
          <input className="w-1/2 flex items-center p-1 rounded-xl mx-10" placeholder="Search for destination"></input>
        </form>
        {destinations.map((destination) => (
          <div key={destination.id} className="px-10 py-6">
            <div className='flex py-2'>
              <Image className="rounded-xl" height={328} width={400} src={destination.img} alt={destination.location} />
            </div>
            <div>
              
              <p className='font-bold mt-3 text-[18px]'>{destination.location}</p>
            </div>
            <p className='pt-2 md:pt-4 font-medium'>{destination.info}</p>
            <Link href={`destinations/${destination.id}`}>
              <button className='my-2 md:my-5 pl-2 md:pl-4 pr-2 md:pr-4 py-2 md:py-2 bg-[#F2E863] rounded-lg text-[#081C31] font-semibold'>Visit {destination.location}</button>

            </Link>
          </div>
        ))}
      </div>

    </main>
  );
}