import React, { useContext } from "react";
import { Plus } from "lucide-react";
import { AppContext } from "../../src/Context/AppContext.jsx";

const Characters = () => {
    const squadSlots = [1, 2, 3]; // can go [1,2,3,4] for full squad
    const { setIsSideBarActive, isSideBarActive, playHoverSound } =
        useContext(AppContext);

    const handleInviteClick = () => {
        if (!isSideBarActive) {
            setIsSideBarActive(true); // only open if closed
        }

    };

    return (
        <div className="w-full absolute h-full">
            {/* Squad Character Placeholders */}
            <div className="absolute flex gap-10 bottom-10 left-1/2 transform -translate-x-1/2">
                {squadSlots.map((slot, index) => (
                    <div
                        key={slot}
                        onMouseEnter={() => playHoverSound()}
                        className={`relative hover:cursor-pointer hover:bg-gradient-to-t from-[white]/40 rounded-b-2xl to-[white]/10 flex flex-col items-center justify-center ${
                            index % 2 !== 0 ? "h-85 w-80" : "h-80 w-60"
                        }`}
                    >
                        {/* If even → show Invite, if odd → show loading */}
                        {index % 2 === 0 ? (
                            <div className="flex flex-col items-center justify-center">
                                <div
                                    onMouseEnter={() => playHoverSound()}
                                    onClick={handleInviteClick}
                                    className="w-7 h-7 border-2 border-gray-400 flex items-center justify-center bg-black/30 hover:bg-blue-600 transition-all"
                                >
                                    <Plus className="text-white w-10 h-10" />
                                </div>
                                <p className="text-gray-300 text-xm mt-2">Invite</p>
                            </div>
                        ) : (
                            <>
                                {/* Fortnite-style loader */}
                                <div className="relative w-32 h-32">
                                    <div className="absolute inset-0 rounded-full border-4 border-gray-700"></div>
                                    <div className="absolute inset-0 rounded-full border-4 border-t-blue-400 animate-spin"></div>
                                </div>
                                <p className="text-white text-lg mt-5 tracking-widest animate-pulse">
                                    Fetching Character after available...
                                </p>
                            </>
                        )}

                        {/* Gradient floor base */}
                        <div className="w-full rounded-2xl absolute bottom-0 h-4 bg-gradient-to-b from-[#0E1736] to-[darkblue]" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Characters;
