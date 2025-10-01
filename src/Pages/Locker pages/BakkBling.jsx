import React, {useContext} from 'react'
import {AppContext} from '../../Context/AppContext.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { getRarityClasses } from '../../utils/rarity.js'

const BakkBling = () => {
  const { backblings, playHoverSound, setSelectedBackbling } = useContext(AppContext)
  const navigate = useNavigate()

  return (
    <div className={'w-full min-h-screen bg-gradient-to-b from-[#0E1736] via-[#0B1230] to-[#020617] px-6 py-7'}>
      <div className={'absolute h-full w-full top-25'}>
      <div className={'mb-10 flex items-center justify-between'}>
        <h1 className={'text-4xl font-bold text-white uppercase'}>Backblings</h1>
       
      </div>
      <div className={'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4'}>
        {backblings?.map((b) => (
          <div
            key={b.id}
            className={`rounded-lg border hover:border-gray-300 transition-colors p-3 flex flex-col items-center gap-2 cursor-pointer ${getRarityClasses(b.rarity)}`}
            onMouseEnter={playHoverSound}
            onClick={() => { setSelectedBackbling(b); navigate('/locker#character') }}
          >
            <img src={b.image} alt={b.name} className={'h-40 object-contain drop-shadow-[0_6px_12px_rgba(0,0,0,0.5)]'} />
            <div className={'text-center'}>
              <p className={'text-white font-semibold'}>{b.name}</p>
              <p className={'text-white/60 text-sm'}>{b.rarity}</p>
            </div>
          </div>
        )) || (
          <p className={'text-white/70'}>No backblings found.</p>
        )}
      </div>
    </div>
    </div>
  )
}

export default BakkBling

