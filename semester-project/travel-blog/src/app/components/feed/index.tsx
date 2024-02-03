"use-client"
import React from 'react'
import userExperience from '@/app/enum/userExperience'
import Image from 'next/image'

export const Feed = () => {

  return (
    <section className='bg-[#F2E863]'>
      <div className='p-4 md:p-20'>
        <div className='flex flex-col md:flex-row-reverse justify-between pb-4 md:pb-20'>
          <div className=''>
            <div className='bg-[#2A3C4B] h-1.5 md:h-4 w-full md:w-96 mb-4 rounded-xl'></div>
            <p className='text-[20px] md:text-[48px] font-semibold text-[#2A3C4B] pb-5 md:pb-0'>
              The <span className='text-white'>Experience<br /></span>by Our Explorers
            </p>
          </div>
          <div className='flex flex-col-reverse md:w-1/2'>
            <p className='text-[12px] md:text-[16px] font-semibold pb-3 text-[#2A3C4B]'>
              Some interesting impressions from people that<br />traveled and explored with us
            </p>
          </div>
        </div>
        {userExperience.map(item => (
          <div className={item.id === 2 ? "flex flex-row-reverse text-[#2A3C4B] pb-4 md:pb-16" : "flex flex-reverse text-[#2A3C4B] pb-4 md:pb-16"} key={item.id}>
            <div>
              <Image className={item.id === 2 ? "rounded-xl scale-75 md:scale-100" : "rounded-xl md:mr-8 scale-75 md:scale-100"} width={250} height={100} src={item.img} alt={item.name} />
            </div>
            <div className={item.id === 2 ? 'w-full md:w-1/4 md:mr-8 text-right' : 'w-full md:w-1/4'}>
              <p className='font-bold text-[12px] md:text-[20px] pt-5 md:pt-1 pb-1 md:pb-5'>{item.name}</p>
              <p className='font-medium text-[9px] md:text-[20px]'>{item.body}</p>
            </div>
          </div>
        ))}
        <div className='flex'>
          <div className='flex flex-end bg-[#2A3C4B] h-1.5 md:h-4 w-full md:w-96 mt-4 md:mt-20 rounded-xl'></div>
        </div>
      </div>
    </section>
  )
}

