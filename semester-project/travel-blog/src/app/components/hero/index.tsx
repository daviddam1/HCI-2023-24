import React from 'react'

import heroItems from '@/app/enum/hero'

const Hero = () => {
    return (
        <section className='bg-[#2A3C4B]'>
            <div className='p-20'>
                <div className='flex flex-row justify-between pb-20'>
                    <div>
                        <div className='bg-[#F2E863] h-4 w-96 mb-4'></div>
                        <p className='text-[48px] font-semibold max-sm:text-[22px]'>Our Top Popular<br /><span className='text-[#F2E863]'>Destinations</span></p>
                    </div>
                    <div className='flex flex-col-reverse'>
                        <p className='font-semibold pb-3'>The following are the selected tourist spots that<br />are most in demand by our explorers</p>
                    </div>
                </div>
                <div className='flex'>
                    {heroItems.map(item => (
                        <div key={item.id} className='px-4 w-full'>
                            <div className='flex py-2'>
                                <img className="rounded-xl " alt={item.name} width={420} height={328} src={item.img}></img>
                            </div>
                            <div>
                                <p className='font-bold mt-3 text-[18px]'>{item.name}</p>
                                <div className='py-2  w-full'>
                                    <div className='flex'>
                                        <img width={55} height={21} src={item.loc_img}></img>
                                        <p className='font-regular'>{item.location}</p>
                                    </div>
                                    <p className='pt-8 font-medium'>{item.body}</p>
                                </div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Hero