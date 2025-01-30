'use client';
import Link from 'next/link';
import { useState } from 'react';

export default function LandingPage() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="flex flex-col justify-center items-center h-screen bg-cover bg-center text-white font-sans" 
            style={{ background: "lightpink" }}> {/* Proper image URL here */}
            <h1 className="text-4xl font-bold mb-5 text-shadow-lg">
                Welcome to Hekto
            </h1>
            <p className="text-xl max-w-xl text-center mb-8 font-light p-5">
                Discover the Best Furniture for Your Home. High-quality furniture with the best deals. Transform your space with elegance.
            </p>
            <Link href="/login"
                className={`px-6 py-3 rounded-lg text-lg mt-5 shadow-md transition-all duration-300 ease-in-out 
                    ${isHovered ? 'bg-blue-700' : 'bg-blue-500'} hover:bg-blue-600`}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                Login to Continue
            </Link>
        </div>
    );
}
