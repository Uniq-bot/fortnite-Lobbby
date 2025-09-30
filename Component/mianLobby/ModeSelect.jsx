import React, {useContext, useEffect, useRef, useState} from 'react';
import { AppContext } from "../../src/Context/AppContext.jsx";

// ToggleSwitch Component
const ToggleSwitch = ({ enabled, setEnabled }) => {
    return (
        <div
            onClick={() => setEnabled(!enabled)}
            className={`w-14 h-8 flex items-center rounded-full p-1 cursor-pointer transition-all ${
                enabled ? "bg-green-500" : "bg-gray-600"
            }`}
        >
            <div
                className={`bg-white w-6 h-6 rounded-full shadow-md transform transition-transform ${
                    enabled ? "translate-x-6" : "translate-x-0"
                }`}
            />
        </div>
    );
};

// ModeSelect Sidebar
const ModeSelect = ({ ranked, setRanked, isActive, squad, setSquad, setIsActive }) => {
    const { setIsSideBarActive } = useContext(AppContext);
    const [enabled, setEnabled] = useState(ranked || false);
    const [selectedMode, setSelectedMode] = useState("Squad");
    const modeBarRef=useRef(null)
    const modes = ["Squad", "Trio", "Duo", "Solo"];
    useEffect(()=>{
        setSquad(selectedMode.toLowerCase())

    }, [selectedMode])

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (modeBarRef.current && !modeBarRef.current.contains(e.target)) {
                setIsActive(false);
            }
        };

        if (isActive) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }

        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isActive, setIsActive]);


    return (
        <div ref={modeBarRef} className={`fixed top-0 right-0 h-screen z-50 bg-gradient-to-b from-gray-900 to-black shadow-xl transition-all duration-300 ease-in-out ${isActive ? 'w-96' : 'w-0 overflow-hidden opacity-0 pointer-events-none'}`}>

            {/* Header */}
            <div className="w-full relative h-48 bg-[url('https://wallpapers.com/images/hd/fortnite-battle-royale-desktop-ty23oabol2bxs3zr.jpg')] bg-cover bg-center bg-no-repeat flex items-center justify-center">
                <div className="absolute z-40 top-0 left-0 w-full h-full bg-gradient-to-b from-[#0E1736]/20 to-[darkblue]/30" />
                <h1 className="text-5xl relative z-50 font-bold tracking-widest text-white">Battle Royale</h1>
            </div>

            {/* Ranked Toggle */}
            <div className="flex items-center justify-between p-6 bg-blue-950">
                <span className="text-2xl text-white font-medium">{enabled ? 'Ranked' : 'Unranked'} Mode</span>
                <ToggleSwitch enabled={enabled} setEnabled={(val) => { setEnabled(val); setRanked(val); }} />
            </div>

            {/* Mode Options */}
            <div className="flex flex-col gap-4 py-6">
                {modes.map((mode) => (
                    <div
                        key={mode}
                        onClick={() => setSelectedMode(mode)}
                        className={`cursor-pointer p-4  transition-all ${
                            selectedMode === mode
                                ? "bg-blue-950 text-white shadow-lg "
                                : "bg-gray-800/40 text-gray-300 hover:bg-gray-700/50 "
                        }`}
                    >
                        <span className="text-2xl font-semibold">{mode} Mode</span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ModeSelect;
