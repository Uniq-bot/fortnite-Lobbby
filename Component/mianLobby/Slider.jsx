import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../src/Context/AppContext.jsx";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Slider = () => {
    const { allEvents } = useContext(AppContext);
    const [currentIndex, setCurrentIndex] = useState(0);

    // auto play every 4s
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % allEvents.length);
        }, 4000);
        return () => clearInterval(interval);
    }, [allEvents.length]);



    return (
        <div className="relative w-full h-full overflow-hidden">
            <div className={'w-full h-full absolute top-0 left-0 z-10'} />
            {/* slider container */}
            <div
                className="flex h-full w-full transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {allEvents.map((event, index) => (
                    <img
                        key={index}
                        src={event}
                        alt={`event-${index}`}
                        className="w-full h-full object-cover "
                    />
                ))}
            </div>

            {/* left btn */}


            {/* dots */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
                {allEvents.map((_, idx) => (
                    <button
                        key={idx}
                        onClick={() => setCurrentIndex(idx)}
                        className={`w-2 h-2 rounded-full ${
                            idx === currentIndex ? "bg-white" : "bg-gray-400/70"
                        }`}
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
