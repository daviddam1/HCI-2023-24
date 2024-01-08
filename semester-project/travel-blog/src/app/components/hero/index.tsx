"use client"
import React, { useRef } from 'react'
import heroItems from '@/app/enum/hero'
import Image from 'next/image'
import { Header } from '../header'

const Hero = () => {
  const destinationRef = useRef(null);

  const scrollToDestinations = () => {
    destinationRef.current.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <>
      <div className='pb-11 bg-slate-600' style={{ backgroundImage: 'url(../assets/images/header-wallpaper.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <Header />
        <div className='p-4 md:p-20 text-white'>
          <div className='text-[32px] md:text-[48px] font-bold'>
            <p>Exploring the World,</p>
            <p> One Journey at a Time</p>
          </div>
          <div className='pt-4 md:pt-12 text-[14px] md:text-[18px] font-medium'>
            <p>Discovering Diverse Cultures, Experiencing Unforgettable Adventures,<br />
              and Sharing the Beauty of Our Planet, One Journey at a Time
            </p>
          </div>
          <div className='pt-8 md:pt-20'>
            <button onClick={scrollToDestinations} className='my-4 md:my-10 pl-4 md:pl-8 pr-4 md:pr-8 py-2 md:py-4 bg-[#F2E863] rounded-lg text-[#081C31] font-semibold'>Getting Started</button>
          </div>
        </div>
      </div>
      <div ref={destinationRef} className='bg-[#2A3C4B]'>
        <div className='p-4 md:p-20 text-white'>
          <div className='flex flex-col md:flex-row justify-between pb-4 md:pb-20'>
            <div className='md:w-1/2'>
              <div className='flex flex-end bg-[#F2E863] h-4 w-full md:w-96 mt-4 md:mt-20 rounded-xl'></div>
              <p className='text-[24px] md:text-[48px] font-semibold max-sm:text-[22px]'>
                Our Top Popular<br /><span className='text-[#F2E863]'>Destinations</span>
              </p>
            </div>
            <div className='flex flex-col-reverse md:w-1/2'>
              <p className='font-semibold pb-3'>
                The following are the selected tourist spots that<br />are most in demand by our explorers
              </p>
            </div>
          </div>
          <div className='flex flex-wrap'>
            {heroItems.map(item => (
              <div key={item.id} className='px-2 w-full md:w-1/2 lg:w-1/3'>
                <div className='flex py-2'>
                  <Image className="rounded-xl w-full" alt={item.name} height={328} width={328} src={item.img} />
                </div>
                <div>
                  <p className='font-bold mt-3 text-[18px]'>{item.name}</p>
                  <div className='py-2'>
                    <div className='flex items-center'>
                      <Image width={55} height={20} src={item.loc_img} alt={item.location} />
                      <p className='font-regular text-[14px]'>{item.location}</p>
                    </div>
                    <p className='pt-4 md:pt-8 font-medium'>{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='flex flex-row-reverse'>
            <div className='flex flex-end bg-[#F2E863] h-4 w-full md:w-96 mt-4 md:mt-20 rounded-xl'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
