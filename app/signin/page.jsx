"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaGoogle, FaFacebook } from "react-icons/fa";

const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleGoogleLogin = () => {
        console.log("Google login clicked");
    };

    const handleFacebookLogin = () => {
        console.log("Facebook login clicked");
    };

    // ✅ Button is enabled only if both email and password are not empty
    const isFormValid = email.trim() !== "" && password.trim() !== "";

    return (
        <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source src="/log.mp4" type="video/mp4" />
            </video>

            <div className="absolute inset-0 bg-black/40" />

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
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
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
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-4 py-2 border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 bg-transparent"
                        />
                    </div>

                    <button
                        type="submit"
                        disabled={!isFormValid} // 🔹 Disable if form is not valid
                        className={`w-full py-2 rounded-lg transition duration-200 ${isFormValid
                                ? "bg-sky-400 text-white hover:bg-sky-500"
                                : "bg-gray-500 text-gray-300 cursor-not-allowed"
                            }`}
                    >
                        Sign In
                    </button>
                </form>

                <div className="flex items-center my-6">
                    <hr className="flex-grow border-gray-500" />
                    <span className="text-gray-300 text-sm px-2">or</span>
                    <hr className="flex-grow border-gray-500" />
                </div>

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
