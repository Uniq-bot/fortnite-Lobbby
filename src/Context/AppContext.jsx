import {createContext, useEffect, useRef, useState} from "react";
import {fortniteUsers, suggestedFriends, events, loadoutData} from "../assets/assets.js";
export const AppContext=createContext();

export const AppContextProvider=({children})=>{
    const [isSideBarActive, setIsSideBarActive]=useState(false);
    const [users, setUsers]=useState([]);
    const [AddFriends, setAddFriends]=useState([])
    const hoverSound=useRef(new Audio('/Sound/mouse-hover.mp3'));
    const[allEvents, setAllEvents]=useState([])
    const [outfits, setOutfits]=useState(null)
    const [pickaxes, setPickaxes]=useState(null)
    const [backblings, setBackblings]=useState(null)
    // Selected items for locker
    const [selectedOutfit, setSelectedOutfit] = useState(null)
    const [selectedPickaxe, setSelectedPickaxe] = useState(null)
    const [selectedBackbling, setSelectedBackbling] = useState(null)
    const playHoverSound=()=>{
        if(hoverSound.current){
            hoverSound.current.currentTime = 0; // reset to start
            hoverSound.current.volume = 0.2;
            hoverSound.current.play();        }
    }
    useEffect(()=>{
            setUsers(fortniteUsers)
        setAddFriends(suggestedFriends)
        setAllEvents(events)
        setOutfits(loadoutData.outfits)
        setPickaxes(loadoutData.pickaxes)
        setBackblings(loadoutData.backblings)
        // Initialize defaults once data is loaded
        if (!selectedOutfit && loadoutData.outfits?.length) setSelectedOutfit(loadoutData.outfits[0])
        if (!selectedPickaxe && loadoutData.pickaxes?.length) setSelectedPickaxe(loadoutData.pickaxes[0])
        if (!selectedBackbling && loadoutData.backblings?.length) setSelectedBackbling(loadoutData.backblings[0])
    },[])






    return(
        <AppContext.Provider value={{
            isSideBarActive,
            outfits,
            pickaxes,
            backblings,
            selectedOutfit,
            setSelectedOutfit,
            selectedPickaxe,
            setSelectedPickaxe,
            selectedBackbling,
            setSelectedBackbling,
            setIsSideBarActive,
            AddFriends,
            playHoverSound,
            users,
            allEvents
        }}>
            {children}
        </AppContext.Provider>
    )
}

