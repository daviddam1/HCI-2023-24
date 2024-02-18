"use client"

import React, { useState } from "react";
import destinations from "@/app/enum/destinationsData";
import { Header } from "@/app/components/header";
import Footer from "@/app/components/footer";
import Card from "./components/card";

interface Destination {
  _id: string,
  location: string;
  img: string;
  info: string;
  topLocations: {
    id: number;
    name: string;
    img: string;
    location: string;
    info: string;
  }[];
}

export default function Destinations() {
  const [search, setSearch] = useState<string>("");
  const [newDestination, setNewDestination] = useState<Destination>({
    _id: "",
    location: "",
    img: "",
    info: "",
    topLocations: []
  });

  const [data, setData] = useState<Destination[]>([]);

  const filteredDestinations = data.filter((destination) =>
    destination.location.toLowerCase().includes(search.toLowerCase())
  );

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setNewDestination({ ...newDestination, [name]: value });
  };

  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/posts')
      if (!response.ok) {
        console.log("Failed to fetch data")
      }

      const data = await response.json()
      console.log(data)
      setData(data.posts)

    } catch (error) {
      console.log("Cannot fetch data", error)
    }
  }

  React.useEffect(() => { fetchData() }, [])
  const addDestination = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (newDestination.location && newDestination.img && newDestination.info) {
      try {
        const updatedDestinations = [...data, newDestination];
        setData(updatedDestinations);
        setNewDestination({ _id: '', location: '', img: '', info: '', topLocations: [] })

        const response = await fetch('http://localhost:3000/api/posts', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(newDestination)
        });

        if (!response.ok) {
          throw new Error('Failed to add destination')
        }

        fetchData()
      } catch (error) {
        console.error('Error adding destination:', error)
      }
    }
  };

  const onDelete = async (_id: string) => {
    try {
      const response = await fetch(`http://localhost:3000/api/posts/?id=${_id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete destination")
      }

      const updatedDestinations = data.filter(
        (destination) => destination._id !== _id
      )

      setData(updatedDestinations);
    } catch (error) {
      console.error("Error deleting destination:", error)
    }
  }

  return (
    <div className="flex flex-col items-center bg-[#2A3C4B] text-white">
      <Header />
      <div className="flex flex-col pt-10 md:p-12 md:pt-20">
        <form>
          <input
            className="w-64 md:w-1/2 flex items-center p-2 rounded-xl mx-auto text-black mb-12 md:mb-16 lg:mb-20 outline-none"
            placeholder="Search (e.g. Rome)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </form>

        <Card destinations={filteredDestinations} onDelete={onDelete} />

        <div className="flex flex-col rounded-xl overflow-hidden shadow-md py-5 mt-10 mx-10 sm:mx-32 md:mx-40 lg:mx-56">
          <input className="text-black rounded-lg m-2 p-2"
            type="text"
            placeholder="Location"
            value={newDestination.location}
            onChange={handleInputChange}
            name="location"
          />
          <input className="text-black rounded-lg m-2 p-2"
            type="text"
            placeholder="Image URL"
            value={newDestination.img}
            onChange={handleInputChange}
            name="img"
          />
          <input className="text-black rounded-lg m-2 p-2"
            type="text"
            placeholder="Info"
            value={newDestination.info}
            onChange={handleInputChange}
            name="info"
          />
          <button onClick={addDestination} className="self-center w-32 md:w-48 mt-3 md:mt-4 px-2 py-1 md:px-4 md:py-2 bg-[#F2E863] rounded-lg font-bold text-[#081C31] text-[12px] md:text-[16px] hover:scale-110">
            Add destination
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
