"use client";

import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white py-4">
            <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between text-sm">
                <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p>
                <div className="flex space-x-4 mt-2 md:mt-0">
                    <a href="#" className="hover:text-blue-400 transition">Privacy Policy</a>
                    <a href="#" className="hover:text-blue-400 transition">Terms of Service</a>
                    <a href="#" className="hover:text-blue-400 transition">Contact</a>
                </div>
            </div>
            <div className="text-center mt-2 text-xs text-gray-400">
                Powered by ICICLE CORPORATION
            </div>
        </footer>
    );
};

export default Footer;
