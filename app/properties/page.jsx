"use client";

import React, { useState } from "react";
import Link from "next/link";
// if you need; not used below

// reuse same fakeProperties list — you can also import it from a shared file.
// For simplicity copy the same fakeProperties array from the component file above
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
        images: ["/1.jpg", "/2.jpg", "/3.jpg"],
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


// For brevity I'll re-define the array quickly (copy exactly as in Properties.jsx)
const fullList = [
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
        images: ["/images/house1-1.jpg", "/images/house1-2.jpg", "/images/house1-3.jpg"],
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
        images: ["/images/prop2-1.jpg", "/images/prop2-2.jpg"],
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

const AllProperties = () => {
    const [selected, setSelected] = useState(null);

    const Card = ({ p }) => (
        <div
            className="bg-white rounded-lg overflow-hidden border shadow-sm hover:shadow-lg transition cursor-pointer"
            onClick={() => setSelected(p)}
        >
            <div className="h-44 w-full overflow-hidden">
                <img src={p.images[0] || "/images/placeholder.png"} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
                <h3 className="font-semibold">{p.title}</h3>
                <div className="text-sm text-slate-600 mt-1">{p.location}</div>
                <div className="mt-2 flex items-center justify-between">
                    <div className="font-bold">{p.price}</div>
                    <div className="text-sm">⭐ {p.rating.toFixed(1)}</div>
                </div>
            </div>
        </div>
    );

    const Modal = ({ property, onClose }) => {
        const [index, setIndex] = useState(0);
        if (!property) return null;
        return (
            <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4" onClick={onClose}>
                <div className="bg-white rounded-lg max-w-3xl w-full overflow-hidden" onClick={(e) => e.stopPropagation()}>
                    <div className="h-64 overflow-hidden">
                        <img src={property.images[index]} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-6">
                        <h2 className="text-xl font-bold">{property.title}</h2>
                        <p className="text-sm text-slate-600 mt-2">{property.description}</p>
                        <div className="mt-4">
                            <button onClick={() => setIndex((i) => (i - 1 + property.images.length) % property.images.length)} className="px-3 py-1 border mr-2">Prev</button>
                            <button onClick={() => setIndex((i) => (i + 1) % property.images.length)} className="px-3 py-1 border">Next</button>
                            <button onClick={onClose} className="ml-4 px-3 py-1 border">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-semibold">All properties</h1>
                <Link href="/" className="text-sm text-slate-500 underline">
  Back
</Link>
            </div>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {fullList.map((p) => (
                    <Card key={p.id} p={p} />
                ))}
            </div>

            {selected && <Modal property={selected} onClose={() => setSelected(null)} />}
        </div>
    );
};

export default AllProperties;
