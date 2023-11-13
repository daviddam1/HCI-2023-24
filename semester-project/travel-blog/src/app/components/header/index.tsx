"use client"

import React from 'react';
import Link from 'next/link';
import sitemap from '@/app/enum/sitemap';

export const Header = () => {
    return (
        <section className='pb-11 bg-slate-600' style={{ backgroundImage: 'url(../assets/images/header-wallpaper.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='w-full flex flex-row justify-between pt-7'>
                {
                    <Link href={"/"}>
                        <div className='flex items-center px-20'>
                            <img src="../assets/icons/traveler.png" width={78} height={68} alt="logo" />
                            <span className='font-semibold text-[22px] text-[#F2E863] pt-3'>Traveler</span>
                        </div>
                    </Link>
                }
                <div className='flex items-center justify-end'>
                    {
                        sitemap.map((item) => (
                            <div className="pt-3 pr-3 mr-20" key={item.id} >
                                <Link className="font-regular" href={item.link}>{item.name}</Link>
                               
                            </div>
                        ))
                    }
                    <button className='p-2 mr-20 rounded-lg border-2 mt-3'>Login</button>                 
                </div>
            </div>
            <div className='p-20'>
                <div className='text-[48px] font-bold'>
                    <p>Exploring the World,</p>
                    <p> One Journey at a Time</p>
                </div>
                <div className='pt-12 text-[18px] font-medium'>
                    <p>Discovering Diverse Cultures, Experiencing Unforgettable Adventures,<br />
                        and Sharing the Beauty of Our Planet, One Jouerney at a Time
                    </p>
                </div>
                <div className='pt-20'>
                    <button className='my-10 pl-8 pr-8 py-4 bg-[#F2E863] rounded-lg text-[#081C31] font-semibold'>Getting Started</button>
                </div>
            </div>
        </section>
    );
};
