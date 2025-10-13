"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const images = [
    "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg", "/10.jpg", "/1.jpg",
    "/6.jpg", "/7.jpg", "/8.jpg", "/9.jpg", "/11.jpg", "/12.jpg"
];

const List = () => {
    const containerRef = useRef(null);
    const colRefs = useRef([[], [], [], []]); // 4 columns
    const [visible, setVisible] = useState([]);

    // Intersection Observer for fade-in effect
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

        colRefs.current.forEach((col) =>
            col.forEach((el) => el && observer.observe(el))
        );

        return () => observer.disconnect();
    }, []);

    // Scroll effect
    useEffect(() => {
        const handleScroll = () => {
            if (!containerRef.current) return;
            const scrollTop = containerRef.current.scrollTop;

            colRefs.current.forEach((col, colIndex) => {
                const speed = colIndex % 2 === 0 ? 0.5 : 1.5; // 1st & 3rd slower, 2nd & 4th faster
                col.forEach((el) => {
                    if (el) el.style.transform = `translateY(${scrollTop * speed}px)`;
                });
            });
        };

        const container = containerRef.current;
        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, []);

    // Split images into 4 columns
    const cols = [[], [], [], []];
    images.forEach((img, i) => {
        cols[i % 4].push({ src: img, index: i });
    });

    const containerStyle = {
        display: "flex",
        overflowY: "scroll",
        height: "100vh",
        gap: "20px",
        padding: "20px",
    };

    const columnStyle = {
        display: "flex",
        flexDirection: "column",
        gap: "20px",
        flex: "1",
    };

    const itemStyle = (isVisible) => ({
        opacity: isVisible ? 1 : 0,
        transition: "opacity 0.8s ease",
    });

    const imgStyle = {
        width: "100%",
        height: "auto",
        borderRadius: "15px",
        objectFit: "cover",
    };

    return (
        <div ref={containerRef} style={containerStyle}>
            {cols.map((col, colIndex) => (
                <div key={colIndex} style={columnStyle}>
                    {col.map((item) => (
                        <div
                            key={item.index}
                            data-index={item.index}
                            ref={(el) => (colRefs.current[colIndex][item.index] = el)}
                            style={itemStyle(visible.includes(item.index))}
                        >
                            <Image
                                src={item.src}
                                alt={`image-${item.index}`}
                                width={400}
                                height={300}
                                style={imgStyle}
                            />
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
};

export default List;
