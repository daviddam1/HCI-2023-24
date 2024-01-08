import Link from 'next/link';
import destinations from '@/app/enum/destinationsData';
import Image from 'next/image';

export default function DestinationPost({ params }) {
  const { postId } = params;

  const destination = destinations.find((dest) => String(dest.id) === postId);

  if (!destination) {
    console.log(destination)
    return (
      <main className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-10">
        <h1 className="text-3xl font-bold p-10">Destination not found</h1>
        <Link href="/pages/destinations">
          <span className="text-purple-500 cursor-pointer">&larr; Back to Destinations</span>
        </Link>
      </main>
    );
  }

  return (
    <div className="flex flex-col items-center min-h-screen max-w-5xl m-auto p-10">
      <h1 className="text-3xl font-bold p-10 capitalize">
        Sights in {destination.location}
      </h1>
      <div className="flex flex-col gap-8">
        {destination.topLocations.map((topLocation, index) => (
          <div key={index} className="border p-4">
            <h2 className="text-xl font-bold">{topLocation.name}</h2>
            <Image width={328} height={328} src={topLocation.img} alt={topLocation.name} className="my-2" />
            <p><strong>Location:</strong> {topLocation.location}</p>
            <p>{topLocation.info}</p>
          </div>
        ))}
      </div>
      <Link href="/pages/destinations">
        <button className="text-yellow cursor-pointer mt-8 bg-slate-500">&larr; Back to Destinations</button>
      </Link>
    </div>
  );
}
