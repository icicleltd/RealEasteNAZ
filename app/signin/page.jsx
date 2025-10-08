"use client";
import React from "react";

const SignIn = () => {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
            <h1>Sign In</h1>
            <form className="flex flex-col space-y-4 mt-4"  >
                <input type="email" placeholder="Email" className="border border-gray-300 p-2 rounded" />
                <input type="password" placeholder="Password" className="border border-gray-300 p-2 rounded" />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded">Sign In</button>
            </form>
        </div>
    );
};

export default SignIn;
