"use client"

import React, { useState } from 'react'
import { Header } from '@/app/components/header'
import { fetchPosts } from '@/app/api/jsonplaceholder/jsonplaceholder'
import { useEffect } from 'react'
import Link from 'next/link'

const Community = () => {
    const [fetched, setFetched] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await fetchPosts();
                setFetched(data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, [])
    console.log(fetched)

    return (
        <div>
            <Header />
            {fetched.map((post) => (
                <li key={post.id}>
                    <Link href={`/community/${post.id}`}></Link>
                    <a>{post.title}</a>
                </li>
            ))

            }
        </div>
    )
}

export default Community