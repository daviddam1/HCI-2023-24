"use client"
import Link from 'next/link';
import destinations from '@/app/enum/destinationsData';
import Image from 'next/image';
import { Header } from '@/app/components/header';
import Footer from '@/app/components/footer';

export default function DestinationPost({ params }: { params: { postId: string } }) {
  const { postId } = params;

  const destination = destinations.find((dest) => String(dest.id) === postId);

  if (!destination) {
    console.log(destination);
    return (
      <main className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-10 bg-[#2A3C4B]">
        <h1 className="text-3xl font-bold p-10">Destination not found</h1>
        <Link href="/pages/destinations">
          <span className="text-purple-500 cursor-pointer">&larr; Back to Destinations</span>
        </Link>
      </main>
    );
  }

  return (
    <div className="flex flex-col items-center bg-[#2A3C4B] text-white">
      <Header />
      <h1 className="text-3xl font-bold pt-10 capitalize text-[#F2E863]">
        Sights in {destination.location}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8 px-4 sm:px-10 lg:px-20 py-4 md:py-10 ">
        {destination.topLocations.map((topLocation, index) => (
          <div className='py-4 rounded-xl overflow-hidden shadow-md bg-[#2A3C4B]' key={index}>
            <h2 className="text-xl font-bold my-3 text-[#F2E863]">{topLocation.name}</h2>
            <div className="relative w-full h-60 sm:h-80">
              <Image
                layout="fill"
                objectFit="cover"
                src={topLocation.img}
                alt={topLocation.name}
                className="rounded-xl"
              />
            </div>
            <p className="mt-2"><strong className='text-[#F2E863]'>Location:</strong> {topLocation.location}</p>
            <p className='mt-4 font-regular'><strong className='text-[#F2E863]'>Info: </strong>{topLocation.info}</p>
          </div>
        ))}
      </div>
      <Link href="/pages/destinations">
        <button className="text-[#081C31] cursor-pointer mt-8 bg-[#F2E863] my-6 p-2 rounded-xl hover:scale-110">&larr; Back to Destinations</button>
      </Link>
      <Footer />
    </div>
  );
}
