import React from 'react';
import DontworriesSection from './DontWorriesSection';
import HeroSection from './HeroSection';
import WhatWillDoSection from './WhatWillDoSection';
import WorkInterestSection from './WorkInterestSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WhatWillDoSection />
      <WorkInterestSection />
      <DontworriesSection />
    </>
  );
};

export default HomePage;
