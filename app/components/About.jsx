"use client";
import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

const About = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView({ threshold: 0.4 });

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    const variants = {
        hidden: {
            opacity: 0,
            y: 200,
            borderRadius: "50%",
            width: 150,
            height: 150,
            backgroundColor: "#00d4ff",
        },
        visible: {
            opacity: 1,
            y: 0,
            borderRadius: "0%",
            width: "80vw",
            height: "60vh",
            backgroundColor: "#0a0a0a",
            transition: {
                duration: 1.2,
                ease: "easeInOut",
            },
        },
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#111] text-white">
            <motion.div
                ref={ref}
                className="flex items-center justify-center shadow-lg"
                initial="hidden"
                animate={controls}
                variants={variants}
            >
                <h2 className="text-3xl font-bold">About Section</h2>
            </motion.div>
        </div>
    );
};

export default About;
