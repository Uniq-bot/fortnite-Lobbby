import React from 'react'
import vbucks1000 from '../assets/vbucks/vbucks1000.png'
import vbucks500 from '../assets/vbucks/2800vbucks.png'
import vbucks250 from '../assets/vbucks/5000vbucks.png'
import vbucks100 from '../assets/vbucks/13500vbucks.png'
const Vbucks = () => {
    return (
        <div className={'w-full h-screen bg-gradient-to-b from-[#0E1736] via-[#0B1230] to-[#020617] px-6 py-6'}>
            <div className={'w-4/5 flex flex-col mx-auto h-[80vh] mt-30'}>
                <h1 className={'text-white text-6xl uppercase'}>Vbucks</h1>
                <div className={'grid grid-cols-2  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4'}>
                    <div className={'w-full h-100 relative  overflow-hidden rounded-4xl border-10 bg-blue-400 border-blue-200 '}>
                        <img src={vbucks1000} alt={'vbucks1000'} className={'w-full h-full  object-cover'} />
                        <div className={'absolute bottom-0 left-0 right-0 bg-yellow-400 text-gray-600/50 text-2xl md:text-3xl font-bold text-center py-2'}>
                            $7.99
                        </div>
                    </div>
                    <div className={'w-full h-100 relative rounded-4xl overflow-hidden border-10 bg-blue-400 border-blue-200 '}>
                        <img src={vbucks500} alt={'vbucks500'} className={'w-full h-full  object-cover'} />
                        <div className={'absolute bottom-0 left-0 right-0 bg-yellow-400 text-gray-600/50 text-2xl md:text-3xl font-bold text-center py-2'}>
                            $19.99
                        </div>
                    </div>
                    <div className={'w-full h-100 relative rounded-4xl overflow-hidden border-10 bg-blue-400 border-blue-200 '}>
                        <img src={vbucks250} alt={'vbucks250'} className={'w-full h-full  object-cover'} />
                        <div className={'absolute bottom-0 left-0 right-0 bg-yellow-400 text-gray-600/50 text-2xl md:text-3xl font-bold text-center py-2'}>
                            $31.99
                        </div>
                    </div>
                    <div className={'w-full h-100 relative rounded-4xl overflow-hidden border-10 bg-blue-400 border-blue-200 '}>
                        <img src={vbucks100} alt={'vbucks100'} className={'w-full h-full  object-cover'} />
                        <div className={'absolute bottom-0 left-0 right-0 bg-yellow-400 text-gray-600/50 text-2xl md:text-3xl font-bold text-center py-2'}>
                            $79.99
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default Vbucks
