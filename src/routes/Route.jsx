import React, {useContext} from 'react'
import { Routes, Route} from "react-router-dom";
import Locker from "../Pages/Locker.jsx";
import ItemShop from "../Pages/ItemShop.jsx";
import BattlePass from "../Pages/BattlePass.jsx";
import Quests from "../Pages/Quests.jsx";
import Vbucks from "../Pages/Vbucks.jsx";
import MainLobby from "../Pages/MainLobby.jsx";
import NavBar from "../Common/NavBar.jsx";
import AsideBar from "../Common/AsideBar.jsx";

const Routers = () => {

    return (
        <div  className={'w-full min-h-screen  '}>
            <NavBar />
            <Routes>
                <Route path="/" element={<MainLobby />} />
                <Route path="/locker" element={<Locker />} />
                <Route path="/itemshop" element={<ItemShop />} />
                <Route path="/battlepass" element={<BattlePass />} />
                <Route path="/quests" element={<Quests />} />
                <Route path="/v-bucks" element={<Vbucks />} />
            </Routes>
            <AsideBar />
        </div>

    )
}
export default Routers
