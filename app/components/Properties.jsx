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
        images: ["/PROPERTIES19.jpg", "/PROPERTIES2.jpg", "/PROPERTIES3.jpg"],
    },
    {
        id: 2,
        title: "Urban Studio Apartment",
        location: "Dhanmondi, Dhaka",
        description:
            "A cozy 1-bedroom, 1-bath studio apartment ideal for students or young professionals. Approximately 650 sq. ft. of functional space with a balcony and bright natural lighting. Located close to cafes, shopping centers, and public transport — live smart and save more.",
        beds: 1,
        baths: 1,
        images: ["/PROPERTIES21.jpg", "/PROPERTIES2.jpg"],
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

// 🟦 FULL-SCREEN MODAL COMPONENT
const Modal = ({ property, onClose }) => {
    const [index, setIndex] = useState(0);
    if (!property) return null;

    const prev = () =>
        setIndex((i) => (i - 1 + property.images.length) % property.images.length);
    const next = () => setIndex((i) => (i + 1) % property.images.length);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70"
            onClick={onClose}
        >
            <div
                className="bg-white w-full h-full overflow-auto relative"
                onClick={(e) => e.stopPropagation()}
            >
                {/* IMAGE SECTION */}
                <div className="relative w-full h-[60vh] md:h-[75vh] overflow-hidden">
                    <img
                        src={property.images[index] || "/images/placeholder.png"}
                        alt={`${property.title}-${index}`}
                        className="w-full h-full object-cover"
                    />

                    {property.images.length > 1 && (
                        <>
                            <button
                                onClick={prev}
                                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg text-lg"
                            >
                                ‹
                            </button>
                            <button
                                onClick={next}
                                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-3 rounded-full shadow-lg text-lg"
                            >
                                ›
                            </button>
                        </>
                    )}

                    <button
                        onClick={onClose}
                        className="absolute right-4 top-4 bg-white/80 p-3 rounded-full shadow-lg text-lg"
                    >
                        ✕
                    </button>
                </div>

                {/* CONTENT SECTION */}
                <div className="p-8 max-w-6xl mx-auto">
                    <h2 className="text-3xl font-bold mb-4">{property.title}</h2>
                    <p className="text-base text-slate-700 leading-relaxed">
                        {property.description}
                    </p>

                    <div className="mt-6 flex flex-wrap gap-8 text-sm text-slate-800">
                        <div><strong>Beds:</strong> {property.beds}</div>
                        <div><strong>Baths:</strong> {property.baths}</div>
                        <div><strong>Location:</strong> {property.location}</div>
                    </div>

                    <div className="mt-8 flex gap-4">
                        <a
                            className="px-6 py-3 bg-sky-600 text-white rounded-lg hover:bg-sky-700"
                            href="tel:+8801700000000"
                        >
                            📞 Contact Owner
                        </a>
                        <button
                            onClick={onClose}
                            className="px-6 py-3 border border-slate-300 rounded-lg hover:bg-slate-100"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// 🟧 MAIN COMPONENT
const Properties = () => {
    const [selected, setSelected] = useState(null);
    const visible = fakeProperties.slice(0, 2); // show 2 cards

    return (
        <div className="w-full py-10">
            <div className="w-full max-w-7xl mx-auto px-4 flex items-start justify-between">
                <div>
                    <h1 className="text-2xl font-semibold text-slate-800">Recent Offers</h1>
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
                    <Card
                        key={p.id}
                        p={p}
                        index={index}
                        onOpen={(prop) => setSelected(prop)}
                    />
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
