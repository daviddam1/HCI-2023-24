"use client"
import Link from 'next/link';
import Image from 'next/image';
import { Header } from '@/app/components/header';
import Footer from '@/app/components/footer';
import { useEffect, useState } from 'react';

interface TopLocation {
  id: number;
  name: string;
  img: string;
  location: string;
  info: string;
}

interface Destination {
  _id: string;
  location: string;
  img: string;
  info: string;
  topLocations: TopLocation[];
}

export default function DestinationPost() {
  const [destination, setDestination] = useState<Destination | null>(null);

  useEffect(() => {
    const postId = window.location.pathname.split('/').pop()
    const fetchDestination = async () => {
      try {
        if (!postId) {
          throw new Error('Post ID is missing')
        }

        const response = await fetch(`http://localhost:3000/api/posts/${postId}`);
        if (!response.ok) {
          throw new Error('Failed to fetch destination');
        }
        const data = await response.json();
        setDestination(data.post);
        console.log(data.post)
      } catch (error) {
        console.error('Error fetching destination:', error);
      }
    };

    fetchDestination()
  }, [])

  if (!destination) {
    return (
      <div className="flex flex-col items-center justify-center p-20 py-72 md:p-80 bg-[#2A3C4B]">
        <h1 className="text-3xl text-white font-bold p-10">Destination not found!</h1>
        <Link href="/pages/destinations">
          <button className="bg-[#F2E863] font-medium cursor-pointer rounded-xl p-2 hover:scale-110">&larr; Back to Destinations</button>
        </Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center bg-[#2A3C4B] text-white">
      <Header />
      <h1 className="text-xl md:text-3xl font-bold pt-10 md:pt-20 capitalize text-white">
        Sights in {destination.location}
      </h1>
      {destination.topLocations && destination.topLocations.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-4 md:gap-6 mx-10 md:px-12 py-4 md:py-10 ">
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
              <p className="mt-2 text-xs md:text-base font-semibold pl-2"><strong className='text-[#F2E863] font-bold'>Location:</strong> {topLocation.location}</p>
              <p className='mt-4 text-xs md:text-base font-semibold pl-2'><strong className='text-[#F2E863] font-bold'>Info: </strong>{topLocation.info}</p>
            </div>
          ))}
        </div>
      )}
      {(!destination.topLocations || destination.topLocations.length === 0) && (
        <div className="flex items-center justify-center py-20">
          <p className="text-white text-[24px] font-normal">No top locations found</p>
        </div>
      )}

      <Link href="/pages/destinations">
        <button className="text-[#081C31] text-[12px] md:text-[16px] font-bold cursor-pointer mt-8 bg-[#F2E863] my-6 p-2 w-44 md:w-56 rounded-xl hover:scale-110">&larr; Back to Destinations</button>
      </Link>
      <Footer />
    </div>
  );
}
