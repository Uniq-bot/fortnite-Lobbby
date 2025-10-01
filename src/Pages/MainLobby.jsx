import React, {useContext, useState} from 'react'
import Slider from "../../Component/mianLobby/Slider.jsx";
import Characters from "../../Component/mianLobby/Characters.jsx";
import ModeSelect from "../../Component/mianLobby/ModeSelect.jsx";
import {AppContext} from "../Context/AppContext.jsx";

const MainLobby = () => {
    const [ranked, setRanked]=useState(false)
    const [squad, setSquad]=useState('solo')
    const [isActive, setIsActive]=useState(false)
    const {setIsSideBarActive}=useContext(AppContext)

    return (
        <div className={'relative w-full min-h-screen bg-[url("https://pbs.twimg.com/media/F0WwwyeWwAEFYuG.jpg:large")] bg-cover bg-no-repeat'}>
           <div className={'w-full h-full absolute  bg-gradient-to-b from-[#0E1736]/40 via-[#0B1230]/30 to-[#020617]/40 pointer-events-none'} />
            <div className={'w-70 h-40 hover:cursor-pointer rounded-lg absolute overflow-hidden top-25 left-5 '}>
                <Slider />
            </div>
            <div className={'w-70 h-60 px-5 pt-5 pb-3 flex flex-col items-center rounded-4xl justify-between absolute bottom-10 left-5 bg-gray-500/50 border border-gray-500/30 hover:border-gray-300 transition-colors'}>
                <h1 className={'text-4xl text-white/80 w-full flex items-center justify-center py-3'} >
                    Battle Royale
                </h1>
                <div onClick={()=> {
                    setIsActive(!isActive)
                    setIsSideBarActive(false)
                }} className={'flex items-center hover:cursor-pointer hover:bg-gray-500 hover:text-black/80 transition-all duration-300 flex-col py-1 rounded-2xl bg-gray-400 w-full justify-center leading-none'}>
                    <h1 className={'text-3xl leading-none'}>
                        Ranked: {ranked?'On':'Off'}
                    </h1>
                    <h3 className={'text-2xl leading-none'}>
                        {squad==='squad'?'SQUAD':squad==='duo'?'DUO':squad==='trio'?'TRIO':squad==='solo'?'SOLO':null}
                    </h3>
                </div>
                <div className={'w-full h-10 flex items-center justify-center bg-yellow-400 rounded-2xl'}>
                    <h1 className={'text-3xl'}>
                        Play
                    </h1>
                </div>


            </div>
            <div className={'w-280 absolute h-[80vh] right-20 top-25 '}>
                <Characters />

            </div>
            <div className={'w-280 right-20 top-25 '}>
                <ModeSelect setRanked={setRanked} setSquad={setSquad} ranked={ranked} squad={squad} isActive={isActive} setIsActive={setIsActive} />
            </div>
        </div>
    )
}
export default MainLobby
