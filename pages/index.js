import React,{useEffect} from 'react'
import Banner from '../components/home/Banner'
import BootCarousel from './../components/home/BootCarousel'
import Categories from './../components/home/Categories'
import NewIn from './../components/home/NewIn'
import { dummies } from '../data'



export const getStaticProps = async ()=>{
  const res = await fetch("https://shivoriadmin.vercel.app/api/designs")
  const data = await res.json()
  if (!data) {
      return {
        notFound: true,
      }
    }
  const banners = data.data.filter((design)=>design.category==="banners")
  const slides = data.data.filter((design)=>design.category==="slides")
  const newIns = data.data.filter((design)=>design.category==="newIns")
    return {
      props: {banners,slides,newIns},
      revalidate:1
      // will be passed to the page component as props
    }
}

const Home = ({banners,slides,newIns}) => {

  
  return (
    <div>
      <BootCarousel slides={slides}></BootCarousel>
      {/* <Categories></Categories> */}
      <NewIn newIns={newIns}></NewIn>
      <Banner banners={banners}></Banner>
    </div>
  )
}

export default Home
