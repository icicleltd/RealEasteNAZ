"use client";

import React, { useState } from "react";
import Link from "next/link";

const fakeProperties = [
    {
        id: 1,
        title: "Happy Mansion",
        price: "$6,000,000",
        location: "60-62, Village Road",
        description:
            "*****NEWWWWW × 100000 Rare in City*****BEAUTIFUL, BIG Living rm, MUST C !!!",
        beds: 3,
        baths: 2,
        rating: 4.8,
        images: ["/PROPERTIES1.jpg", "/PROPERTIES2.jpg", "/PROPERTIES3.jpg"],
    },
    {
        id: 2,
        title: "testproperty",
        price: "$400 / month",
        location: "test address",
        description: "test description",
        beds: 1,
        baths: 1,
        rating: 4.1,
        images: ["/PROPERTIES4.jpg", "/PROPERTIES5.jpg"],
    },
    {
        id: 3,
        title: "testdsadsadsadsadsa",
        price: "$50",
        location: "dasadsadasdasadsadas",
        description: "dasadsadadadsa",
        beds: 4,
        baths: 2,
        rating: 3.9,
        images: ["/PROPERTIES6.jpg"],
    },
    {
        id: 4,
        title: "Lakeview Villa",
        price: "$1,200,000",
        location: "Lake Road",
        description: "Nice lake view villa with garden and garage.",
        beds: 5,
        baths: 4,
        rating: 4.9,
        images: ["/PROPERTIES7.jpg", "/PROPERTIES8.jpg"],
    },
];

// 🟩 CARD COMPONENT
const Card = ({ p, index, onOpen }) => {
    const isEven = index % 2 === 1; // alternate layout

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
            <div className="p-6 md:w-1/2 flex flex-col justify-between">
                <div>
                    <h3 className="text-2xl font-semibold">{p.title}</h3>
                    <p className="text-sm text-slate-500 mt-1 flex items-center">
                        <svg
                            className="w-4 h-4 inline-block mr-1 text-sky-600"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                        >
                            <path d="M10 2C6 2 3 5 3 9c0 5 7 9 7 9s7-4 7-9c0-4-3-7-7-7z" />
                        </svg>
                        {p.location}
                    </p>
                    <p className="text-base text-slate-600 mt-3 line-clamp-3">
                        {p.description}
                    </p>
                </div>

                <div className="mt-5 flex items-center justify-between">
                    <div>
                        <div className="text-lg font-bold">{p.price}</div>
                        <div className="text-xs text-slate-500 mt-1">
                            {p.beds} Beds • {p.baths} Baths
                        </div>
                    </div>
                    <div className="text-sm text-slate-600">
                        {/* Mobile Call Button */}
                        <a
                            href="tel:+8801700000000"
                            className="bg-sky-500 hover:bg-sky-600 text-white px-3 py-1 rounded-md text-sm inline-block md:hidden"
                            onClick={(e) => e.stopPropagation()}
                        >
                            📞 Call Now
                        </a>

                        {/* Desktop Call Button */}
                        <button
                            onClick={(e) => {
                                e.stopPropagation();
                                window.open("tel:+8801700000000");
                            }}
                            className="hidden md:inline-block bg-sky-500 hover:bg-sky-600 text-white px-3 py-1 rounded-md text-sm"
                        >
                            📞 +880 1700-000000
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// 🟦 MODAL COMPONENT
const Modal = ({ property, onClose }) => {
    const [index, setIndex] = useState(0);
    if (!property) return null;

    const prev = () =>
        setIndex((i) => (i - 1 + property.images.length) % property.images.length);
    const next = () => setIndex((i) => (i + 1) % property.images.length);

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            onClick={onClose}
        >
            <div
                className="bg-white rounded-lg max-w-3xl w-full overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <div className="relative">
                    <div className="h-64 md:h-80 w-full overflow-hidden">
                        <img
                            src={property.images[index] || "/images/placeholder.png"}
                            alt={`${property.title}-${index}`}
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {property.images.length > 1 && (
                        <>
                            <button
                                onClick={prev}
                                className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
                            >
                                ‹
                            </button>
                            <button
                                onClick={next}
                                className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow"
                            >
                                ›
                            </button>
                        </>
                    )}

                    <button
                        onClick={onClose}
                        className="absolute right-2 top-2 bg-white/80 p-2 rounded"
                    >
                        ✕
                    </button>
                </div>

                <div className="p-6">
                    <h2 className="text-2xl font-bold mb-2">{property.title}</h2>
                    <div className="flex items-center justify-between">
                        <div className="text-lg font-semibold">{property.price}</div>
                        <div className="text-sm">⭐ {property.rating.toFixed(1)}</div>
                    </div>

                    <p className="text-sm text-slate-600 mt-3">{property.description}</p>

                    <div className="mt-4 flex gap-6 text-sm text-slate-700">
                        <div><strong>Beds:</strong> {property.beds}</div>
                        <div><strong>Baths:</strong> {property.baths}</div>
                        <div><strong>Location:</strong> {property.location}</div>
                    </div>

                    <div className="mt-6 flex gap-3">
                        <a
                            className="px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700"
                            href="#contact"
                        >
                            Contact Owner
                        </a>
                        <button
                            onClick={onClose}
                            className="px-4 py-2 border rounded"
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

// 🟧 MAIN PAGE
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

            {/* Desktop Full-Width Cards */}
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

            {/* Mobile See More Button */}
            <div className="mt-8 md:hidden text-center">
                <Link
                    href="/properties/all"
                    className="inline-block px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700"
                >
                    See more
                </Link>
            </div>

            {selected && <Modal property={selected} onClose={() => setSelected(null)} />}
        </div>
    );
};

export default Properties;
