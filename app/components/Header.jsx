"use client";
import React, { useEffect, useState } from "react";
import { Heart, Search, Phone, CalendarDays, MessageCircle } from "lucide-react";
import Image from "next/image";

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? "bg-blue-950 pb-4 backdrop-blur-md" : "bg-transparent"
                }`}
        >
            {/* 🔹 Top Bar (Hide when scrolled) */}
            <div
                className={`transition-all duration-500 ${isScrolled ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
                    } bg-[#1c1c1c] text-gray-300 text-[10px] sm:text-xs`}
            >
                <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-10 h-6">
                    {/* Left Side */}
                    <div className="flex space-x-4 sm:space-x-6">
                        <span>
                            Lang: <strong className="text-white">EN</strong>
                        </span>
                        <span>
                            Pref: <strong className="text-white">AED</strong> / Imperial
                        </span>
                    </div>

                    {/* Right Side */}
                    <div className="flex items-center space-x-3 sm:space-x-5">
                        <a href="#" className="flex items-center gap-1 hover:text-white transition">
                            <MessageCircle size={12} />
                            WhatsApp
                        </a>
                        <a href="#" className="flex items-center gap-1 hover:text-white transition">
                            <Phone size={12} />
                            Call
                        </a>
                        <a href="#" className="flex items-center gap-1 hover:text-white transition">
                            <CalendarDays size={12} />
                            Contact
                        </a>
                    </div>
                </div>
            </div>


            {/* 🔹 Main Navbar */}
            <div className="max-w-7xl mx-auto px-6 lg:px-10 flex justify-between items-center h-20 text-white">
                {/* Left Menu */}
                <nav className="hidden md:flex space-x-10 text-sm tracking-widest font-semibold">
                    <a href="#about" className="hover:text-gray-300 transition">
                        ABOUT
                    </a>
                    <a href="#communities" className="hover:text-gray-300 transition">
                        COMMUNITIES
                    </a>
                    <a href="#properties" className="hover:text-gray-300 transition">
                        PROPERTIES
                    </a>
                </nav>

                {/* Logo */}
                <div className="text-center mt-2">
                    <Image
                        src="/logo.png"
                        alt="Logo"
                        width={150}
                        height={100}
                        className="mx-auto"
                    />
                </div>

                {/* Right Menu */}
                <div className="hidden md:flex items-center space-x-8 text-sm tracking-widest font-semibold">
                    <a href="#media" className="hover:text-gray-300 transition">
                        MEDIA CENTER
                    </a>
                    <a href="#careers" className="hover:text-gray-300 transition">
                        CAREERS
                    </a>
                    <a href="#contact" className="hover:text-gray-300 transition">
                        CONTACT US
                    </a>
                    <Heart size={18} className="cursor-pointer hover:opacity-70" />
                    <Search size={18} className="cursor-pointer hover:opacity-70" />
                </div>
            </div>
        </header>
    );
};

export default Header;
