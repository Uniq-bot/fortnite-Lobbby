import {createContext, useRef, useState} from "react";
import {fortniteUsers, suggestedFriends} from "../assets/assets.js";
export const AppContext=createContext();

export const AppContextProvider=({children})=>{
    const [isSideBarActive, setIsSideBarActive]=useState(false);
    const users=fortniteUsers;
    const AddFriends=suggestedFriends;
    const hoverSound=useRef(new Audio('/Sound/mouse-hover.mp3'))

    const playHoverSound=()=>{
        if(hoverSound.current){
            hoverSound.current.currentTime = 0; // reset to start
            hoverSound.current.volume = 0.2;
            hoverSound.current.play();        }
    }







    return(
        <AppContext.Provider value={{isSideBarActive, setIsSideBarActive, AddFriends,playHoverSound, users}}>
            {children}
        </AppContext.Provider>
    )
}

