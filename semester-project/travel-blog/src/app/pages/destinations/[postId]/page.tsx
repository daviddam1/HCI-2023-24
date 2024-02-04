"use client"
import Link from 'next/link';
import destinations from '@/app/enum/destinationsData';
import Image from 'next/image';
import { Header } from '@/app/components/header';
import Footer from '@/app/components/footer';

export default function DestinationPost({ params }: { params: { postId: string } }) {
  const { postId } = params;
  console.log(postId)

  const destination = destinations.find((dest) => String(dest.id) === postId);

  if (!destination) {
    console.log(destination);
    return (
      <div className="flex flex-col items-center justify-center p-20 py-72 md:p-80 bg-[#2A3C4B]">
        <h1 className="text-3xl text-white font-bold p-10">Destination not found!</h1>
        <Link href="/pages/destinations">
          <button className="bg-[#F2E863]  font-medium cursor-pointer rounded-xl p-2 hover:scale-110">&larr; Back to Destionations</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center bg-[#2A3C4B] text-white">
      <Header />
      <h1 className="text-xl md:text-3xl font-bold pt-10 capitalize text-white">
        Sights in {destination.location}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8 mx-10 py-4 md:py-10 ">
        {destination.topLocations.map((topLocation, index) => (
          <div className='py-4 rounded-xl overflow-hidden shadow-md bg-[#2A3C4B]' key={index}>
            <h2 className="text-base md:text-lg font-bold my-3 pl-2 text-[#F2E863]">{topLocation.name}</h2>
            <div className="relative w-full h-60 sm:h-80">
              <Image
                layout="fill"
                objectFit="cover"
                src={topLocation.img}
                alt={topLocation.name}
                className="rounded-xl"
              />
            </div>
            <p className="mt-2 text-xs md:text-base font-medium pl-2"><strong className='text-[#F2E863] font-bold'>Location:</strong> {topLocation.location}</p>
            <p className='mt-4 text-xs md:text-base font-medium pl-2'><strong className='text-[#F2E863] font-bold'>Info: </strong>{topLocation.info}</p>
          </div>
        ))}
      </div>
      <Link href="/pages/destinations">
        <button className="text-[#081C31] text-[12px] md:text-[16px] font-semibold cursor-pointer mt-8 bg-[#F2E863] my-6 p-2 w-44 md:w-56 rounded-xl hover:scale-110">&larr; Back to Destinations</button>
      </Link>
      <Footer />
    </div>
  );
}
