"use client";

import React, { useState } from "react";
import Link from "next/link";

/**
 * Main properties component showing 6 cards on desktop + "See more" button
 * - Fake data array of 10 properties (each with multiple images)
 * - Click a card -> opens modal with full details & image carousel
 *
 * Notes:
 * - Put your images in /public/images/... or use the placeholderURLs below.
 * - Uses Tailwind utility classes for quick styling. Replace with your CSS if needed.
 */

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
        images: [
            "/1.jpg",
            "/2.jpg",
            "/3.jpg",
        ],
    },
    {
        id: 2,
        title: "testproperty",
        price: "$400 / month",
        location: "test adress",
        description: "test description",
        beds: 1,
        baths: 1,
        rating: 4.1,
        images: ["/4.jpg", "/5.jpg"],
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
        images: ["/images/prop3-1.jpg"],
    },
    // create remaining 7 fake properties
    {
        id: 4,
        title: "Lakeview Villa",
        price: "$1,200,000",
        location: "Lake Road",
        description: "Nice lake view villa with garden and garage.",
        beds: 5,
        baths: 4,
        rating: 4.9,
        images: ["/images/house2-1.jpg", "/images/house2-2.jpg"],
    },
    {
        id: 5,
        title: "Cozy Apartment",
        price: "$850 / month",
        location: "City Center",
        description: "Small cozy apartment nearby subway.",
        beds: 2,
        baths: 1,
        rating: 4.2,
        images: ["/images/apt1-1.jpg", "/images/apt1-2.jpg"],
    },
    {
        id: 6,
        title: "Modern Loft",
        price: "$2,300 / month",
        location: "Industrial District",
        description: "Open-plan loft with high ceilings and lots of light.",
        beds: 1,
        baths: 1,
        rating: 4.6,
        images: ["/images/loft1-1.jpg", "/images/loft1-2.jpg"],
    },
    {
        id: 7,
        title: "Suburban House",
        price: "$420,000",
        location: "Green Suburb",
        description: "Family home with backyard and large driveway.",
        beds: 4,
        baths: 3,
        rating: 4.3,
        images: ["/images/house3-1.jpg", "/images/house3-2.jpg"],
    },
    {
        id: 8,
        title: "Penthouse Suite",
        price: "$9,500 / month",
        location: "Downtown Skyline",
        description: "Luxury penthouse with rooftop access and gym.",
        beds: 3,
        baths: 3,
        rating: 4.95,
        images: ["/images/pent1-1.jpg", "/images/pent1-2.jpg", "/images/pent1-3.jpg"],
    },
    {
        id: 9,
        title: "Country Cottage",
        price: "$120,000",
        location: "Countryside Lane",
        description: "Quiet cottage surrounded by fields.",
        beds: 2,
        baths: 1,
        rating: 4.0,
        images: ["/images/cottage1-1.jpg"],
    },
    {
        id: 10,
        title: "Studio Near Park",
        price: "$600 / month",
        location: "Parkside",
        description: "Efficient studio perfect for students.",
        beds: 0,
        baths: 1,
        rating: 3.8,
        images: ["/images/studio1-1.jpg", "/images/studio1-2.jpg"],
    },
];

const Card = ({ p, onOpen }) => {
    return (
        <div
            className="bg-white rounded-lg shadow-sm overflow-hidden border border-black/10 hover:shadow-lg transition cursor-pointer"
            onClick={() => onOpen(p)}
            role="button"
        >
            <div className="h-44 md:h-48 w-full overflow-hidden">
                {/* show first image as cover */}
                <img
                    src={p.images[0] || "/images/placeholder.png"}
                    alt={p.title}
                    className="w-full h-full object-cover"
                />
            </div>

            <div className="p-4">
                <h3 className="text-lg font-semibold">{p.title}</h3>
                <p className="text-sm text-slate-500 mt-1 flex items-center">
                    <svg
                        className="w-4 h-4 inline-block mr-1 text-green-600"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                    >
                        <path d="M10 2C6 2 3 5 3 9c0 5 7 9 7 9s7-4 7-9c0-4-3-7-7-7z" />
                    </svg>
                    {p.location}
                </p>

                <p className="text-sm text-slate-600 mt-2 line-clamp-2">{p.description}</p>

                <div className="mt-4 flex items-center justify-between">
                    <div>
                        <div className="text-base font-bold">{p.price}</div>
                        <div className="text-xs text-slate-500 mt-1">
                            {p.beds} Beds &nbsp; {p.baths} Baths
                        </div>
                    </div>
                    <div className="text-sm text-slate-600">
                        ⭐ {p.rating.toFixed(1)}
                    </div>
                </div>
            </div>
        </div>
    );
};

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

                    {/* carousel controls */}
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

const Properties = () => {
    const [selected, setSelected] = useState(null);

    // show only first 6 on the main page (desktop)
    const visible = fakeProperties.slice(0, 6);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex items-start justify-between">
                <div>
                    <h1 className="text-2xl font-semibold text-slate-800">Recent offers</h1>
                    <p className="text-sm text-slate-500">Show more offers</p>
                </div>

                {/* Right side See more button placed under grid on small screens, but aligned right on larger screens */}
                <div className="hidden md:flex md:flex-col items-end">
                    <Link
                        href="/properties"
                        className="mt-2 inline-block px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700"
                    >
                        See more
                    </Link>
                </div>

            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {visible.map((p) => (
                    <Card key={p.id} p={p} onOpen={(prop) => setSelected(prop)} />
                ))}
            </div>

            {/* mobile/under-grid See more */}
            <div className="mt-6 md:hidden text-center">
                <Link
                    href="/properties/all"
                    className="mt-2 inline-block px-4 py-2 bg-sky-600 text-white rounded hover:bg-sky-700"
                >
                    See more
                </Link>
            </div>

            {/* Modal */}
            {selected && (
                <Modal property={selected} onClose={() => setSelected(null)} />
            )}
        </div>
    );
};

export default Properties;
