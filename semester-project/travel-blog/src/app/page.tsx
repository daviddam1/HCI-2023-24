import React from 'react'

import { Header } from './components/header'
import Hero from './components/hero'
import Feed from './components/feed'


const page = () => {
  return (
    <section>
      <Header />
      <Hero />
      <Feed />
    </section>
  )
}

export default page