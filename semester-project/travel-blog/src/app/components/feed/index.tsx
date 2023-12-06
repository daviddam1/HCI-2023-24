"use-client"
import React from 'react'
import userExperience from '@/app/enum/userExperience'

export const Feed = () => {

  return (
    <section className='bg-[#F2E863]'>
      <div className='p-4 md:p-20'>
        <div className='flex flex-col md:flex-row-reverse justify-between pb-4 md:pb-20'>
          <div className='md:w-1/2'>
            <div className='bg-[#2A3C4B] h-4 md:h-auto w-full md:w-96 mb-4 rounded-xl'></div>
            <p className='text-[24px] md:text-[48px] font-semibold max-sm:text-[22px] text-[#2A3C4B]'>
              The <span className='text-white'>Experience<br /></span>by Our Explorers
            </p>
          </div>
          <div className='flex flex-col-reverse md:w-1/2'>
            <p className='font-semibold pb-3 text-[#2A3C4B]'>
              Some interesting impressions from people that<br />traveled and explored with us
            </p>
          </div>
        </div>
        {userExperience.map(item => (
          <div className={item.id === 2 ? "flex flex-row-reverse md:text-[#2A3C4B] pb-4 md:pb-8" : "flex flex-reverse md:text-[#2A3C4B] pb-4 md:pb-8"} key={item.id}>
            <div>
              <img className={item.id === 2 ? "rounded-xl" : "rounded-xl md:mr-8"} width={300} height={120} src={item.img} alt={item.name} />
            </div>
            <div className={item.id === 2 ? 'w-full md:w-1/4 md:mr-8 text-right' : 'w-full md:w-1/4'}>
              <p className='font-semibold text-[20px] md:text-[20px] mx-3 pb-2 md:pb-5'>{item.name}</p>
              <p className='max-sm:mx-3 text-[20px]'>{item.body}</p>
            </div>
          </div>
        ))}
        <div className='flex'>
          <div className='flex flex-end bg-[#2A3C4B] h-4 md:h-auto w-full md:w-96 mt-4 md:mt-20 rounded-xl'></div>
        </div>
      </div>
    </section>
  )
}

