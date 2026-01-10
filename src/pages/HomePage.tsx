import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Hero from '@/components/hero/Hero'
import Preloader from '@/components/ui/Preloader'
import ApplySection from '@/components/ui/applySection'
import Footer from '@/components/footer/Footer'

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)

  return (
    <main className='bg-black overflow-x-hidden'>
      <AnimatePresence mode='wait'>
        {isLoading && <Preloader key='preloader' onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      <Hero />
      <ApplySection />
      <Footer />
    </main>
  )
}
