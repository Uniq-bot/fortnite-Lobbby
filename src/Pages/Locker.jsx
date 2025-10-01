import React, {useContext, useEffect, useRef, useState} from 'react'
import { useNavigate } from 'react-router-dom'
import {AppContext} from "../Context/AppContext.jsx";
import { getRarityClasses } from '../utils/rarity.js'

const Locker = () => {
    const {outfits, pickaxes, backblings, selectedOutfit, selectedPickaxe, selectedBackbling, playHoverSound} = useContext(AppContext);
    const [title, setTitle] = useState(null)
    const [activeItem, setActiveItem] = useState('Character')
    const items = ['Character', 'Emotes', 'Wrap', 'Lobby', 'Instrument', 'Cars']
    const containerRef = useRef(null)
    const sectionRefs = useRef(Object.fromEntries(items.map(i => [i, null])))
    const navigate = useNavigate()

  
    useEffect(() => {
        if (backblings && backblings.length > 1) {
            setTitle(backblings[0].name);
        }
    }, [backblings]);
    useEffect(() => {
        const applyFromHash = () => {
            const raw = window.location.hash ? window.location.hash.substring(1) : '';
            if (!raw) return;
            const decoded = decodeURIComponent(raw);
            const match = items.find(i => i.toLowerCase() === decoded.toLowerCase());
            if (match) setActiveItem(match);
        }
        applyFromHash();
        window.addEventListener('hashchange', applyFromHash);
        return () => window.removeEventListener('hashchange', applyFromHash);
    }, [items]);

    // When activeItem changes (via hash or click), ensure the right section is aligned to top if present
    useEffect(() => {
        const el = sectionRefs.current[activeItem];
        const cont = containerRef.current;
        if (el && cont) {
            cont.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
        }
    }, [activeItem]);

    const [isScrollingByClick, setIsScrollingByClick] = useState(false);

    const handleSelect = (item) => {
        const hash = encodeURIComponent(item.toLowerCase());
        if (window.location.hash !== `#${hash}`) {
            window.location.hash = hash;
        }
        setActiveItem(item);
    
        const el = sectionRefs.current[item];
        const cont = containerRef.current;
        if (el && cont) {
            setIsScrollingByClick(true); // lock spy
            cont.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
    
            // unlock after ~600ms (enough for smooth scroll)
            setTimeout(() => setIsScrollingByClick(false), 600);
        }
    };
    
    const onScrollSpy = () => {
        if (isScrollingByClick) return; // ignore if click scroll
        const cont = containerRef.current;
        if (!cont) return;
    
        let bestItem = activeItem;
        let bestDist = Number.POSITIVE_INFINITY;
        items.forEach((item) => {
            const el = sectionRefs.current[item];
            if (!el) return;
            const rect = el.getBoundingClientRect();
            const contRect = cont.getBoundingClientRect();
            const dist = Math.abs(rect.top - contRect.top);
            if (dist < bestDist) {
                bestDist = dist;
                bestItem = item;
            }
        });
        if (bestItem !== activeItem) {
            setActiveItem(bestItem);
            const hash = encodeURIComponent(bestItem.toLowerCase());
            if (window.location.hash !== `#${hash}`) {
                window.location.hash = hash;
            }
        }
    };
    
    return (
        <div className={'w-full relative h-screen bg-gradient-to-b from-[#0E1736] via-[#0B1230] to-[#020617]'}>
            <div className={'w-2/3 flex flex-col gap-2  absolute h-[80vh] top-25 px-5'}>
                <h1 className={'text-[5rem] px-3 uppercase text-white/80 w-full '}>{title}</h1>
                <div className={'w-full h-full overflow-y-scroll flex    '}>
                    <div className={'side-nav w-1/4 h-full overflow-y-auto bg-gray-900/40 rounded-lg p-3'}>
                        <nav className={'w-full'}>
                            <ul className={'flex flex-col gap-2'}>
                                {items.map((item) => (
                                    <li key={item}>
                                        <button
                                            onMouseEnter={playHoverSound}
                                            onClick={() => handleSelect(item)}
                                            className={`w-full px-4 py-2 rounded-md hover:bg-gray-600 text-3xl uppercase text-center text-white/90 transition ${activeItem === item ? 'bg-gray-600' : ''}`}
                                        >
                                            {item}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div
                        ref={containerRef}
                        onScroll={onScrollSpy}
                        className={'flex flex-col overflow-y-auto w-2/3 h-full snap-y snap-mandatory rounded-lg'}
                    >
                        {items.map((item) => (
                            <section
                                key={item}
                                ref={(el) => (sectionRefs.current[item] = el)}
                                id={item.toLowerCase()}
                                className={'min-h-full snap-start overflow-hidden p-6'}
                            >
                                <h2 className={'text-4xl font-bold text-white mb-4 uppercase'}>{item}</h2>
                                {item === 'Character' ? (
                                    <div className={'grid grid-cols-3 gap-4'}>
                                        {/* Outfit (primary) */}
                                        <div
                                            className={`outfit row-span-2 rounded-lg border hover:border-gray-300 transition-colors h-[30vh] flex items-center justify-center p-4 cursor-pointer overflow-hidden relative ${getRarityClasses(selectedOutfit?.rarity)}`}
                                            onMouseEnter={() => selectedOutfit?.name && setTitle(selectedOutfit.name)}
                                            onClick={() => navigate('/locker/outfits')}
                                        >
                                            {selectedOutfit ? (
                                                <>
                                                    <div className={'w-full h-full'}>
                                                        <img src={selectedOutfit.image} alt={selectedOutfit.name} className={'w-full h-full object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]'} />
                                                    </div>
                                                    <div className={'absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-[2px] text-white text-center text-sm px-2 py-1'}>
                                                        {selectedOutfit.name}
                                                    </div>
                                                </>
                                            ) : (
                                                <span className={'text-white/70'}>No outfit</span>
                                            )}
                                        </div>
                                        {/* Pickaxe */}
                                        <div
                                            className={`pickaxe rounded-lg border hover:border-gray-300 transition-colors h-[20vh] flex items-center justify-center p-4 cursor-pointer overflow-hidden relative ${getRarityClasses(selectedPickaxe?.rarity)}`}
                                            onMouseEnter={() => selectedPickaxe?.name && setTitle(selectedPickaxe.name)}
                                            onClick={() => navigate('/locker/pickaxes')}
                                        >
                                            {selectedPickaxe ? (
                                                <>
                                                    <div className={'w-full h-full'}>
                                                        <img src={selectedPickaxe.image} alt={selectedPickaxe.name} className={'w-full h-full object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]'} />
                                                    </div>
                                                    <div className={'absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-[2px] text-white text-center text-xs px-2 py-1'}>
                                                        {selectedPickaxe.name}
                                                    </div>
                                                </>
                                            ) : (
                                                <span className={'text-white/70'}>No pickaxe</span>
                                            )}
                                        </div>
                                        {/* Back Bling */}
                                        <div
                                            className={`backbling rounded-lg border hover:border-gray-300 transition-colors h-[20vh] flex items-center justify-center p-4 cursor-pointer overflow-hidden relative ${getRarityClasses(selectedBackbling?.rarity)}`}
                                            onMouseEnter={() => selectedBackbling?.name && setTitle(selectedBackbling.name)}
                                            onClick={() => navigate('/locker/backblings')}
                                        >
                                            {selectedBackbling ? (
                                                <>
                                                    <div className={'w-full h-full'}>
                                                        <img src={selectedBackbling.image} alt={selectedBackbling.name} className={'w-full h-full object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.5)]'} />
                                                    </div>
                                                    <div className={'absolute bottom-0 left-0 right-0 bg-black/40 backdrop-blur-[2px] text-white text-center text-xs px-2 py-1'}>
                                                        {selectedBackbling.name}
                                                    </div>
                                                </>
                                            ) : (
                                                <span className={'text-white/70'}>No back bling</span>
                                            )}
                                        </div>
                                    </div>
                                ) : (
                                    <div className={'rounded-lg bg-gray-500/50 border border-gray-500/30 text-white/70 flex items-center justify-center h-40'}>
                                        <p className={'text-lg'}>No {item}</p>
                                    </div>
                                )}
                            </section>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Locker
