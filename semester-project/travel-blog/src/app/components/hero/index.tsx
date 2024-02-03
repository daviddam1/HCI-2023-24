"use client"
import React, { useRef } from 'react'
import heroItems from '@/app/enum/hero'
import Image from 'next/image'
import { Header } from '../header'

const Hero = () => {
  const destinationRef = useRef<HTMLDivElement | null>(null);

  const scrollToDestinations = () => {
    if (destinationRef.current)
      destinationRef.current.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <div className='bg-slate-600' style={{ backgroundImage: 'url(../assets/images/header-wallpaper.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}>
        <Header />
        <div className='flex flex-col justify-center items-center p-4 md:p-20 text-white'>
          <div className='text-[24px] md:text-[48px] font-extrabold mt-56 md:mt-20'>
            <p>Exploring the World,</p>
            <p> One Journey at a Time</p>
          </div>
          <div className='pt-4 md:pt-12 text-[11px] md:text-[18px] font-semibold text-center'>
            <p>Discovering Diverse Cultures, Experiencing Unforgettable Adventures,
              and Sharing the Beauty of Our Planet, One Journey at a Time
            </p>
          </div>
          <div className='pb-60 md:pb-52 pt-12 md:pt-20'>
            <button onClick={scrollToDestinations} className='w-28 md:w-48 my-2 md:my-10 px-2 md:px-8 py-2 md:py-4 bg-[#F2E863] rounded-lg text-[#081C31] text-[11px] md:text-[16px] font-bold hover:scale-110'>Getting Started</button>
          </div>
        </div>
      </div>
      <div className='bg-[#2A3C4B]'>
        <div className='p-4 md:p-20 text-white'>
          <div className='flex flex-col md:flex-row justify-between pb-4 md:pb-20'>
            <div className='md:w-1/2'>
              <div ref={destinationRef} className='flex flex-end bg-[#F2E863] h-1.5 md:h-4 w-full md:w-96 mt-4 md:mt-20 rounded-xl'></div>
              <p className='text-[20px] md:text-[48px] font-semibold pt-4'>
                Our Top Popular<br /><span className='text-[#F2E863]'>Destinations</span>
              </p>
            </div>
            <div className='flex flex-col-reverse md:text-right pt-5'>
              <p className='text-[12px] md:text-[16px] font-semibold pb-3'>
                The following are the selected tourist spots that<br />are most in demand by our explorers
              </p>
            </div>
          </div>
          <div className='flex flex-wrap'>
            {heroItems.map(item => (
              <div key={item.id} className='px-10 md:px-2 w-full md:w-1/2 lg:w-1/3'>
                <div className='flex py-2'>
                  <Image className="rounded-xl w-full" alt={item.name} height={328} width={328} src={item.img} />
                </div>
                <div>
                  <p className='font-bold mt-3 text-[16px] md:text-[18px] text-[#F2E863]'>{item.name}</p>
                  <div className='py-2'>
                    <div className='flex items-center justify-start'>
                      <p className='font-medium text-[12px] md:text-[14px]'>{item.location}</p>
                      <Image width={50} height={20} src={item.loc_img} alt={item.location} className='scale-75'/>
                    </div>
                    <p className='pt-4 md:pt-8 pb-12 md:pb-0 text-xs md:text-base font-medium'>{item.body}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='flex flex-row-reverse'>
            <div className='flex flex-end bg-[#F2E863] h-1.5 md:h-4 w-full md:w-96 mt-4 md:mt-20 rounded-xl'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;
