"use client";
import Link from "next/link";
import React from "react";

const Signup = () => {
    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* 🎥 Background Video */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/log.mp4" type="video/mp4" />
            </video>

            {/* 🧊 Overlay for slight dark effect */}
            <div className="absolute inset-0 bg-black/40" />

            {/* 🧾 Signup Form */}
            <div className="relative mt-16 bg-black/10 backdrop-blur-xs shadow-lg rounded-2xl p-8 w-full max-w-md z-10">
                <h1 className="text-3xl font-bold text-center text-sky-400 mb-6">
                    Create an Account
                </h1>

                <form className="space-y-4">
                    <div>
                        <label className="block text-white font-medium mb-1">
                            Username
                        </label>
                        <input
                            type="text"
                            placeholder="Enter your username"
                            className="w-full px-4 py-2 border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                        />
                    </div>

                    <div>
                        <label className="block text-white font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                        />
                    </div>

                    <div>
                        <label className="block text-white font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-sky-400 text-white py-2 rounded-lg hover:bg-sky-500 transition duration-200"
                    >
                        Sign Up
                    </button>
                </form>

                <p className="text-center text-white text-sm mt-4">
                    Already have an account?{" "}
                    <Link href="/signin" className="text-sky-400 hover:underline">
                        Log in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;
