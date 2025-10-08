"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { CheckCircle } from "lucide-react";

const About = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.3 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const variants = {
        hidden: {
            opacity: 0,
            y: 250,
            borderRadius: "50%",
            width: 180,
            height: 180,
            backgroundColor: "rgba(255,255,255,0.15)",
            boxShadow: "0 0 40px rgba(0, 212, 255, 0.3)",
        },
        visible: {
            opacity: 1,
            y: 0,
            borderRadius: "0%",
            width: "85vw",
            height: "70vh",
            backgroundColor: "rgba(10,10,10,0.9)",
            boxShadow: "0 0 80px rgba(0, 212, 255, 0.4)",
            transition: {
                duration: 1.4,
                ease: "easeInOut",
            },
        },
    };

    const fadeUp = (delay = 0) => ({
        hidden: { opacity: 0, y: 40 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, delay, ease: "easeOut" },
        },
    });

    return (
        <div
            className="relative min-h-screen flex items-center justify-center bg-cover bg-center text-white pt-20"
            style={{
                backgroundImage: `url('/aboutbg.jpg')`,
            }}
        >
            {/* Overlay for better visibility */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Animated Box */}
            <motion.div
                ref={ref}
                initial="hidden"
                animate={controls}
                variants={variants}
                className="relative z-10 grid md:grid-cols-4 gap-10 items-center justify-center overflow-hidden rounded-xl mt-20"
            >
                {/* Left Section (3 parts) */}
                <motion.div
                    variants={fadeUp(0.3)}
                    className="md:col-span-3 space-y-6 text-left m-10"
                >
                    <h2 className="text-4xl font-bold text-[#00d4ff]">
                        Why Choose Us
                    </h2>
                    <p className="text-gray-300 leading-relaxed">
                        We are a trusted real estate company providing clients with
                        premium properties, transparency, and long-term value.
                    </p>

                    <ul className="space-y-4 text-gray-200">
                        {[
                            "Experienced real estate professionals",
                            "Transparent buying & selling process",
                            "Prime property locations",
                            "Affordable pricing & flexible plans",
                            "24/7 customer support",
                        ].map((item, index) => (
                            <motion.li
                                key={index}
                                variants={fadeUp(0.4 + index * 0.15)}
                                className="flex items-start gap-3"
                            >
                                <CheckCircle className="text-[#00d4ff] mt-1 w-5 h-5" />
                                <span>{item}</span>
                            </motion.li>
                        ))}
                    </ul>
                </motion.div>

                {/* Right Section (1 part) */}
                <motion.div
                    variants={fadeUp(0.8)}
                    className="md:col-span-1 flex justify-center md:justify-end"
                >
                    <Image
                        src="/build.png"
                        alt="Real Estate"
                        width={300}
                        height={280}
                        className="shadow-lg object-cover rounded-xl"
                    />
                </motion.div>
            </motion.div>

        </div>
    );
};

export default About;
