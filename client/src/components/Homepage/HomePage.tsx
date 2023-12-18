import React from 'react'
import SearchResultsSection from './SearchResultsSection.tsx'

import TopicsSection from './TopicsSection.tsx'
import TrendingPodcastSection from './TrendingPodcastSection.tsx'
import HeroSection from './HeroSection.tsx'

const HomePage: React.FC = () => {
  return (
    <>
    <SearchResultsSection results={[]} searchMade={false} />
      <TopicsSection />
<HeroSection/>
      <TrendingPodcastSection />
    </>
  )
}

export default HomePage
