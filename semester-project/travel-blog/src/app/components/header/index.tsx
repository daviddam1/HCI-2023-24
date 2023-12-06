"use client"
import React from 'react';
import Link from 'next/link';
import sitemap from '@/app/enum/sitemap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
    const [showMenu, setShowMenu] = React.useState(false)
    return (
        <section className='pb-11 bg-slate-600' style={{ backgroundImage: 'url(../assets/images/header-wallpaper.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <div className='w-full flex flex-row justify-between pt-7 px-4 md:px-20'>
                <Link href={"/"}>
                    <div className='flex items-center'>
                        <img src="../assets/icons/traveler.png" width={78} height={68} alt="logo" />
                        <span className='font-semibold text-[22px] text-[#F2E863] pt-3'>Traveler</span>
                    </div>
                </Link>
                <div className='flex items-center justify-end pt-4 max-lg:hidden'>
                    {
                        sitemap.map((item) => (
                            <div className="pt-3 pr-3 md:pr-6 md:mr-6" key={item.id}>
                                <Link className="font-regular" href={item.link}>{item.name}</Link>
                            </div>
                        ))
                    }
                    <button className='p-2 md:p-3 rounded-lg border-2 mt-3 md:mt-0'>Login</button>
                </div>
                <div className='items-center justify-end pt-6 px-4 hidden max-lg:block '>
                    <FontAwesomeIcon icon={faBars}  rotation={showMenu? 90:180} color={"#F2E863"} onClick={() => (setShowMenu(!showMenu))} size='2x' />
                    <>
                        {showMenu && <div className='absolute top-15 right-2 z-50 bg-[#081C31] rounded-xl p-4'>
                            {
                                <>
                                    {sitemap.map((item) => (
                                        <div className="py-1 pr-3 md:pr-6 md:mr-6" key={item.id}>
                                            <Link className="font-regular" href={item.link}>{item.name}</Link>
                                        </div>

                                    ))}
                                    <div className="border-t pt-3 mt-3 flex justify-center" onClick={() => (setShowMenu(!showMenu))}><FontAwesomeIcon icon={faClose}/></div>
                                </>
                            }
                        </div>}
                    </>
                </div>
            </div>
            <div className='p-4 md:p-20'>
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
                    <button className='my-4 md:my-10 pl-4 md:pl-8 pr-4 md:pr-8 py-2 md:py-4 bg-[#F2E863] rounded-lg text-[#081C31] font-semibold'>Getting Started</button>
                </div>
            </div>
        </section>
    );
};
