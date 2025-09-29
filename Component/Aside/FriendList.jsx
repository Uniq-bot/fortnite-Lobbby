import React, {useState} from 'react'
import {Users, UserPlus, Mic, Settings, LogOut, ChevronDown} from "lucide-react";

const FriendList = ({users}) => {
    const [joinActive, setJoinActive]=useState(false)
    const [friendActive, setFriendActive]=useState(false)
    const handleClick=()=>{
        setFriendActive(!friendActive)
        setJoinActive(false)
    }
    return (

            <div className={'w-full h-screen flex flex-col bg-gradient-to-l from-[#0E1736]/20 to-[darkblue]/10'}>
                <h1 className={'w-full h-20 bg-[#0E1736]/20 bg-gradient-to-t from-[#0E1736]/20 to-[white]/10 flex items-end  text-5xl tracking-[4px] pl-4 pb-1 uppercase'}>
                    Party Up
                </h1>
                <div>
                    <div>
                        <div>
                            <h1 onClick={()=>{
                                setJoinActive(!joinActive)
                                setFriendActive(false)
                            }} className={'bg-[#0E1736] flex justify-between py-4 px-2 text-gray-300 text-3xl'}>
                                Joinable Parties <span className={'flex gap-3 items-center text-xl'}> <Users size={20}/>0 <ChevronDown className={`${joinActive?'rotate-180':'rotate-0'} transition-all cursor-pointer duration-150`} /></span>
                            </h1>
                            <p className={`text-center select-none  flex items-center text-gray-400  text-3xl leading-none bg-gradient-to-b from-[#0E1736]/20 to-[darkblue]/10 rounded-b-[5px] w-full ${joinActive?'min-h-20 py-10 ':'h-0'} overflow-hidden transition-all duration-150 `}>
                                Looking For  Party is a new way to find players  based on common  Social tags. Add Social Tags to your profile to find players with similar interests.
                            </p>
                        </div>
                        <div>
                            <h1  className={'bg-[#0E1736] flex justify-between items-center py-4 px-2 text-gray-300 text-3xl'}>
                                Epic Friends
                                <ChevronDown onClick={()=>handleClick()}  className={`${friendActive?'rotate-180':'rotate-0'} transition-all cursor-pointer duration-150`} />
                            </h1>
                            <div className={`flex ${friendActive?'h-110 ':'h-0'}  transition-all duration-150   flex-col items-center overflow-hidden justify-center gap-2`}>
                                {
                                    users.map((user, index)=>{
                                        return(
                                            <div key={index} className={`w-full flex ${user.status==='offline'?'text-gray-400/30':'text-gray-300'} items-center justify-between pr-5 gap-4 h-20 border-b border-gray-300/10`}>
                                                <div className={'relative w-20 h-20 flex items-center  justify-center rounded-full overflow-hidden'}>
                                                    <div className={'w-15 h-15 rounded-full overflow-hidden'}>
                                                        <img src={user.avatar} alt={user.name} />
                                                    </div>
                                                    <div className={`w-3 h-3 absolute bottom-3 right-2 rounded-full ${user.status==='online'?'bg-green-500': user.status==='in-match'?'bg-yellow-500':user.status==='offline'?'bg-red-500':'bg-gray-300'}`} />
                                                </div>
                                                <div className={'flex flex-col w-2/5 items-start'}>
                                                    <h2 className={'text-2xl'}>{user.username}</h2>
                                                    <p className={`text-xl ${
                                                        user.status==='online'?'text-green-500': user.status==='in-match'?'text-yellow-500':user.status==='offline'?'text-red-500':'text-gray-300'}`}>{user.status}</p>
                                                </div>
                                                <div>
                                                    <p>
                                                        LVL : {user.level}
                                                    </p>
                                                    <p>
                                                        Wins : {user.wins}
                                                    </p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

    )
}
export default FriendList
