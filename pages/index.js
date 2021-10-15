import React from 'react'
import BootCarousel from './../components/home/BootCarousel'
import Categories from './../components/home/Categories'
import NewIn from './../components/home/NewIn'

const Home = () => {
  return (
    <div>
      <BootCarousel></BootCarousel>
      <Categories></Categories>
      <NewIn></NewIn>
    </div>
  )
}

export default Home
