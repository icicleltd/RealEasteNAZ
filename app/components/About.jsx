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
            boxShadow: "0 0 40px rgba(0, 212, 255, 0.3)",
        },
        visible: {
            opacity: 1,
            y: 0,
            borderRadius: "0%",
            width: "85vw",
            height: "70vh",
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
        >


            {/* Animated Box */}
            <div >
                {/* Background Video */}
                <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    src="/bg.mp4"
                    autoPlay
                    loop
                    muted
                />

                {/* Optional overlay for better readability */}
                <div className="absolute top-0 left-0 w-full h-full bg-black/50"></div>

                {/* Animated Foreground Content */}
                <motion.div
                    ref={ref}
                    initial="hidden"
                    animate={controls}
                    variants={variants}
                    className="relative z-10 grid md:grid-cols-4 gap-10 items-center justify-center overflow-hidden rounded-xl p-10"
                >
                    {/* Left Section */}
                    <motion.div
                        variants={fadeUp(0.3)}
                        className="md:col-span-3 space-y-6 text-left"
                    >
                        <h2 className="text-4xl font-bold text-[#00d4ff]">
                            Naz Holdings
                        </h2>
                        <p className="text-gray-300 leading-relaxed">
                            We are a trusted real estate company dedicated to delivering premium properties that meet the highest standards of quality and design. Our commitment to transparency ensures that every transaction is clear, straightforward, and in the best interest of our clients. With a focus on long-term value, we provide personalized solutions that help clients make informed decisions and achieve sustainable investment growth. By combining market expertise with exceptional customer service, we strive to build lasting relationships and exceed expectations at every step of the property journey.
                        </p>


                    </motion.div>

                    {/* Right Section (Optional Image or Content) */}

                    <motion.div
                        variants={fadeUp(0.8)}
                        className="md:col-span-1 flex justify-center md:justify-end"
                    >
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

                </motion.div>
            </div>

        </div>
    );
};

export default About;
