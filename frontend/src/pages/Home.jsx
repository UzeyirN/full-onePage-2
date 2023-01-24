import React from 'react'
import BestSeller from '../components/Home/BestSeller/BestSeller'
import HeroSection from '../components/Home/HeroSection/HeroSection'
import Sale from '../components/Home/Sale/Sale'
import Trending from '../components/Home/Trending/Trending'
import LatestNews from '../components/Home/LatestNews/LatestNews'

const Home = () => {
  return (
    <>
      <HeroSection />
      <Trending />
      <Sale />
      <BestSeller />
      <LatestNews />
    </>
  )
}

export default Home