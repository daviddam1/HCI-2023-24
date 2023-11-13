import React from 'react'
import Link from 'next/link'

export const Header = () => {
    return (
        <section className='flex justify-between bg-sky-600'>
            <div className='flex items-center pl-16 text-white'>
                <img className="pr-2 text-white" alt="logo"></img>
                Travel Blog
            </div>
            <div className='flex justify-end pt-4 pb-4 pr-16'>
                <Link className='pr-8 text-white' href="/">Home Page</Link>
                <Link className='pr-8 text-white' href="/pages/destinations">Destinations</Link>
                <Link className='pr-8 text-white' href="/pages/travelStoriesExperiences">Travel Stories&Experiences</Link>
                <Link className='pr-8 text-white' href="/pages/community">Community</Link>
                <Link className='pr-8 text-white' href="/pages/about">About Us</Link>
                <Link className='pr-8 text-white' href="/pages/login">Log In</Link>
            </div>
        </section>
    )
}