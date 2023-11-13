import React from 'react'

import { Header } from './components/header'
import Hero from './components/hero'
import Feed from './components/feed'
import Footer from './components/footer'


const page = () => {
  return (
    <section>
      <Header />
      <Hero />
      <Feed />
      <Footer />
    </section>
  )
}

export default page