import React from 'react'
import Banner from '../components/home/Banner'
import BootCarousel from './../components/home/BootCarousel'
import Categories from './../components/home/Categories'
import NewIn from './../components/home/NewIn'

const Home = () => {
  return (
    <div>
      <BootCarousel></BootCarousel>
      {/* <Categories></Categories> */}
      <NewIn></NewIn>
      <Banner></Banner>
    </div>
  )
}

export default Home
