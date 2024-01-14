"use client"
import React from 'react';
import { Header } from '@/app/components/header';
import Footer from '@/app/components/footer';
import { useState } from "react";
import community from '@/app/enum/communityData';
import Image from 'next/image';

const Page = () => {
  const [search, setSearch] = useState("");

  const filteredUsers = community.filter((user) =>
    user.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className='bg-[#2A3C4B]'>
      <Header />
      <div className='text-white flex items-center justify-center mt-10 mr-10'>
        <p className='text-xl md:text-3xl p-5 md:p-20'>Welcome to <strong className='text-[#F2E863]'>Traveler</strong> Community!</p>
        <form>
          <input
            className="w-44 md:w-full p-2 rounded-xl text-black outline-none"
            placeholder="Search travelers..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
        </form>
      </div>
      <div className='grid grid-cols-2 md:grid-cols-3 mx-6 md:mx-56 mb-24'>
        {filteredUsers.map((user) => (
          <div key={user.id} className='flex items-center p-2 md:p-5 text-white'>
            <Image className='rounded-2xl border-2 border-[#F2E863] scale-75 md:scale-100' src={user.img} alt='profile image' width='120' height='120' />
            <p className='text-base md:text-xl pl-0 md:pl-2 cursor-pointer hover:text-[#F2E863]'>{user.name}</p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  )
}

export default Page;