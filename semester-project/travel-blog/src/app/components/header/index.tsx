"use client"
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import sitemap from '@/app/enum/sitemap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faClose } from '@fortawesome/free-solid-svg-icons';

export const Header = () => {
    const [showMenu, setShowMenu] = React.useState(false)
    return (
        <div className='w-full flex flex-row justify-between pt-7 px-4 md:px-20'>
                <Link href={"/"}>
                    <div className='flex items-center mt-3'>
                        <Image src="/assets/icons/traveler.png" width={78} height={68} alt="logo" />
                        <span className='font-bold text-[22px] text-[#F2E863] pt-3'>Traveler</span>
                    </div>
                </Link>
                <div className='flex items-center justify-end pt-4 max-lg:hidden font-bold'>
                    {
                        sitemap.map((item) => (
                            <div className="pt-3 pr-3 md:pr-6 md:mr-6" key={item.id}>
                                <Link className="font-regular text-white hover:text-[#F2E863]" href={item.link}>{item.name}</Link>
                            </div>
                        ))
                    }
                    <button className='p-2 md:p-3 rounded-lg border-2 mt-3 text-white hover:text-[#F2E863] hover:border-[#F2E863]'>Login</button>
                </div>
                <div className='items-center justify-end pt-8 px-4 hidden max-lg:block'>
                    <FontAwesomeIcon icon={faBars}  rotation={showMenu? 90:180} color={"#F2E863"} onClick={() => (setShowMenu(!showMenu))} size='2x' />
                    <>
                        {showMenu && <div className='absolute top-15 right-2 z-50 bg-[#2A3C4B] rounded-xl p-4 border-2 border-[#F2E863]'>
                            {
                                <>
                                    {sitemap.map((item) => (
                                        <div className="py-1 pr-3 md:pr-6 md:mr-6" key={item.id}>
                                            <Link className="font-regular text-white" href={item.link}>{item.name}</Link>
                                        </div>

                                    ))}
                                    <div className="border-t pt-3 mt-3 flex justify-center text-white" onClick={() => (setShowMenu(!showMenu))}><FontAwesomeIcon icon={faClose}/></div>
                                </>
                            }
                        </div>}
                    </>
                </div>
            </div>
    );
};
