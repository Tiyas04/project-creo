import { useState } from 'react'
import ApplyCard from './ApplyCard'
import PrizesPerksCard from './PrizesPerksCard'

export default function Cards() {
  const [activeCard, setActiveCard] = useState<'Perks' | 'Regular'>('Regular')

  return (
    <div className='flex w-full overflow-visible mt-20 [@media(max-width:703px)]:mt-10 items-center justify-center mx-5 px-5 mb-5 relative'>
      <div className='flex gap-8 flex-wrap flex-col justify-center relative'>
        <PrizesPerksCard
          heading='PRIZES AND PERKS'
          cardType='Perks'
          isActive={activeCard === 'Perks'}
          onHover={() => setActiveCard('Perks')}
        />
        <ApplyCard
          heading='REGISTRATION'
          info='This nominal registration fee is only collected solely to serious participation and help us cover the logistics costs. '
          price={299}
          cardType='Regular'
          isActive={activeCard === 'Regular'}
          onHover={() => setActiveCard('Regular')}
        />
      </div>
    </div>
  )
}
