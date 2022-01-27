import React from 'react';
import DontworriesSection from './DontWorriesSection';
import HeroSection from './HeroSection';
import RecentStories from './RecentStoriesSection';
import WhatWeNeedFromU from './WhatWeNeedFromUSectton';
import WhatWillDoSection from './WhatWillDoSection';
import WorkInterestSection from './WorkInterestSection';

const HomePage = () => {
  return (
    <>
      <HeroSection />
      <WhatWillDoSection />
      <WorkInterestSection />
      <DontworriesSection />
      <WhatWeNeedFromU />
      <RecentStories />
    </>
  );
};

export default HomePage;
