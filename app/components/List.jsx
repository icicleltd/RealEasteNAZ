"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const images = [
    "/2.jpg", "/3.jpg", "/4.jpg", "/5.jpg", "/10.jpg", "/1.jpg",
    "/6.jpg", "/7.jpg", "/8.jpg", "/9.jpg", "/11.jpg", "/12.jpg"
];

const PairedScrollGallery = () => {
    const containerRef = useRef(null);
    const colRefs = useRef([[], [], [], []]);
    const [scrollDone, setScrollDone] = useState(false);

    // Split images into 4 columns, 3 images each
    const cols = [[], [], [], []];
    images.forEach((img, i) => {
        cols[i % 4].push(img);
    });

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        const handleScroll = () => {
            const scrollTop = container.scrollTop;

            colRefs.current.forEach((col, index) => {
                col.forEach((el) => {
                    if (!el) return;

                    // 1st & 3rd scroll UP (-1), 2nd & 4th scroll DOWN (1)
                    const direction = index % 2 === 0 ? -1 : 1;

                    const colHeight = col.reduce((acc, el) => acc + (el.offsetHeight + 20), 0); // 20 = gap
                    const maxTranslate = Math.max(0, colHeight - container.offsetHeight);

                    let translateY = direction * scrollTop;
                    if (Math.abs(translateY) > maxTranslate) {
                        translateY = direction * maxTranslate;
                    }

                    el.style.transform = `translateY(${translateY}px)`;
                });
            });

            // Stop scroll when all columns reach their end
            const allColsReachedEnd = colRefs.current.every((col) => {
                const colHeight = col.reduce((acc, el) => acc + (el.offsetHeight + 20), 0);
                return scrollTop >= colHeight - container.offsetHeight;
            });

            if (allColsReachedEnd && !scrollDone) {
                setScrollDone(true);
                container.style.overflowY = "hidden";
            }
        };

        container.addEventListener("scroll", handleScroll);
        return () => container.removeEventListener("scroll", handleScroll);
    }, [scrollDone]);

    return (
        <div>
            <div
                ref={containerRef}
                style={{
                    height: "100vh",
                    overflowY: "scroll",
                    position: "relative",
                    scrollbarWidth: "none",
                    msOverflowStyle: "none",
                }}
                className="hide-scrollbar"
            >
                <div style={{ display: "flex", gap: "20px", padding: "20px", position: "relative" }}>
                    {cols.map((col, colIndex) => (
                        <div
                            key={colIndex}
                            style={{
                                flex: 1,
                                display: "flex",
                                flexDirection: "column",
                                gap: "20px",
                                position: "relative",
                            }}
                        >
                            {col.map((img, i) => (
                                <div key={i} ref={(el) => (colRefs.current[colIndex][i] = el)}>
                                    <Image
                                        src={img}
                                        width={400}
                                        height={300}
                                        style={{ width: "100%", height: "auto", borderRadius: "15px" }}
                                    />
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </div>
    );
};

export default PairedScrollGallery;
