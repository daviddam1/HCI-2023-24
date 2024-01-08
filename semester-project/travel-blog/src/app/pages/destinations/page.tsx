"use client"
import Link from "next/link";
import destinations from "@/app/enum/destinationsData";
import { Header } from "@/app/components/header";
import Image from "next/image";
import { useState } from "react";

export default async function Destinations() {
  const [search, setSearch] = useState("");

  return (
    <main className="flex flex-col items-center p-4 md:p-10 bg-[#2A3C4B]">
      <Header />
      <div className="flex flex-col p-4 md:p-10">
        <form>
          <input
            className="w-full md:w-1/2 flex items-center p-1 rounded-xl mx-auto md:mx-10 text-black my-10"
            placeholder="Search for destination"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        </form>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8">
          {destinations.map((destination) => (
            <div key={destination.id} className="rounded-xl overflow-hidden shadow-md bg-[#2A3C4B]">
              <div className="relative h-40 sm:h-52">
                <Image
                  className="object-cover rounded-t-xl"
                  layout="fill"
                  src={destination.img}
                  alt={destination.location}
                />
              </div>
              <div className="p-4">
                <p className="font-bold text-lg sm:text-xl mt-2 mb-1">{destination.location}</p>
                <p className="text-sm md:text-base">{destination.info}</p>
                <Link href={`destinations/${destination.id}`}>
                  <button className="mt-3 md:mt-4 px-3 py-1 md:px-4 md:py-2 bg-[#F2E863] rounded-lg text-[#081C31]">
                    Visit {destination.location}
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
