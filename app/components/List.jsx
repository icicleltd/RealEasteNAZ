"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const images = [
    "/2.jpg",
    "/3.jpg",
    "/4.jpg",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
    "/9.jpg",
];

const List = () => {
    const [visible, setVisible] = useState([]);
    const containerRef = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setVisible((prev) => [...prev, parseInt(entry.target.dataset.index)]);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );

        containerRef.current.forEach((el) => el && observer.observe(el));

        return () => {
            observer.disconnect();
        };
    }, []);

    const containerStyle = {
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
        gap: "20px",
        padding: "40px",
    };

    const itemStyle = (isVisible) => ({
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(50px)",
        transition: "all 0.8s ease",
    });

    const imgStyle = {
        width: "100%",
        height: "auto",
        borderRadius: "15px",
        objectFit: "cover",
        display: "block",
    };

    return (
        <div style={containerStyle}>
            {images.map((src, index) => (
                <div
                    key={index}
                    data-index={index}
                    ref={(el) => (containerRef.current[index] = el)}
                    style={itemStyle(visible.includes(index))}
                >
                    <Image
                        src={src}
                        alt={`image-${index}`}
                        width={400}
                        height={300}
                        style={imgStyle}
                    />
                </div>
            ))}
        </div>
    );
};

export default List;
