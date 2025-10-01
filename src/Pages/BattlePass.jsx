import React, {useContext} from 'react'
import {Lock} from "lucide-react";
import {AppContext} from "../Context/AppContext.jsx";

const BattlePass = () => {
    const {playHoverSound}=useContext(AppContext)
    return (
        <div className={'w-full h-screen bg-cover  relative  bg-[url("https://wallpapers.com/images/hd/fortnite-battle-royale-desktop-uc3wwns6v88maiu0.jpg")] px-6 py-6'}>
                <aside className={'w-80 flex px-5 flex-col h-150 gap-5 absolute top-25 left-0'}>
                    <h1 className={'flex uppercase text-yellow-400 text-4xl pt-4 gap-4 items-center'}> <img className={'w-15'} alt={'bp'} src={'https://freepngimg.com/save/94561-symmetry-symbol-royale-game-fortnite-battle/512x512'}/> Season 0</h1>
                   <div className={'flex flex-col gap-2'}>
                       <h1 className={'uppercase text-5xl text-gray-300'}>
                           Battle Pass Rewards
                       </h1>
                       <p className={'text-gray-300 text-2xl'}>
                           Spend Battle Stars to claim Season 0 Rewards!
                       </p>
                   </div>
                    <div className={'flex flex-col'}>
                        <div className={'flex flex-col'}>
                           <h1 className={'text-3xl text-gray-300'}> <span>0</span>/
                               <span>100</span>
                           </h1>
                            <h3 className={'text-yellow-500 text-2xl'}>REWARDS COLLECTED</h3>
                        </div>
                        <div className={'flex flex-col'}>
                            <h1 className={'text-3xl text-gray-300'}> <span>0</span>/
                                <span>14</span>
                            </h1>
                            <h3 className={'text-yellow-500 text-2xl'}>PAGES COMPLETED</h3>
                        </div>

                    </div>
                </aside>
            <aside className={'w-80 flex px-5 flex-col h-150 gap-7 absolute items-end top-25  right-0'}>
                    <div className={'flex  gap-4'}>
                        <h1 className={'flex gap-2 text-2xl text-gray-300 items-center'}><img className={'w-10'}  src="https://freepngimg.com/save/94561-symmetry-symbol-royale-game-fortnite-battle/512x512" alt="" /> LVL 0</h1>
                        <h3 className={'flex gap-2 text-2xl text-gray-300 items-center'}><img className={'w-10'} src="https://static.vecteezy.com/system/resources/thumbnails/001/189/260/small/star.png" alt="" /> 0</h3>
                    </div>
                <div className={'flex flex-col gap-2'}>
                    <button onMouseEnter={()=>playHoverSound()} className={'px-10 cursor-pointer py-3 flex text-gray-800  flex-col text-3xl items-center bg-[#F8FF19]'}>
                        Buy Battle Pass
                        <span className={'text-[15px]'}>And get 100 Battle Pass Points!</span>
                    </button>
                    <button onMouseEnter={()=>playHoverSound()} className={'px-10 cursor-pointer py-0.5 flex border-5 border-blue-300 text-gray-800  flex-col text-3xl items-center bg-blue-500'}>
                        Gift Battle Pass
                    </button>
                </div>
            </aside>
            <main className={'w-full px-10 uppercase grid grid-cols-5 gap-4 p-5 left-1/2 -translate-x-1/2 transform  h-[30vh] absolute bottom-5 '}>
                <div onMouseEnter={()=>playHoverSound()} className={'w-full cursor-pointer overflow-hidden relative col-span-2  bg-red-500'}>
                    <img className={'w-full object-cover'} src="https://imageio.forbes.com/specials-images/imageserve/5e9fa08edea8300007de8914/Midas--Mission-Part-2/960x0.jpg?format=jpg&width=960" alt="" />
                    <h1 className={'absolute bottom-0 w-full text-center text-gray-800 text-2xl bg-white'}>
                        <span className={'text-yellow-600'}>Battle Pass</span> Rewards
                    </h1>
                </div>
                <div onMouseEnter={()=>playHoverSound()} className={'w-full h-full relative bg-red-500 hover:cursor-not-allowed hover:opacity-70 transition-all duration-150'}>
                    <img className={'w-full h-full object-cover'} src="https://i.ytimg.com/vi/W26c8YFwuHg/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBegbaoP3aTKkoG5j138ThnDy2-yw" alt="" />
                    <h1 className={'absolute bottom-0 w-full text-center text-white text-2xl bg-black/100'}>
                        <span className={'text-purple-600'}>Bonus</span> Rewards
                    </h1>
                    <span className={'absolute top-0 right-0 bg-pink-600 text-white p-2'}>
                        <Lock />
                    </span>
                </div>
                <div onMouseEnter={()=>playHoverSound()} className={'w-full h-full relative bg-red-500 hover:cursor-not-allowed hover:opacity-70 transition-all duration-150'}>
                    <img className={'w-full h-full object-cover object-center'} src="https://i0.wp.com/gameranx.com/wp-content/uploads/2025/06/image-18.png?fit=800%2C450&quality=80&ssl=1" alt="" />
                    <h1 className={'absolute bottom-0 w-full text-center text-white text-2xl bg-black/100'}>
                        <span className={'text-teal-600'}>MidSeason</span> Rewards
                    </h1>
                    <span className={'absolute top-0 right-0 bg-pink-600 text-white p-2'}>
                        <Lock />
                    </span>
                </div>
                <div onMouseEnter={()=>playHoverSound()} className={'w-full relative h-full bg-red-500 hover:cursor-not-allowed hover:opacity-70 transition-all duration-150'}>
                    <img className={'w-full h-full object-cover object-center'} src="https://wallpapers.com/images/hd/midas-fortnite-skin-197k3gbt63j9ha0n.jpg" alt="" />
                    <h1 className={'absolute bottom-0 w-full text-center text-white text-2xl bg-black/100'}>
                        <span className={'text-[#839EB4]'}>Fortnite</span> Crew
                    </h1>
                    <span className={'absolute top-0 right-0 bg-pink-600 text-white p-2'}>
                        <Lock />
                    </span>
                </div>
            </main>
        </div>
    )
}
export default BattlePass
