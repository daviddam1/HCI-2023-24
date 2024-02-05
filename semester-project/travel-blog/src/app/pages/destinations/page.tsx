"use client"
import Link from "next/link";
import destinations from "@/app/enum/destinationsData";
import { Header } from "@/app/components/header";
import Image from "next/image";
import { useState } from "react";
import Footer from "@/app/components/footer";

export default function Destinations() {
  const [search, setSearch] = useState("");

  const filteredDestinations = destinations.filter((destination) =>
    destination.location.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="flex flex-col items-center bg-[#2A3C4B] text-white">
      <Header />
      <div className="flex flex-col pt-4 md:p-12">
        <form>
          <input
            className="w-64 md:w-1/2 flex items-center p-2 rounded-xl mx-auto text-black mt-10 mb-12 md:mb-16 lg:mb-20 outline-none"
            placeholder="Search (e.g. Rome)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        </form>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3 md:gap-6 mx-10">
          {filteredDestinations.map((destination) => (
            <div key={destination.id} className="rounded-xl overflow-hidden shadow-md bg-[#2A3C4B] mb-3">
              <div className="relative h-40 sm:h-52">
                <Image
                  className="object-cover rounded-t-xl"
                  layout="fill"
                  src={destination.img}
                  alt={destination.location}
                />
              </div>
              <div className="p-4">
                <p className="font-bold md:text-xl text-lg mt-2 mb-1 text-[#F2E863]">{destination.location}</p>
                <p className="text-xs font-semibold md:text-base">{destination.info}</p>
                <Link href={`destinations/${destination.id}`}>
                  <button className="w-24 md:w-28 mt-3 md:mt-4 px-2 py-1 md:px-4 md:py-2 bg-[#F2E863] rounded-lg font-bold text-[#081C31] text-[12px] md:text-[16px] hover:scale-110">
                    More info
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  );
}
