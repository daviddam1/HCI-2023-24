import React from 'react'
import Link from 'next/link'

import sitemap from '@/app/enum/sitemap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookSquare } from '@fortawesome/free-brands-svg-icons'
import { faInstagramSquare } from '@fortawesome/free-brands-svg-icons/faInstagramSquare'
import { faSquareXTwitter } from '@fortawesome/free-brands-svg-icons/faSquareXTwitter'
import { faDiscord } from '@fortawesome/free-brands-svg-icons/faDiscord'

const Footer = () => {
    return (
        <section className='bg-[#2A3C4B]'>
            <div className='flex p-20'>
                <div className='w-1/3'>
                    <Link href={"/"}>
                        <div className='flex items-center'>
                            <img src="../assets/icons/traveler.png" width={78} height={68} alt="logo" />
                            <span className='font-semibold text-[24px] text-[#F2E863] pt-3'>Traveler</span>
                        </div>
                    </Link>
                    <p className='pt-10 italic'>
                        "At Traveler, we're your trusted companions in navigating the globe's hidden treasures. With our extensive travel guides and personal insights, we're dedicated to helping you uncover and explore the world's most captivating destinations, from remote corners to vibrant metropolises, revealing the beauty and diversity of our planet."
                    </p>
                </div>
                <div className='w-1/3 flex flex-col items-center text-[14px] pt-3'>
                    <h2 className='pt-4  pb-10 text-[#F2E863] font-semibold text-[18px]'>Spaces</h2>
                    {
                        sitemap.map((item) => (
                            <div className="pt-3" key={item.id} >
                                <Link className="font-medium" href={item.link}>{item.name}</Link>

                            </div>
                        ))
                    }
                </div>
                <div className='w-1/3 flex flex-col items-center text-[14px] pt-3'>
                    <h2 className='pt-4  pb-10 text-[#F2E863] font-semibold text-[18px]'>My Account</h2>
                    <p className='font-medium pt-3 text-left'>Profile</p>
                    <p className='font-medium pt-3 text-left'>Settings</p>
                </div>
            </div>

            <div className='flex justify-center pb-6'>
                <FontAwesomeIcon className='px-10' icon={faFacebookSquare} size='3x' color='#F2E863' />
                <FontAwesomeIcon className='px-10' icon={faInstagramSquare} size='3x' color='#F2E863' />
                <FontAwesomeIcon className='px-10' icon={faSquareXTwitter} size='3x' color='#F2E863' />
                <FontAwesomeIcon className='px-10' icon={faDiscord} size='3x' color='#F2E863' />
            </div>
            <div className='flex justify-center font-thin text-[12px] italic'>
                Copyright @ 2023 FESB. All rights reserved.
            </div>
        </section>)
}

export default Footer