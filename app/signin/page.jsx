"use client";
import Link from "next/link";
import React from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const SignIn = () => {
    const handleGoogleLogin = () => {
        // 🔹 Here you’ll integrate Google OAuth later (NextAuth or Firebase)
        console.log("Google login clicked");
    };

    const handleFacebookLogin = () => {
        // 🔹 Here you’ll integrate Facebook OAuth later (NextAuth or Firebase)
        console.log("Facebook login clicked");
    };

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

            {/* 🧊 Overlay for dark effect */}
            <div className="absolute inset-0 bg-black/40" />

            {/* 🧾 Sign In Form */}
            <div className="relative mt-20 bg-black/20 backdrop-blur-xs shadow-lg rounded-2xl p-4 w-full max-w-md z-10">
                <h1 className="text-3xl font-bold text-center text-sky-400">
                    Welcome Back
                </h1>

                <form className="space-y-4">
                    <div>
                        <label className="block text-white font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full px-4 py-2 border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 bg-transparent"
                        />
                    </div>

                    <div>
                        <label className="block text-white font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            placeholder="Enter your password"
                            className="w-full px-4 py-2 border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 bg-transparent"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-sky-400 text-white py-2 rounded-lg hover:bg-sky-500 transition duration-200"
                    >
                        Sign In
                    </button>
                </form>

                {/* 🧠 OR Divider */}
                <div className="flex items-center my-6">
                    <hr className="flex-grow border-gray-500" />
                    <span className="text-gray-300 text-sm px-2">or</span>
                    <hr className="flex-grow border-gray-500" />
                </div>

                {/* 🌍 Social Logins */}
                <div className="flex flex-col gap-3">
                    <button
                        onClick={handleGoogleLogin}
                        className="flex items-center justify-center gap-2 w-full bg-white text-gray-800 font-medium py-2 rounded-lg hover:bg-gray-100 transition duration-200"
                    >
                        <FaGoogle className="text-red-600 text-lg" />
                        Sign in with Google
                    </button>

                    <button
                        onClick={handleFacebookLogin}
                        className="flex items-center justify-center gap-2 w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                    >
                        <FaFacebook className="text-lg" />
                        Sign in with Facebook
                    </button>
                </div>

                <p className="text-center text-white text-sm mt-6">
                    Don’t have an account?{" "}
                    <Link href="/signup" className="text-sky-400 hover:underline">
                        Sign up
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default SignIn;
