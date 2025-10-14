"use client";
import axiosPrivate from "@/lib/axiosPrivate";
import Link from "next/link";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
    const router = useRouter();
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const isFormValid =
        formData.username.trim() !== "" &&
        formData.email.trim() !== "" &&
        formData.password.trim() !== "";

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isFormValid) return;

        setLoading(true);
        setError("");

        try {
            const res = await axiosPrivate.post("/api/auth/signup", formData);
            console.log("User registered ✅", res.data);

            // ✅ Show success toast
            toast.success("Signup successful! Redirecting to homepage...", {
                position: "top-center",
                autoClose: 2000,
            });

            // Clear form
            setFormData({
                username: "",
                email: "",
                password: "",
            });

            // ✅ Redirect after short delay
            setTimeout(() => {
                router.push("/");
            }, 2000);
        } catch (err) {
            console.error("Error:", err.response?.data?.message || err.message);
            setError(err.response?.data?.message || "Something went wrong!");

            // ❌ Error toast
            toast.error(err.response?.data?.message || "Signup failed!", {
                position: "top-center",
            });
        } finally {
            setLoading(false);
        }
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

            {/* 🧊 Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* 🧾 Signup Form */}
            <div className="relative mt-16 bg-black/10 backdrop-blur-xs shadow-lg rounded-2xl p-8 w-full max-w-md z-10">
                <h1 className="text-3xl font-bold text-center text-sky-400 mb-6">
                    Create an Account
                </h1>

                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-white font-medium mb-1">
                            Username
                        </label>
                        <input
                            type="text"
                            name="username"
                            placeholder="Enter your username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 bg-transparent"
                        />
                    </div>

                    <div>
                        <label className="block text-white font-medium mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter your email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 bg-transparent"
                        />
                    </div>

                    <div>
                        <label className="block text-white font-medium mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            placeholder="Enter your password"
                            value={formData.password}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 bg-transparent"
                        />
                    </div>

                    {error && (
                        <p className="text-red-500 text-sm text-center">{error}</p>
                    )}

                    <button
                        type="submit"
                        disabled={!isFormValid || loading}
                        className={`w-full py-2 rounded-lg transition duration-200 ${isFormValid && !loading
                                ? "bg-sky-400 text-white hover:bg-sky-500 cursor-pointer"
                                : "bg-gray-500 text-gray-300 cursor-not-allowed"
                            }`}
                    >
                        {loading ? "Signing Up..." : "Sign Up"}
                    </button>
                </form>

                <p className="text-center text-white text-sm mt-4">
                    Already have an account?{" "}
                    <Link href="/signin" className="text-sky-400 hover:underline">
                        Log in
                    </Link>
                </p>
            </div>

            {/* ✅ Toast Container */}
            <ToastContainer />
        </div>
    );
};

export default Signup;
