import { Button } from '@/components/ui/button'
import React, { Suspense } from 'react'
import Hero from '@/components/home/Hero'
import FeaturedProducts from '@/components/home/FeaturedProducts'
import LoadingContainer from '@/components/global/LoadingContainer'
function HomePage() {

  return (
    <>
      <Hero/>
      <Suspense fallback={<LoadingContainer/>}>
      <FeaturedProducts/>
      </Suspense>
    </>
  )
}

export default HomePage