import React, { useEffect } from 'react';
import HeroSection from '../components/home/HeroSection';
import FeaturedCollections from '../components/home/FeaturedCollections';
import BestsellersGrid from '../components/home/BestsellersGrid';
import PromotionalBanner from '../components/home/PromotionalBanner';
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = 'CHRONOS | Luxury Timepieces';
  }, []);
  return <>
      <HeroSection />
      <FeaturedCollections />
      <BestsellersGrid />
      <PromotionalBanner />
    </>;
};
export default Home;