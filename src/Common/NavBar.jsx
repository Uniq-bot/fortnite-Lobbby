import React, {useContext, useState} from 'react'
import {LayoutGrid, Search} from "lucide-react";
import {Link} from "react-router-dom";
import {AppContext} from "../Context/AppContext.jsx";
const NavBar = () => {
    const {isSideBarActive, setIsSideBarActive, playHoverSound}=useContext(AppContext);
    const [isActiveId, setIsActiveId]=useState(false)
    const navItems=[

        {
            id:3,
            label:'Play',
            href:'/'
        },
        {
            id:4,
            label:'Locker',
            href:'/locker'
        },
        {
            id:5,
            label:'Item Shop',
            href:'/itemshop'

        },
        {
            id:6,
            label:'Battle Pass',
            href:'/battlepass'
        },
        {
            id:7,
            label:'Quests',
            href:'/quests'
        },
        {
            id:8,
            label:'V-bucks',
            href:'/v-bucks'
        }
    ]
    return (
        <div className={'w-full fixed top-0 px-5 pr-30 py-5 left-0 z-50  flex justify-between items-center'}>
        <nav className={'flex  bg-[#03375E]/50 rounded-lg w-250 items-center justify-between px-10 py-1 text-gray-300 text-2xl gap-5'}>

            <div onMouseEnter={()=>playHoverSound()} className={`px-3 py-2 cursor-pointer uppercase hover:bg-gray-300/10 transition-all rounded-lg duration-300` }>
                <Search />
            </div>
            {
                navItems.map((item)=>{
                    return(
                        <Link onMouseEnter={()=>playHoverSound()} onClick={()=>setIsActiveId(item.id)} className={`px-3 py-2 uppercase hover:bg-gray-300/10 transition-all rounded-lg duration-300 ${isActiveId===item.id ? 'text-white bg-gray-300/20  ' : 'text-gray-300'}`} key={item.id} to={item.href}>
                            {item.label}
                        </Link>
                    )
                })
            }
        </nav>
    <div onMouseEnter={()=>playHoverSound()} className={`w-15 h-15 p-1 cursor-pointer uppercase hover:bg-gray-300 transition-all rounded-full duration-300` } onClick={()=>setIsSideBarActive(!isSideBarActive)}>
        <img src={'https://mir-s3-cdn-cf.behance.net/projects/404/866c2c230382405.68761f598b7eb.jpg'} alt={'profile'} className={' w-full h-full object-cover rounded-full'} />
    </div>
        </div>
    )
}
export default NavBar
