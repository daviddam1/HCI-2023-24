"use client"
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

interface Destination {
    _id: string,
    img: string,
    location: string,
    info: string
}

interface CardProps {
    destinations: Destination[]
    onDelete: (_id: string) => void
}

const Card: React.FC<CardProps> = ({ destinations, onDelete }) => {
    const handleDelete = (_id: string) => {
        onDelete(_id)
    }
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-3 md:gap-6 mx-10">
            {destinations.map((destination) => (
                <div key={destination._id} className="rounded-xl overflow-hidden shadow-md bg-[#2A3C4B] mb-3">
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
                        <div className="flex justify-between">
                            <Link href={`destinations/${destination._id}`}>
                                <button className="w-24 md:w-28 mt-3 md:mt-4 px-2 py-1 md:px-4 md:py-2 bg-[#F2E863] rounded-lg font-bold text-[#081C31] text-[12px] md:text-[16px] hover:scale-110">
                                    More info
                                </button>
                            </Link>
                            <button className="flex items-end" onClick={() => handleDelete(destination._id)}><FontAwesomeIcon icon={faTrash} /></button>
                        </div>

                    </div>
                </div>
            ))}
        </div>
    );
};

export default Card;
