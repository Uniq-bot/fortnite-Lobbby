import React, {useContext, useEffect, useRef, useState} from 'react'
import {Users, UserPlus, Mic, Settings, LogOut, ChevronDown} from "lucide-react";
import {AppContext} from "../Context/AppContext.jsx";
import FriendList from "../../Component/Aside/FriendList.jsx";
import AddFriend from "../../Component/Aside/AddFriend.jsx";

const AsideBar = () => {


    const {isSideBarActive,setIsSideBarActive, users, AddFriends, playHoverSound } =useContext(AppContext);
    const sidebarRef = useRef(null);
    console.log(users)

    const [type, setType] = useState('users')
    const renderControls=()=>{
        switch (type){
            case 'users':
               return(
                   <FriendList users={users}/>
               );
            case 'friends':
                return(
                    <AddFriend suggestedFriends={AddFriends}  />
                )
        }

    }
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
                setIsSideBarActive(false);
            }
        };

        if (isSideBarActive) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isSideBarActive, setIsSideBarActive]);



    return (
        <div   ref={sidebarRef} className={`fixed top-0 ${isSideBarActive?'w-100':'w-0 opacity-0 pointer-events-none'} transition-all
         bg-blue-200 text-gray-200 duration-300 min-h-screen flex right-0 z-50`}>
            <div className={'w-1/5 h-screen flex flex-col justify-between  py-4 bg-[#0E1736]'}>
               <div className={'flex flex-col items-center '}>
                   <img src={'https://mir-s3-cdn-cf.behance.net/projects/404/866c2c230382405.68761f598b7eb.jpg'} alt={'profile'} className={'w-25 h-20 px-5 py-5 rounded-full'} />
                    <div onMouseEnter={()=>playHoverSound()} onClick={()=>setType('users')} className={`flex ${type==='users'?'bg-blue-950':'bg-transparent'} hover:bg-blue-950/30 cursor-pointer transition-all duration-150 items-center w-full h-20  justify-center gap-2`}><Users /><p>{users.length}</p></div>
                   <div onMouseEnter={()=>playHoverSound()} onClick={()=>setType('friends')} className={`flex ${type==='friends'?'bg-blue-950':'bg-transparent'} hover:bg-blue-950 cursor-pointer transition-all duration-150 justify-center h-20 items-center gap-2  w-full` }>
                       <UserPlus  />
                   </div>
                   <div onMouseEnter={()=>playHoverSound()} onClick={()=>setType('voice')} className={`flex ${type==='voice'?'bg-blue-950':'bg-transparent'} hover:bg-blue-950 cursor-pointer transition-all duration-150 justify-center h-20 items-center gap-2  w-full`}>
                       <Mic/>
                   </div>
               </div>
                <div   className={'flex flex-col justify-center h-30 items-center gap-5  w-full'}>
                    <Settings onMouseEnter={()=>playHoverSound()} onClick={()=>setType('settings')} className={`w-20 ${type==='settings'?'bg-blue-950':'bg-transparent'} hover:bg-blue-950 cursor-pointer transition-all duration-150 p-3 h-20`} />
                    <LogOut onMouseEnter={()=>playHoverSound()} onClick={()=>setType('logout')}  className={`w-20   hover:bg-red-500 cursor-pointer transition-all duration-150 p-3   h-20`}/>
                </div>
            </div>
            <div className={'w-4/5 h-screen bg-blue-950'}>
                {/*{effects are shown here}*/}
                {renderControls()}
            </div>
        </div>
    )
}
export default AsideBar
