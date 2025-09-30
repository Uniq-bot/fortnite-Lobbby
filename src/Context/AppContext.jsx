import {createContext, useEffect, useRef, useState} from "react";
import {fortniteUsers, suggestedFriends, events} from "../assets/assets.js";
export const AppContext=createContext();

export const AppContextProvider=({children})=>{
    const [isSideBarActive, setIsSideBarActive]=useState(false);
    const [users, setUsers]=useState([]);
    const [AddFriends, setAddFriends]=useState([])
    const hoverSound=useRef(new Audio('/Sound/mouse-hover.mp3'));
    const[allEvents, setAllEvents]=useState([])
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
    },[])






    return(
        <AppContext.Provider value={{isSideBarActive, setIsSideBarActive, AddFriends,playHoverSound, users, allEvents}}>
            {children}
        </AppContext.Provider>
    )
}

