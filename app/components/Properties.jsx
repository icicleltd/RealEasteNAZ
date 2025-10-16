"use client";

import React, { useState } from "react";
import Link from "next/link";

const fakeProperties = [
    {
        id: 1,
        title: "Happy Mansion",
        location: "24/4A, Niketon, Dhaka",
        description:
            "This luxurious 3-bedroom, 2-bath apartment spans around 1,750 sq. ft. Featuring a spacious living room, modern kitchen, and premium fittings, it's designed for ultimate comfort. Located in the heart of Niketon, it offers easy access to Gulshan and Banani. Perfect for families seeking both convenience and class — a true blend of luxury and lifestyle.",
        beds: 3,
        baths: 2,
        images: ["/PROPERTIES19.jpg", "/PROPERTIES2.jpg", "/PROPERTIES3.jpg", "/PROPERTIES4.jpg", "/PROPERTIES5.jpg"],
    },
    {
        id: 2,
        title: "Urban Studio Apartment",
        location: "Dhanmondi, Dhaka",
        description:
            "A cozy 1-bedroom, 1-bath studio apartment ideal for students or young professionals. Approximately 650 sq. ft. of functional space with a balcony and bright natural lighting. Located close to cafes, shopping centers, and public transport — live smart and save more.",
        beds: 3,
        baths: 1,
        images: ["/PROPERTIES21.jpg", "/PROPERTIES9.jpg", "/PROPERTIES10.jpg", "/PROPERTIES12.jpg", "/PROPERTIES11.jpg"],
    },
    {
        id: 3,
        title: "Green Valley Apartment",
        location: "Bashundhara R/A, Dhaka",
        description:
            "This modern 4-bedroom, 2-bath apartment covers 1,950 sq. ft. with a spacious open-plan layout. Surrounded by greenery, it offers a peaceful environment away from city noise. Includes underground parking, 24/7 security, and rooftop access — perfect for families who love calm and comfort.",
        beds: 4,
        baths: 2,
        images: ["/PROPERTIES6.jpg"],
    },
    {
        id: 4,
        title: "Lakeview Villa",
        location: "Lake Road, Gulshan-2, Dhaka",
        description:
            "An elegant 5-bedroom, 4-bath villa with a private garden, two-car garage, and panoramic lake view. This 4,200 sq. ft. home blends modern architecture with natural beauty. Perfect for luxury living with privacy, security, and serene surroundings.",
        beds: 5,
        baths: 4,
        images: ["/PROPERTIES7.jpg", "/PROPERTIES8.jpg"],
    },
];

// 🟩 CARD COMPONENT
const Card = ({ p, index, onOpen }) => {
    const isEven = index % 2 === 1;

    return (
        <div
            className={`w-full h-[450px] max-w-7xl mx-auto bg-white rounded-2xl shadow-md overflow-hidden border border-black/10 hover:shadow-lg transition cursor-pointer flex flex-col md:flex-row ${isEven ? "md:flex-row-reverse" : ""
                }`}
            onClick={() => onOpen(p)}
            role="button"
        >
            {/* IMAGE SECTION */}
            <div className="md:w-1/2 h-64 md:h-fit overflow-hidden">
                <img
                    src={p.images[0] || "/images/placeholder.png"}
                    alt={p.title}
                    className="w-full h-full object-cover"
                />
            </div>

            {/* INFO SECTION */}
            <div
                className="relative p-6 md:w-1/2 flex flex-col justify-center items-center bg-cover bg-center shadow-lg"
                style={{ backgroundImage: "url('/cardbg.jpg')", minHeight: "400px" }}
            >
                <div className="bg-white/60 w-full max-w-2xl rounded-2xl p-6 text-center text-white shadow-xl shadow-gray-100 border border-black/20">
                    <h3 className="text-3xl font-bold text-[#0B0732]/90">{p.title}</h3>
                    <p className="text-base text-black mt-3 line-clamp-3">{p.description}</p>

                    <div className="mt-6 flex flex-col md:flex-row items-center justify-between gap-3">
                        <div className="text-sm text-black/50 text-left flex flex-col md:flex-row md:items-center md:gap-4">
                            <p className="flex items-center">
                                <svg
                                    className="w-4 h-4 inline-block mr-1 text-sky-300"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                >
                                    <path d="M10 2C6 2 3 5 3 9c0 5 7 9 7 9s7-4 7-9c0-4-3-7-7-7z" />
                                </svg>
                                {p.location}
                            </p>
                            <p>
                                {p.beds} Beds • {p.baths} Baths
                            </p>
                        </div>

                        {/* Call Buttons */}
                        <div>
                            {/* Mobile */}
                            <a
                                href="tel:+8801700000000"
                                className="bg-sky-500 hover:bg-sky-600 text-white px-4 py-2 rounded-md text-sm inline-block md:hidden"
                                onClick={(e) => e.stopPropagation()}
                            >
                                📞 Call Now
                            </a>

                            {/* Desktop */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    window.open("tel:+8801700000000");
                                }}
                                className="hidden md:inline-block bg-sky-500 hover:bg-sky-600 text-white px-5 py-2 rounded-md text-sm"
                            >
                                📞 +880 1700-000000
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

// 🟦 FIXED FULL-SCREEN MODAL COMPONENT
const Modal = ({ property, onClose }) => {
    const [index, setIndex] = useState(0);
    if (!property) return null;

    const handleImageClick = (i) => setIndex(i);
    const prev = () => setIndex((i) => (i - 1 + property.images.length) % property.images.length);
    const next = () => setIndex((i) => (i + 1) % property.images.length);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            onClick={onClose}
        >
            <div
                className="relative w-full h-full flex flex-col bg-cover bg-center overflow-hidden"
                style={{
                    backgroundImage: "url('/productbg.jpg')",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                }}
                onClick={(e) => e.stopPropagation()}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Close Button */}
                <button
                    onClick={onClose}
                    className="absolute right-6 top-6 bg-white/90 hover:bg-white text-xl px-3 py-1 rounded-full shadow z-50"
                >
                    ✕
                </button>

                {/* CONTENT */}
                <div className="relative flex flex-col lg:flex-row h-full text-white z-10">
                    {/* LEFT MAIN IMAGE */}
                    <div className="relative w-full lg:w-1/2 h-[50vh] lg:h-full overflow-hidden">
                        <img
                            src={property.images[index] || "/images/placeholder.png"}
                            alt={`${property.title}-${index}`}
                            className="w-full h-full object-cover rounded-none"
                        />
                        {property.images.length > 1 && (
                            <>
                                <button
                                    onClick={prev}
                                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 text-black p-3 rounded-full shadow-lg text-lg"
                                >
                                    ‹
                                </button>
                                <button
                                    onClick={next}
                                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 text-black p-3 rounded-full shadow-lg text-lg"
                                >
                                    ›
                                </button>
                            </>
                        )}
                    </div>

                    {/* RIGHT DETAILS */}
                    <div className="flex-1 p-8 lg:p-12 flex flex-col justify-center">
                        <h2 className="text-3xl font-bold mb-4 text-white">{property.title}</h2>
                        <p className="text-base text-slate-200 leading-relaxed mb-6">
                            {property.description}
                        </p>

                        <div className="flex flex-wrap gap-8 text-sm text-slate-200 mb-8">
                            <div><strong>Beds:</strong> {property.beds}</div>
                            <div><strong>Baths:</strong> {property.baths}</div>
                            <div><strong>Location:</strong> {property.location}</div>
                        </div>

                        <div className="flex gap-4">
                            <a
                                className="px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700 flex items-center gap-2"
                                href="tel:+8801700000000"
                            >
                                📞 Contact Owner
                            </a>
                            <button
                                onClick={onClose}
                                className="px-6 py-3 border border-slate-300 bg-white/10 text-white rounded-lg hover:bg-white/20"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>

                {/* THUMBNAILS */}
                <div className="absolute bottom-0 left-0 w-full bg-black/40 px-6 py-4 flex gap-3 overflow-x-auto backdrop-blur-sm z-20">
                    {property.images.map((img, i) => (
                        <img
                            key={i}
                            src={img}
                            alt={`${property.title}-${i}`}
                            onClick={() => handleImageClick(i)}
                            className={`w-28 h-20 object-cover rounded-lg cursor-pointer border-2 transition ${i === index ? "border-sky-400" : "border-transparent"
                                }`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

// 🟧 MAIN COMPONENT
const Properties = () => {
    const [selected, setSelected] = useState(null);
    const visible = fakeProperties.slice(0, 2);

    return (
        <div className="w-full py-10">
            <div className="w-full max-w-7xl mx-auto px-4 flex items-start justify-between">
                <div>
                    <h1 className="text-2xl font-semibold text-slate-800">Project'&Apss</h1>
                    <p className="text-sm text-slate-500">Show more offers</p>
                </div>

                <div className="hidden md:flex md:flex-col items-end">
                    <Link
                        href="/properties"
                        className="mt-2 inline-block px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700"
                    >
                        See more
                    </Link>
                </div>
            </div>

            {/* Cards */}
            <div className="mt-8 flex flex-col gap-12">
                {visible.map((p, index) => (
                    <Card key={p.id} p={p} index={index} onOpen={(prop) => setSelected(prop)} />
                ))}
            </div>

            {/* Mobile "See more" */}
            <div className="mt-8 md:hidden text-center">
                <Link
                    href="/properties/all"
                    className="inline-block px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700"
                >
                    See more
                </Link>
            </div>

            {/* Modal */}
            {selected && <Modal property={selected} onClose={() => setSelected(null)} />}
        </div>
    );
};

export default Properties;
