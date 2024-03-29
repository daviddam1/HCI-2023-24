import React from 'react'

import Hero from './components/hero'
import { Feed } from './components/feed'
import Footer from './components/footer'


const page = () => {
  return (
    <section>
      <Hero />
      <Feed />
      <Footer />
    </section>
  )
}

export default page