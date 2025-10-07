"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const videos = [
    "/hero1.mp4",
    "/hero2.mp4",
    "/hero3.mp4",
];

export default function Hero() {
    const [currentVideo, setCurrentVideo] = useState(0);
    const heroRef = useRef(null);
    const [scrollLock, setScrollLock] = useState(true);
    const isScrolling = useRef(false); // scroll throttle

    useEffect(() => {
        const handleWheel = (e) => {
            if (!scrollLock) return; // scroll unlocked, allow normal scroll
            e.preventDefault();

            if (isScrolling.current) return; // throttle
            isScrolling.current = true;

            if (e.deltaY > 0 && currentVideo < videos.length - 1) {
                setCurrentVideo((prev) => prev + 1);
            } else if (e.deltaY < 0 && currentVideo > 0) {
                setCurrentVideo((prev) => prev - 1);
            }

            // scroll lock release if last video
            if (currentVideo === videos.length - 1 && e.deltaY > 0) {
                setScrollLock(false);
            }

            // throttle release after 500ms
            setTimeout(() => {
                isScrolling.current = false;
            }, 500);
        };

        window.addEventListener("wheel", handleWheel, { passive: false });

        return () => {
            window.removeEventListener("wheel", handleWheel);
        };
    }, [currentVideo, scrollLock]);

    return (
        <div ref={heroRef} className="relative w-full h-screen overflow-hidden bg-black">
            <AnimatePresence>
                <motion.video
                    key={currentVideo}
                    src={videos[currentVideo]}
                    autoPlay
                    muted
                    className="absolute inset-0 w-full h-full object-cover"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.8 }}
                />
            </AnimatePresence>

            <div className="absolute inset-0 flex flex-col items-center justify-center w-full px-4 text-white">
                {/* Search input + button */}
                <div className="flex w-full max-w-md">
                    {/* Search input */}
                    <input
                        type="text"
                        placeholder="Search..."
                        className="flex-[3] px-4 py-2 bg-white/20 text-white placeholder-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-white transition"
                    />

                    {/* Get More button */}
                    <button className="flex-1 px-4 py-2 border border-white text-white bg-white/10 rounded-r-md hover:bg-white/20 transition">
                        Get More
                    </button>
                </div>

                {/* Optional: Scene text below input/button */}
                {/* <motion.h1
    key={currentVideo}
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.8 }}
    className="mt-4 text-xl sm:text-2xl font-bold text-center"
  >
    {`Scene ${currentVideo + 1}`}
  </motion.h1> */}
            </div>



            {currentVideo === videos.length - 1 && (
                <motion.div
                    className="absolute bottom-10 w-full text-center text-white animate-bounce"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                >
                    ↓ Scroll to Explore
                </motion.div>
            )}
        </div>
    );
}
